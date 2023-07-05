import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DriverListRow from './DriverListRow';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const fetchDrivers = async () => {
    const data = await axios.get(
      `${STRAPI_URL}/users/?filters[user_type]=driver`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('admin_token')
          )}`,
        },
      }
    );
    console.log(data?.data);
    setDrivers(data?.data);
  };

  useEffect(() => {
    fetchDrivers();
  }, []);
  return (
    <div className="my-5">
      <p className="font-semibold">Driver List</p>
      <div id="bus-table" className="divide-y divide-gray-200">
        {drivers &&
          drivers.map((driver, index) => (
            <DriverListRow driver={driver} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DriverList;
