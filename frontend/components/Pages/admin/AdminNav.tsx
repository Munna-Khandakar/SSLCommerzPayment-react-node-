import React, { useEffect } from 'react';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaRoute } from 'react-icons/fa';
import { useRouter } from 'next/router';

const AdminNav = () => {
  const router = useRouter();
  const active = 'bg-green-800 text-white';
  const inactive = 'bg-white text-gray-900 hover:bg-green-50';

  return (
    <aside className=" h-screen bg-white shadow-md">
      <div className="flex h-full flex-col justify-between">
        <div className="flex-grow">
          <div className="border-b px-4 py-6 text-center">
            <h1 className="text-xl font-bold leading-none">
              <span className="text-yellow-700">Bus Manager</span> App
            </h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              <li>
                <a
                  href="/admin"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin' ? active : inactive
                  }`}
                >
                  <AiFillHome size={20} />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/admin/bus"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin/bus' ? active : inactive
                  }`}
                >
                  <FaBusAlt size={20} />
                  Bus
                </a>
              </li>
              <li>
                <a
                  href="/admin/student"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin/student' ? active : inactive
                  }`}
                >
                  <HiOutlineUserGroup size={20} />
                  Student
                </a>
              </li>
              <li>
                <a
                  href="/admin/driver"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin/driver' ? active : inactive
                  }`}
                >
                  <GiSteeringWheel size={20} />
                  Driver
                </a>
              </li>
              <li>
                <a
                  href="/admin/stopage"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin/stopage' ? active : inactive
                  }`}
                >
                  <GrMapLocation size={20} />
                  Stopage
                </a>
              </li>
              <li>
                <a
                  href="/admin/route"
                  className={`flex items-center gap-4 rounded-xl py-3 px-4 text-sm font-bold ${
                    router.pathname == '/admin/route' ? active : inactive
                  }`}
                >
                  <FaRoute size={20} />
                  Route
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  flex-row items-center p-4">
          <button type="button" className=" rounded-xl bg-green-800 p-2">
            <AiOutlineLogout color="white" size={20} />
          </button>
          <span className="ml-2 text-sm font-bold">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default AdminNav;
