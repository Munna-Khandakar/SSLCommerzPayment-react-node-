import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import Modal from '@components/common/Modal';
import TOASTER from 'lib/network/toaster';
import AddStopage from './AddStopage';

const StopageListRow = ({ stopage }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const deleteStopageById = () => {};

  return (
    <div>
      <>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <GrMapLocation className="text-green-900" size={30} />

            <span className="text-sm font-semibold text-gray-800">
              {stopage?.attributes?.name || '--'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="flex space-x-2 rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold leading-4 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              onClick={() => {
                setIsEditModalOpen(true);
              }}
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
        <Modal
          body={
            <div className="relative flex flex-col items-center rounded-lg  border border-green py-3 px-6 text-gray-600 shadow-lg lg:py-6">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-700 lg:text-xl">
                Do you want to delete this stopage ?
              </span>
              <p className="mt-2 block font-semibold">
                this operatinp can not be revert
              </p>
              <div className="flex flex-row space-x-2">
                <a
                  href="#"
                  className="mt-6 inline-block rounded-lg bg-gray-600 py-3 px-5 font-semibold text-white lg:px-4"
                  type="button"
                  onClick={deleteStopageById}
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="mt-6 inline-block rounded-lg bg-gray-400 py-3 px-5 font-semibold text-white lg:px-4"
                  type="button"
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                  }}
                >
                  Cancel
                </a>
              </div>
            </div>
          }
          config={{
            insideHeaderClose: true,
            widthClass: 'xs:w-full mx-lg:w-[512px] md:w-[512px]',
            mobileView: 'xs:items-end',
          }}
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
          }}
        />

        <Modal
          body={<AddStopage stopage={stopage} />}
          config={{
            insideHeaderClose: true,
            widthClass: 'xs:w-full mx-lg:w-[512px] md:w-[512px]',
            mobileView: 'xs:items-end',
          }}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
          }}
        />
      </>
    </div>
  );
};

export default StopageListRow;