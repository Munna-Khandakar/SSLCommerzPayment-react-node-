import React from 'react';

const Navbar2 = () => {
  return (
    <div className=" flex items-center justify-center border border-red">
      <div className="relative  border border-green">
        {/* selected icon */}
        <div className="absolute top-0 right-60   flex max-w-max flex-row  gap-2 rounded-2xl bg-gray-400 p-2">
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-600">
            <p>M</p>
          </div>
        </div>

        {/* all icons */}
        <div className=" flex max-w-max flex-row gap-2 rounded-2xl bg-gray-400 p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600">
            <p>H</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600">
            <p>A</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600">
            <p>C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
