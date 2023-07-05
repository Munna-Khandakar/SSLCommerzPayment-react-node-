import React, { useEffect } from 'react';
import AdminNav from './AdminNav';
import { AiFillPushpin } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import { FaRoute } from 'react-icons/fa';
import LayoutButton from './Layout/LayoutButton';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  }, []);
  return (
    <div className="flex flex-row ">
      <AdminNav />
      <main className="w-screen  bg-green-100 p-10">
        <div className=" w-full rounded-3xl  bg-white p-8">
          <h1 className="mb-10 text-3xl font-bold">
            Welcome to BUP Bus Management System - BMS
          </h1>

          <div className="flex items-center gap-x-2">
            <LayoutButton link={'/'} icon={<AiFillPushpin />} />
            <LayoutButton link={'/admin'} icon={<AiFillHome />} />
            <LayoutButton link={'/admin/bus'} icon={<FaBusAlt />} />
            <LayoutButton link={'/admin/driver'} icon={<GiSteeringWheel />} />
            <LayoutButton link={'/admin/route'} icon={<FaRoute />} />
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-green-800 px-5 text-sm font-semibold text-white transition hover:text-white"
            >
              Map
            </button>
          </div>

          <hr className="my-10" />

          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
