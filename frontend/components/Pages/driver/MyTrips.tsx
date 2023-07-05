import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MyTrips = () => {
  const router = useRouter();
  const [myTrips, setMyTrips] = useState([]);

  useEffect(() => {
    getMyTrips();
  }, []);

  const getMyTrips = async () => {
    const trips = await axios.get(
      `${STRAPI_URL}/trips?filters[driver_id]=${Number(
        localStorage.getItem('driver_id')
      )}&populate=*`,
      {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('driver_token')),
        },
      }
    );
    const a = trips?.data?.data?.filter((trip) => {
      return trip?.attributes?.status == 'created';
    });
    if (a.length > 0) {
      router.push(`/trip/${a[0].id}`);
    }
    setMyTrips(trips?.data?.data);
    console.log(trips?.data?.data);
  };

  return (
    <div>
      {myTrips.length > 0 && (
        <div>
          <p className="text-center font-bold">My Trips</p>
          <table>
            <thead>
              <tr>
                <th className="px-2">Date</th>
                <th className="px-2">Route</th>
                <th className="px-2">Bus</th>
                <th className="px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {myTrips.map((trip, index) => (
                <tr key={index}>
                  <td className="px-2">
                    {new Date(trip?.attributes?.createdAt).toLocaleDateString(
                      'en-US'
                    )}
                  </td>

                  <td className="px-2">
                    {trip?.attributes?.route?.data?.attributes?.name}
                  </td>
                  <td className="px-2">
                    {trip?.attributes?.bus?.data?.attributes?.name}
                  </td>
                  <td className="px-2">
                    {trip?.attributes?.status.toUpperCase()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
