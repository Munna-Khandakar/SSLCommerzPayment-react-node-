import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentListRow from './StudentListRow';

const StudentList = () => {
  const [drivers, setDrivers] = useState([]);
  const fetchDrivers = async () => {
    const data = await axios.get(
      `${STRAPI_URL}/users/?filters[user_type]=student`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('admin_token')
          )}`,
        },
      }
    );

    setDrivers(data?.data);
  };

  useEffect(() => {
    fetchDrivers();
  }, []);
  return (
    <div className="my-5">
      <p className="font-semibold">Student List</p>
      <div id="bus-table" className="divide-y divide-gray-200">
        {drivers &&
          drivers.map((driver, index) => (
            <StudentListRow driver={driver} key={index} />
          ))}
      </div>
    </div>
  );
};

export default StudentList;
