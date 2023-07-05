import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TOASTER from 'lib/network/toaster';
import { useRouter } from 'next/router';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '@utills/firebase/firebase';

const RegistrationForm = ({ user_type = 'student' }) => {
  const router = useRouter();
  const toster = TOASTER;
  const [routes, setRoutes] = useState(null);

  type createFormData = {
    username: string;
    email: string;
    password: string;
    user_type: string;
    route: string;
    device: string;
  };

  const defaultValues = {
    username: '',
    email: '',
    password: '',
    user_type: '',
    route: '',
    device: '',
  };

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);
          getToken(messaging, {
            vapidKey:
              'BJhaYbNqh9TIXHp_MZPcJE4nNHiw4aFTL2hDW_GjdDiPQGK6tqlwxEPN2kDZ-_qwa9PMQO6d6XzBf7LzEtTYgFE',
          })
            .then((currentToken) => {
              if (currentToken) {
                // Send the token to your server  update the UI if necessary
                setValue('device', currentToken);
                console.log(currentToken);
                // ...
              } else {
                console.log(
                  'No registration token available. Request permission to generate one.'
                );
                // ...
              }
            })
            .catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
              // ...
            });
        }
      } else {
        // alert('You will not the bus updates...');
        toster.failed({
          message: 'You will not the bus updates by notifications...',
        });
        console.log('permission blocked..');
      }
    });
  }
  useEffect(() => {
    user_type == 'student' && requestPermission();
  }, []);

  const getAllRoutes = async () => {
    const routes = await axios.get(`${STRAPI_URL}/routes?populate=*`);
    setRoutes(routes?.data?.data);
    setValue('route', routes?.data?.data[0]?.id); // setting the 1st route
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  useEffect(() => {
    user_type && setValue('user_type', user_type);
  }, [user_type]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<createFormData>({
    defaultValues: defaultValues,
  });

  const _onSubmit = (data: createFormData) => {
    axios
      .post(`${STRAPI_URL}/auth/local/register`, {
        username: data?.username,
        email: data?.email,
        password: data?.password,
        user_type: data?.user_type,
        route: data?.route,
        device: data?.device,
      })
      .then((res) => {
        if (res.status == 200) {
          toster.success({ message: 'Registration Successfull...!' });
          router.push(`/${user_type}/login`);
        }
      })
      .catch((err) => {
        console.error(err);
        toster.failed({ message: 'Something Went Wrong..!' });
      });
  };

  return (
    <div className="">
      <p className="text-center font-bold">Registration</p>
      <form
        onSubmit={handleSubmit(_onSubmit)}
        className="grid grid-cols-1 gap-2"
      >
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700"
          >
            BUP ID
          </label>
          <input
            type="text"
            id="username"
            placeholder="BUP ID"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('username')}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="route"
            className="block text-sm font-semibold text-gray-700"
          >
            Route
          </label>
          <select
            className="flex w-full appearance-none rounded border  py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="route"
            {...register('route')}
          >
            {Array.isArray(routes) &&
              routes.map((route, index) => {
                return (
                  <option value={route?.id} key={index}>
                    {route?.attributes?.name} - {route?.attributes?.description}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="EMAIL"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('email')}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Passowrd
          </label>
          <input
            type="password"
            id="password"
            placeholder="PASSWORD"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('password')}
          />
        </div>

        <button className="mt-5 w-full rounded border bg-green-300 p-1">
          <span>Register</span>
        </button>
      </form>
      <div className="mt-2 flex justify-end md:mt-5">
        Already have account?
        <span
          className="text-bold ml-2 text-green"
          onClick={() => {
            router.push(`/${user_type}/login`);
          }}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default RegistrationForm;
