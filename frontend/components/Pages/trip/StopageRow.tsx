import React, { useState } from 'react';

import { BiReset, BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi';

const StopageRow = ({ stopage, clickHandler }) => {
  const buttonClickhandler = () => {
    clickHandler();
  };

  return (
    <div className="mx-1 my-2 flex flex-row items-center gap-5">
      <div
        className={`  flex flex-1 flex-row items-center justify-between rounded-md border  px-2 py-1 ${
          stopage?.attributes?.status == 'finished'
            ? ' bg-green-100'
            : 'bg-white'
        }`}
        onClick={buttonClickhandler}
      >
        <span
          className={`${
            stopage?.attributes?.status == 'finished'
              ? 'text-gray-400'
              : 'text-gray-800'
          }`}
        >
          {stopage?.attributes?.name}
        </span>

        {stopage?.attributes?.status == 'finished' ? (
          <div className="flex flex-row items-center justify-center gap-2  px-1">
            <BiArrowFromLeft color="green" /> <span>depart</span>
          </div>
        ) : stopage?.attributes?.status == 'arrived' ? (
          <div className="flex flex-row items-center justify-center gap-2  px-1">
            <BiArrowToRight color="green" />
            <span>arrived</span>
          </div>
        ) : (
          ''
        )}
      </div>
      {stopage?.attributes?.status && (
        <div>
          <BiReset />
        </div>
      )}
    </div>
  );
};
export default StopageRow;
