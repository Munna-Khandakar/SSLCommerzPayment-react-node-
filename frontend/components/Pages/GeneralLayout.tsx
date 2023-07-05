import Image from 'next/image';
import React from 'react';

const GeneralLayout = ({ children }) => {
  return (
    <div className="">
      <div className="container ">
        <div className="mt-10 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/BUP_Stuff_Badge%2C_Bangladesh_Army.svg/195px-BUP_Stuff_Badge%2C_Bangladesh_Army.svg.png"
            alt="My Image"
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default GeneralLayout;
