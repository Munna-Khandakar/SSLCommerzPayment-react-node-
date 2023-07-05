import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StopageListRow from './StopageListRow';

const StopageList = () => {
  const [stopages, setStopages] = useState([]);

  const fetchStopages = async () => {
    const data = await axios.get(`${STRAPI_URL}/stopages`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem('admin_token')
        )}`,
      },
    });
    console.log(data?.data?.data);
    setStopages(data?.data?.data);
  };

  useEffect(() => {
    fetchStopages();
  }, []);

  return (
    <div>
      <div className="my-5">
        <p className="font-semibold">Route List</p>
        <div id="bus-table" className="divide-y divide-gray-200">
          {stopages &&
            stopages.map((stopage, index) => (
              <StopageListRow stopage={stopage} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StopageList;
