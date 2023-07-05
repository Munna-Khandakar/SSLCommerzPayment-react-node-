import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import MyTrips from './MyTrips';
import StratTrip from './StratTrip';
import { useRouter } from 'next/router';

const DriverHome = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('driver_token');
    if (!token) {
      localStorage.removeItem('driver_token');
      router.push('/driver/login');
    }
  }, []);
  return (
    <Tabs.Root className="" defaultValue="startTrip">
      <Tabs.List className="flex flex-row justify-between gap-2 rounded border bg-green-200 px-0 py-4">
        <Tabs.Trigger
          className="w-full rounded-md bg-green-500 px-5 py-2"
          value="startTrip"
        >
          Start A Trip
        </Tabs.Trigger>
        <Tabs.Trigger
          className="w-full rounded-md bg-green-500 px-5 py-2"
          value="myTrips"
        >
          My Trips
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="" value="startTrip">
        <StratTrip />
      </Tabs.Content>

      <Tabs.Content className="" value="myTrips">
        <MyTrips />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default DriverHome;
