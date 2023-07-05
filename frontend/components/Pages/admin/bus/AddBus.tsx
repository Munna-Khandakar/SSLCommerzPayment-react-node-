import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TOASTER from 'lib/network/toaster';
import { useForm } from 'react-hook-form';
import { db } from '../../../../utills/firebase/firebase';

const AddBus = ({ bus = null }) => {
  type createFormData = {
    name: string;
    description: string;
  };

  const defaultValues = {
    name: '',
    description: '',
  };

  const {
    register,
    handleSubmit,
    reset,
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
    getToken();
  }, []);

  useEffect(() => {
    if (bus) {
      reset(bus);
    }
  }, [bus]);
  const _onSubmit = (data: createFormData, e) => {
    e.preventDefault();
    if (bus) {
      // updating bus
      setDoc(doc(db, 'buses', bus?.id), {
        ...data,
        updatedAt: serverTimestamp(),
      })
        .then((res) => {
          toster.success({ message: 'Bus Updated Successfully...' });
          router.reload();
        })
        .catch((err) => {
          console.log(err);
          toster.failed({ message: 'Something went wrong..!' });
        });
    } else {
      // creating new bus
      addDoc(collection(db, 'buses'), { ...data, createdAt: serverTimestamp() })
        .then((res) => {
          reset();
          toster.success({ message: 'Bus Added Successfully...' });
          router.reload();
        })
        .catch((err) => {
          console.log(err);
          toster.failed({ message: 'Something went wrong..!' });
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(_onSubmit)}
      className={`grid grid-cols-1 items-end gap-1 ${
        bus ? 'md:grid-cols-1' : 'md:grid-cols-7'
      }`}
    >
      <div className={`space-y-2 ${bus ? 'md:col-span-1' : 'md:col-span-2'}`}>
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
          placeholder="bus name"
          className="w-full rounded-md border border-gray-300 p-2 text-sm"
          {...register('name', { required: true })}
        />
      </div>
      <div className={`space-y-2 ${bus ? 'md:col-span-1' : 'md:col-span-4'}`}>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="password"
          required
          className="w-full rounded-md border border-gray-300 p-2 text-sm"
          {...register('description', { required: true })}
        />
      </div>

      <button className=" rounded border bg-green-300 py-1 md:col-span-1">
        <span>{bus ? 'UPDATE' : 'ADD'}</span>
      </button>
    </form>
  );
};

export default AddBus;
