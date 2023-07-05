import { STRAPI_URL } from '@components/constants/apiRoutes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TOASTER from 'lib/network/toaster';
import { useForm } from 'react-hook-form';
import useToken from '@utills/hooks/useFcmToken';
import BusPresentLocation from './BusPresentLocation';

const StudentProfile = () => {
  type createFormData = {
    username: string;
    email: string;
    route: string;
    device: string;
  };

  const defaultValues = {
    username: '',
    email: '',
    route: '',
    device: '',
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm<createFormData>({
    defaultValues: defaultValues,
  });

  //console.log(watch());

  const [routes, setRoutes] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toster = TOASTER;
  const getAllRoutes = async () => {
    const routes = await axios.get(`${STRAPI_URL}/routes?populate=*`);
    setRoutes(routes?.data?.data);
  };

  const notification = {
    granted: {
      style: {
        color: '#1B9C85',
        backgroundColor: '#E8F6EF',
      },

      msg: 'Your Notification Health is OK',
    },
    denied: {
      style: {
        color: 'red',
        backgroundColor: '#FCC8D1',
      },
      msg: 'Please Allow Notification Permisison from Settings',
    },
    default: {
      style: {
        color: '#00416D',
        backgroundColor: '#F5F1DA',
      },
      msg: 'Please Turn On the Notification Permisison',
    },
  };
  const { fcmToken, notificationPermissionStatus } = useToken();
  fcmToken && setValue('device', fcmToken);
  useEffect(() => {
    getUserToken();
    getAllRoutes();
  }, []);

  const getUserProfile = (jwt) => {
    axios
      .get(`${STRAPI_URL}/users/me`, {
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
      })
      .then((res) => {
        // console.log(res?.data?.route);
        reset(res?.data);
        if (!res?.data?.device) {
          // requestPermission();
        }
        setLoading(false);
      });
  };

  const getUserToken = async () => {
    const jwt = localStorage.getItem('student_token');
    if (jwt) {
      setToken(JSON.parse(jwt));
    } else {
      localStorage.removeItem('student_token');
      router.push('/student/login');
      toster.failed({ message: 'You need to login first..!' });
    }
  };

  useEffect(() => {
    token && getUserProfile(token);
  }, [token]);

  const _onSubmit = (data: createFormData) => {
    axios
      .put(
        `${STRAPI_URL}/users/${Number(localStorage.getItem('student_id'))}`,
        {
          username: data?.username,
          email: data?.email,
          route: data?.route,
          device: data?.device,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          router.push('/student');
        }
      })
      .catch((err) => {
        if (err.status == 401) {
          localStorage.removeItem('student_token');
          toster.failed({ message: err?.message });
        }
        console.error(err.status);
        toster.failed({ message: 'Something Went Wrong..!' });
      });
  };

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="p-5 md:border">
      <p className="text-center font-bold">Student Profile</p>
      <div className="mb-2">
        <p>Bus Current Stopage</p>
        <BusPresentLocation route={1} />
        <p
          className="cursor-pointer text-end text-[11px] text-gray-400"
          onClick={() => alert('coming soon')}
        >
          see in map
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div
          style={notification[notificationPermissionStatus]?.style}
          className="flex flex-row justify-between rounded-md border p-2"
        >
          <div className="flex flex-col gap-2 ">
            <span className="text-base font-bold leading-3">
              Notification Status: {notificationPermissionStatus}
            </span>
            <span className=" text-base font-normal leading-normal">
              {notification[notificationPermissionStatus]?.msg}
            </span>
          </div>
          {notificationPermissionStatus !== 'granted' && (
            <div
              className="rounded-lg border bg-white p-2"
              // onClick={requestPermission}
            >
              Turn On
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700"
          >
            Student ID
          </label>
          <input
            type="text"
            id="username"
            placeholder=" BUP ID"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('username')}
          />
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
            htmlFor="route"
            className="block text-sm font-semibold text-gray-700"
          >
            Route
          </label>
          {routes && (
            <select
              className="flex w-full appearance-none rounded border py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="discountType"
              name="discount_type"
              {...register('route')}
            >
              {routes.map((route) => (
                <option value={route.id} key={route.id}>
                  {route.attributes.name} - {route.attributes.description}
                </option>
              ))}
            </select>
          )}
        </div>

        <button
          className={`w-full rounded border ${
            isDirty ? 'bg-green-300' : 'bg-green-50'
          } p-1`}
          onClick={
            isDirty
              ? handleSubmit(_onSubmit)
              : () => {
                  console.log('first');
                }
          }
        >
          <span>Update</span>
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;
