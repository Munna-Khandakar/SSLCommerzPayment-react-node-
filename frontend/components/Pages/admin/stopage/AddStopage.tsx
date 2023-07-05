import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TOASTER from 'lib/network/toaster';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { STRAPI_URL } from '@components/constants/apiRoutes';

const AddStopage = ({ stopage = null }) => {
  type createFormData = {
    name: string;
  };

  const defaultValues = {
    name: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<createFormData>({
    defaultValues: defaultValues,
  });
  const [token, setToken] = useState(null);
  const router = useRouter();
  const toster = TOASTER;
  const getToken = async () => {
    const jwt = localStorage.getItem('admin_token');
    if (jwt) {
      setToken(JSON.parse(jwt));
    } else {
      localStorage.removeItem('admin_token');
      router.push('/admin/login');
      toster.failed({ message: 'You need to login first..!' });
    }
  };

  useEffect(() => {
    if (stopage) {
      setValue('name', stopage?.attributes?.name);
    }
  }, [stopage]);
  useEffect(() => {
    getToken();
  }, []);

  const _onSubmit = (data: createFormData, e) => {
    e.preventDefault();
    if (stopage) {
      // updating route
      axios
        .put(
          `${STRAPI_URL}/stopages/${stopage?.id}`,
          {
            data: {
              ...data,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toster.success({ message: 'Stopage Updated successfully...' });
          router.reload();
        })
        .catch((err) => {
          toster.failed({ message: 'Something went wrong...' });
          console.error('Error deleting bus:', err);
        });
    } else {
      // creating new route
      axios
        .post(
          `${STRAPI_URL}/stopages`,
          {
            data: {
              ...data,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toster.success({ message: 'Stopage Added successfully...' });
          router.reload();
        })
        .catch((err) => {
          toster.failed({ message: 'Something went wrong...' });
          console.error('Error deleting bus:', err);
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(_onSubmit)}
        className={`grid grid-cols-1 items-end gap-1 ${
          stopage ? 'rounded-md border border-green p-2' : 'border-0 p-0'
        }`}
      >
        <div className={`col-span-1 space-y-2`}>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="stopage name"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('name', { required: true })}
          />
        </div>

        <button className=" rounded border bg-green-300 py-1 md:col-span-1">
          <span>{stopage ? 'UPDATE' : 'ADD'}</span>
        </button>
      </form>
    </div>
  );
};

export default AddStopage;
