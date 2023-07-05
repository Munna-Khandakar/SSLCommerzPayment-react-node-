import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RouteListRow from './RouteListRow';

const RouteList = () => {
  const [routes, setRoutes] = useState([]);
  const fetchRoutes = async () => {
    const data = await axios.get(`${STRAPI_URL}/routes?populate=*`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem('admin_token')
        )}`,
      },
    });
    console.log(data?.data?.data);
    setRoutes(data?.data?.data);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);
  return (
    <div className="my-5">
      <p className="font-semibold">Route List</p>
      <div id="bus-table" className="divide-y divide-gray-200">
        {routes &&
          routes.map((route, index) => (
            <RouteListRow route={route} key={index} />
          ))}
      </div>
    </div>
  );
};

export default RouteList;
