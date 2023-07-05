

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";


function Error() {

  return (

    <div className="h-[60vh] flex flex-col justify-center items-center">
      <img
        src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
        alt="error 404"
        className="h-[240px]"
      />
      <h1 className="text-lg font-normal my-4">404 Page Not Found</h1>

    </div>

  );
}

export default Error;

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      course: {},
      ...(await serverSideTranslations(locale, ["skills", "common"])),
    },
  };
};
