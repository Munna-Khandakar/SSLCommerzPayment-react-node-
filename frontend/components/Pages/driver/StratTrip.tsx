import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TOASTER from 'lib/network/toaster';
import { useRouter } from 'next/router';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@utills/firebase/firebase';

const StratTrip = () => {
  const router = useRouter();
  const toster = TOASTER;
  const [routes, setRoutes] = useState([]);
  const [buses, setBuses] = useState([]);

  type createFormData = {
    bus: string;
    route: string;
    driver: string;
    status: string;
    stopages?: any;
    statusMap?: any;
    users?: number[];
  };

  const defaultValues = {
    bus: '',
    route: '',
    driver: '',
    status: 'created',
    stopages: [],
    statusMap: {},
    users: [],
  };
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

  const getAllRoutes = async () => {
    const routes = await axios.get(`${STRAPI_URL}/routes?populate=*`);
    setRoutes(routes?.data?.data);
  };

  useEffect(() => {
    getAllRoutes();
    fetchBuses();
    setValue('driver', localStorage.getItem('driver_id'));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<createFormData>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (routes.length) {
      const selectedRoute = routes.filter(
        (route) => route.id == watch('route')
      );
      if (selectedRoute) {
        setValue('stopages', selectedRoute[0]?.attributes?.stopages?.data);
      }
      getDevicesOfTheRoute();
    }
  }, [watch('route')]);

  const getDevicesOfTheRoute = async () => {
    const routeUsers = await axios.get(
      `${STRAPI_URL}/users?filters[route]=${Number(watch('route'))}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('driver_token')
          )}`,
        },
      }
    );
    if (routeUsers?.data) {
      const statusMap = {};
      const users = [];
      routeUsers?.data.map((user) => {
        if (user?.device) {
          statusMap[user?.id] = 'yes';
          users.push(user?.id);
        }
      });
      setValue('statusMap', statusMap);
      setValue('users', users);
    }
  };

  const _onSubmit = (data: createFormData) => {
    axios
      .post(
        `${STRAPI_URL}/trips`,
        {
          data: {
            route: Number(data?.route),
            driver: Number(data?.driver),
            bus_id: data?.bus,
            route_id: data?.route,
            driver_id: data?.driver,
            status: data?.status,
            stopages: data?.stopages,
            statusMap: data?.statusMap,
            users: data?.users,
            message: 'Bus Started',
          },
        },
        {
          headers: {
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('driver_token')),
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          toster.success({ message: 'Trip Started...!' });
          router.push(`/trip/${res?.data?.data?.id}`);
        }
      })
      .catch((err) => {
        console.error(err);
        toster.failed({ message: 'Something Went Wrong..!' });
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-5 p-5 md:border">
        <p className="text-center font-bold">Start A Trip </p>
        <div className="grid grid-cols-1 gap-2">
          <div className="space-y-2">
            <label
              htmlFor="route"
              className="block text-sm font-semibold text-gray-700"
            >
              Select Route
            </label>
            {routes && (
              <select
                className="flex w-full appearance-none rounded border py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="discountType"
                name="discount_type"
                {...register('route')}
              >
                <option disabled={true} value="">
                  -- Select Route --
                </option>
                {routes.map((route) => (
                  <option value={route.id} key={route.id}>
                    {route.attributes.name} - {route.attributes.description}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="route"
              className="block text-sm font-semibold text-gray-700"
            >
              Select Bus
            </label>
            {buses && (
              <select
                className="flex w-full appearance-none rounded border py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="discountType"
                name="discount_type"
                {...register('bus')}
              >
                <option disabled={true} value="">
                  -- Select Bus --
                </option>
                {buses.map((bus) => (
                  <option value={bus.id} key={bus.id}>
                    {bus.name} - {bus.description}
                  </option>
                ))}
              </select>
            )}
          </div>
          {watch('stopages') && (
            <div className="space-y-2">
              <label
                htmlFor="stopages"
                className="block text-sm font-semibold text-gray-700"
              >
                Selected Stopages
              </label>

              <div
                className="flex  w-full appearance-none rounded border py-2  pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="stopages"
              >
                {watch('stopages') &&
                  watch('stopages').map((stopage, index) => {
                    return (
                      <div
                        className="mx-1  rounded border bg-gray-100 px-2 py-1"
                        key={index}
                      >
                        {stopage?.attributes?.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <button
          className="w-full rounded border bg-green-300 p-2"
          onClick={handleSubmit(_onSubmit)}
        >
          <span>START</span>
        </button>
      </div>
    </div>
  );
};

export default StratTrip;
