import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoLocationOutline, IoLocation } from 'react-icons/io5';

const BusPresentLocation = ({ route }) => {
  const [tripDetaisl, setTripDetails] = useState(null);
  const [presentStopage, setPresentStopage] = useState({
    id: '',
    attributes: {
      name: '',
    },
  });
  const [nextStopage, setNextStopage] = useState({
    id: '',
    attributes: {
      name: '',
    },
  });
  const getTripDetails = async () => {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59
    );

    // filter ->route_id=my_route_id status != finished,createdAt=today
    const trip = await axios.get(
      `${STRAPI_URL}/trips?filters[route_id]=${route}&filters[status][$ne]=finished&filters[createdAt][$gte]=${startOfDay.toISOString()}&filters[createdAt][$lt]=${endOfDay.toISOString()}`
    );
    const tripStopages = trip?.data?.data[0]?.attributes?.stopages;
    setTripDetails(trip?.data?.data[0]);
    // select the present location: status = arrived
    //console.log(tripStopages);
    let tempPresent = [];
    let tempNext = [];
    if (tripStopages) {
      tripStopages.forEach((s) => {
        if (
          s.attributes.status == 'arrived' ||
          s.attributes.status == 'finished'
        ) {
          tempPresent.push(s);
        } else {
          tempNext.push(s);
        }
      });
    }
    if (tempPresent[tempPresent.length - 1]) {
      setPresentStopage(tempPresent[tempPresent.length - 1]);
    }
    if (tempNext[0]) {
      setNextStopage(tempNext[0]);
    }
    console.log(tempPresent[tempPresent.length - 1], tempNext[0]);
  };

  useEffect(() => {
    if (route) {
      getTripDetails();
    }
  }, [route]);

  if (tripDetaisl == null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col  rounded-md border p-2">
      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-col items-center justify-center">
          <div className="text-green-600">
            <IoLocationOutline size={15} />
          </div>
          <span className="text-xs font-thin">
            {presentStopage?.attributes?.name || 'BUP'}
          </span>
        </div>
        {`--->`}
        <div className="flex flex-col items-center justify-center">
          <IoLocation size={15} />
          <span className="text-xs font-thin">
            {nextStopage?.attributes?.name || 'BUP'}
          </span>
        </div>
      </div>
      <p className="text-center text-sm font-thin text-gray-400">
        {tripDetaisl?.attributes?.message || 'bus status'}
      </p>
    </div>
  );
};

export default BusPresentLocation;
