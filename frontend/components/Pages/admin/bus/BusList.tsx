import BusListRow from './BusListRow';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../utills/firebase/firebase';

const BusList = () => {
  const [buses, setBuses] = useState([]);

  const fetchBuses = async () => {
    const busesRef = collection(db, 'buses');
    const q = query(busesRef, orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(q);
    const buses = [];

    querySnapshot.forEach((doc) => {
      buses.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setBuses([...buses]);
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  return (
    <div className="my-5">
      <p className="font-semibold">Bus List</p>
      <div id="bus-table" className="divide-y divide-gray-200">
        {buses &&
          buses.map((bus, index) => <BusListRow bus={bus} key={index} />)}
      </div>
    </div>
  );
};

export default BusList;
