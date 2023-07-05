import React from 'react';
import { FaBus } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { MdAdminPanelSettings } from 'react-icons/md';

const Home = () => {
  return (
    <div className="">
      <p className="mb-20 mt-20 text-center text-2xl font-bold leading-9">
        Welcome to BUP Bus Management System
      </p>
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-2xl font-bold leading-9">Who you are?</p>
        <div className="flex  flex-col items-center justify-center gap-5 md:flex-row">
          <a href="/student/login">
            <div className="flex w-full flex-col items-center justify-center rounded-xl border bg-[#7dcfb6] p-10 md:w-32">
              <HiUserCircle className="text-[30px]" />
              <span>User </span>
            </div>
          </a>
          <a href="/driver/login">
            <div className="flex w-full flex-col items-center justify-center rounded-xl border bg-[#b0f2b4] p-10 md:w-32">
              <FaBus className="text-[30px]" />
              <span>Driver </span>
            </div>
          </a>
          <a href="/admin/login">
            <div className="flex w-full flex-col items-center justify-center rounded-xl border bg-[#92e6a7] p-10 md:w-32">
              <MdAdminPanelSettings className="text-[30px]" />
              <span>Admin </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
