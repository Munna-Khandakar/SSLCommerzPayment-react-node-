import GeneralLayout from '@components/Pages/GeneralLayout';
import TripDetails from '@components/Pages/trip/TripDetails';
import React from 'react';

const index = () => {
  return (
    <GeneralLayout>
      <TripDetails />
    </GeneralLayout>
  );
};

export default index;
