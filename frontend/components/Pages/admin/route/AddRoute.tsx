import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TOASTER from 'lib/network/toaster';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { STRAPI_URL } from '@components/constants/apiRoutes';

const AddRoute = ({ route = null }) => {
  type createFormData = {
    name: string;
    stopages: string[];
    description: string;
  };

  const defaultValues = {
    name: '',
    stopages: [],
    description: '',
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
  const [stopages, setStopages] = useState([]);
  const [selectedStopages, setSelectedStopages] = useState([]);
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

  const getAllStopages = async () => {
    const routes = await axios.get(`${STRAPI_URL}/stopages?populate=*`);
    setStopages(routes?.data?.data);
  };

  useEffect(() => {
    if (route) {
      const temp = [];
      setValue('name', route?.attributes?.name);
      setValue('description', route?.attributes?.description);
      // only store the id
      route?.attributes?.stopages?.data.forEach((stopage) => {
        temp.push(stopage?.id);
      });
      setSelectedStopages([...temp]);
      setValue('stopages', temp);
    }
  }, [route]);

  useEffect(() => {
    getToken();
    getAllStopages();
  }, []);

  useEffect(() => {
    if (route) {
      reset(route);
    }
  }, [route]);
  const _onSubmit = (data: createFormData, e) => {
    e.preventDefault();
    if (route) {
      // updating route
      axios
        .put(
          `${STRAPI_URL}/routes/${route?.id}`,
          {
            data: {
              ...data,
              stopages: selectedStopages,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toster.success({ message: 'Route Updated successfully...' });
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
          `${STRAPI_URL}/routes`,
          {
            data: {
              ...data,
              stopages: selectedStopages,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toster.success({ message: 'Route Added successfully...' });
          router.reload();
        })
        .catch((err) => {
          toster.failed({ message: 'Something went wrong...' });
          console.error('Error deleting bus:', err);
        });
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedStopages.includes(selectedValue)) {
      return toster.failed({ message: 'Stopage Already Present..!' });
    }
    setSelectedStopages([...selectedStopages, selectedValue]);
  };

  const StopageChip = ({ chip }) => {
    const stopage = stopages.filter((stopage) => stopage?.id == chip);

    if (stopage) {
      return (
        <div className="relative mr-1 rounded-lg bg-green-100 px-2 py-1">
          <p className="">{stopage[0]?.attributes.name}</p>
          <div
            className="absolute -right-1 -top-2 cursor-pointer text-red"
            onClick={() => handleChipRemove(chip)}
          >
            x
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const handleChipRemove = (stopageId) => {
    const updatedChips = selectedStopages.filter((id) => id !== stopageId);
    setSelectedStopages(updatedChips);
  };

  return (
    <form
      onSubmit={handleSubmit(_onSubmit)}
      className={`grid grid-cols-1 items-end gap-1 ${
        route ? 'rounded-md border border-green p-5' : 'border-0'
      }
       `}
    >
      <div className={`grid grid-cols-1 items-end gap-1 md:grid-cols-3`}>
        <div className={`space-y-2 md:col-span-1`}>
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
            placeholder="route name"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('name', { required: true })}
          />
        </div>
        <div className={`space-y-2 md:col-span-2`}>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="route description"
            required
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            {...register('description', { required: true })}
          />
        </div>
      </div>
      <div className="col-span-1 space-y-2">
        <label
          htmlFor="route"
          className="block text-sm font-semibold text-gray-700"
        >
          Select Stopages
        </label>
        {stopages && (
          <select
            className="flex w-full appearance-none rounded border py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="discountType"
            name="discount_type"
            onChange={handleSelectChange}
          >
            <option value="">-- Select Stopage --</option>
            {stopages.map((stopage) => (
              <option value={stopage.id} key={stopage.id}>
                {stopage.attributes.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-700">
          Selected Stopages:
        </span>
        <div className="flex flex-row flex-wrap gap-2">
          {selectedStopages.map((item, index) => {
            return <StopageChip key={index} chip={item} />;
          })}
        </div>
      </div>

      <button className=" mt-5 rounded border bg-green-300 py-1 md:col-span-1">
        <span>{route ? 'UPDATE' : 'ADD'}</span>
      </button>
    </form>
  );
};

export default AddRoute;
