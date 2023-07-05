import React from 'react';
import { useRouter } from 'next/router';

const LayoutButton = ({ link, icon }) => {
  const router = useRouter();
  const active = 'bg-green-800 text-white';
  const inactive = 'bg-white text-gray-900 hover:bg-green-50';
  return (
    <button
      type="button"
      className={`inline-flex h-9 items-center justify-center rounded-xl border px-3 transition ${
        router.pathname == link ? active : inactive
      }`}
      onClick={() => {
        router.push(link);
      }}
    >
      {icon}
    </button>
  );
};

export default LayoutButton;
