import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import StopageRow from './StopageRow';

const TripDetails = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [presentStopage, setPresentStopage] = useState({});
  const [nextStopage, setNextStopage] = useState({});

  const {
    data: trip,
    mutate,
    isValidating,
  } = useSWR(
    query?.trip_id ? `${STRAPI_URL}/trips/${query?.trip_id}?populate=*` : null,
    (url) => {
      return axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('driver_token')
            )}`,
          },
        })
        .then((res) => {
          return res?.data?.data?.attributes;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    { revalidateOnFocus: false }
  );
  useEffect(() => {
    if (trip?.status !== 'created') {
      router.push('/driver');
    }
  }, [trip]);

  const finishTripHandler = () => {
    axios
      .put(
        `${STRAPI_URL}/trips/${query?.trip_id}/?populate=*`,
        {
          data: {
            message: 'Trip has been finished',
            status: 'finished',
          },
        },
        {
          headers: {
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('driver_token')),
          },
        }
      )
      .then((response) => {
        mutate();
      })
      .catch((error) => {
        // Handle the error
        console.error('Error updating stopage:', error);
      });
  };

  if (isValidating) {
    return <p>loading...</p>;
  }

  const TextDesign = ({ label, text }) => {
    return (
      <div className="flex flex-row items-center gap-2">
        <p className="text-base font-extrabold">{label}:</p>
        <p className="max-w-max rounded-xl border bg-green-100 px-2 py-1 text-center">
          {text}
        </p>
      </div>
    );
  };

  const clickHandler = (stopage) => {
    const notificationMessage = `Your Bus has ${
      stopage?.attributes?.status == 'arrived' ? 'left' : 'arrived'
    } ${stopage?.attributes?.name}`;
    axios
      .put(
        `${STRAPI_URL}/trips/${query?.trip_id}/?populate=*`,
        {
          data: {
            message: notificationMessage,
            stopages: trip.stopages.map((stopageItem) => {
              if (stopageItem.id === stopage?.id) {
                return {
                  id: stopageItem.id,
                  attributes: {
                    name: stopage?.attributes?.name,
                    createdAt: stopage?.attributes?.createdAt,
                    updatedAt: stopage?.attributes?.updatedAt,
                    publishedAt: stopage?.attributes?.publishedAt,
                    status: `${
                      stopage?.attributes?.status == 'arrived'
                        ? 'finished'
                        : 'arrived'
                    }`,
                  },
                };
              }
              return stopageItem;
            }),
          },
        },
        {
          headers: {
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('driver_token')),
          },
        }
      )
      .then((response) => {
        if (!stopage?.attributes?.status) {
          const users = response?.data?.data?.attributes?.users?.data;
          const statusMap = response?.data?.data?.attributes?.statusMap;
          pushNotificationHandler(users, statusMap, notificationMessage);
        }
        mutate();
      })
      .catch((error) => {
        // Handle the error
        console.error('Error updating stopage:', error);
      });
  };

  const pushNotificationHandler = (users, statusMap, notificationMessage) => {
    const activeDevices = [];
    for (let user of users) {
      if (statusMap[user?.id] == 'yes') {
        activeDevices.push(user?.attributes?.device);
      }
    }

    const notificationTitle = `BUP | BMS`;
    const notificationBody = notificationMessage;

    sendNotification(activeDevices, notificationTitle, notificationBody);
  };

  const sendNotification = async (token, title, body) => {
    const serverKey = process.env.NEXT_PUBLIC_CLOUD_SERVER_KEY;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`,
    };

    const data = {
      registration_ids: token,
      notification: {
        title: title,
        body: body,
      },
    };

    try {
      const response = await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        data,
        { headers }
      );
      console.log('Notification sent successfully:', response.data);
      alert('Notification sent successfully');
      // Handle success response
    } catch (error) {
      console.error('Error sending notification:', error);
      // Handle error response
    }
  };

  return (
    <div>
      <div>
        <TextDesign label="Route" text={trip?.route?.data?.attributes?.name} />
        <TextDesign
          label="Details"
          text={trip?.route?.data?.attributes?.description}
        />
      </div>
      <div>
        <p>Your Stopages</p>
        {trip?.stopages?.map((stopage, index) => {
          return (
            <StopageRow
              stopage={stopage}
              key={index}
              clickHandler={() => {
                clickHandler(stopage);
              }}
            />
          );
        })}
      </div>
      <div
        className="m-1  rounded-md bg-green-100 p-2 text-center"
        onClick={finishTripHandler}
      >
        COMPLETE
      </div>
    </div>
  );
};

export default TripDetails;
