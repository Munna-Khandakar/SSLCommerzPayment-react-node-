import { STRAPI_URL } from '@components/constants/apiRoutes';
import useFcmToken from '@utills/hooks/useFcmToken';
import axios from 'axios';
import TOASTER from 'lib/network/toaster';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = ({ user_type = 'student' }) => {
  const router = useRouter();
  const toster = TOASTER;
  const { fcmToken } = useFcmToken();
  type createFormData = {
    email: string;
    password: string;
  };

  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<createFormData>({
    defaultValues: defaultValues,
  });

  const updateFCMTokenHandler = (id, token) => {
    console.log('calling....');
    axios
      .put(
        `${STRAPI_URL}/users/${Number(id)}`,
        {
          device: fcmToken,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          // router.push('/student');
          console.log('token updated...');
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

  const _onSubmit = (data: createFormData) => {
    axios
      .post(`${STRAPI_URL}/auth/local`, {
        identifier: data?.email,
        password: data?.password,
      })
      .then((res) => {
        if (res.status == 200) {
          // storing token
          localStorage.setItem(
            `${user_type}_token`,
            JSON.stringify(res?.data?.jwt)
          );
          console.log(res.data?.user?.device);
          if (
            res.data?.user?.device == undefined ||
            res.data?.user?.device !== fcmToken
          ) {
            updateFCMTokenHandler(res.data?.user?.id, res?.data?.jwt);
          } else {
            console.log('token matched...');
          }
          // storing token
          localStorage.setItem(`${user_type}_id`, res?.data?.user?.id);
          router.push(`/${user_type}`);
        }
      })
      .catch((err) => {
        console.error(err);
        toster.failed({ message: 'Something Went Wrong..!' });
      });
  };

  return (
    <div>
      <p className="text-center font-bold">Login</p>
      <form
        onSubmit={handleSubmit(_onSubmit)}
        className="grid grid-cols-1 gap-2"
      >
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
            placeholder="email"
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
            placeholder="password"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('password')}
          />
        </div>

        <button className="mt-5 w-full rounded border bg-green-300 p-1">
          <span>Login</span>
        </button>
      </form>
      <div className="mt-2 flex justify-end md:mt-5">
        New here? <span className="text-bold ml-2 text-green">Register</span>
      </div>
    </div>
  );
};

export default LoginPage;
