import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GiSteeringWheel } from 'react-icons/gi';

const DriverListRow = ({ driver }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-4">
        <GiSteeringWheel className="text-green-900" size={30} />
        <div className="">
          <span className="text-sm font-semibold text-gray-800">
            {driver?.username || '--'}
          </span>
          <span className="mb-1 block text-sm text-gray-600">
            {driver?.email || '--'}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="flex space-x-2 rounded-md border border-gray-100 px-4 py-3 text-sm font-semibold leading-4 text-gray-300 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          onClick={() => {
            setIsEditModalOpen(true);
          }}
          disabled={true}
        >
          <AiFillEdit />
          <span className="hidden md:inline">Edit</span>
        </button>

        <button
          className="flex space-x-2 rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold leading-4 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        >
          <AiFillDelete />
          <span className="hidden md:inline">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DriverListRow;
