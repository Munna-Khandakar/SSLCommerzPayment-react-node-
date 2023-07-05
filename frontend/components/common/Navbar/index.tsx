import React from 'react';

const Navbar = () => {
  return (
    <header className=" bg-white bg-cover px-6 py-4 text-gray-600 lg:px-12 lg:py-5">
      {/* <!-- navigation -->*/}
      <div className=" mx-auto flex  items-center justify-between">
        <a href="#">
          <img
            className="h-8"
            src="https://cdn.10minuteschool.com/10ms-homepage-cover.png"
            alt="logo placeholder"
          />
        </a>
        <nav className="hidden w-auto flex-row items-center justify-center space-x-4 font-semibold md:flex lg:space-x-8">
          <a href="#" className="hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:opacity-70">
            Services
          </a>
          <a href="#" className="hover:opacity-70">
            Pricing
          </a>
          <a href="#" className="hover:opacity-70">
            Blog
          </a>
          <a href="#" className="hover:opacity-70">
            Login
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-green-800 py-3 px-5 text-sm font-semibold text-green-50"
          >
            Get started
          </a>
        </nav>

        {/* <div className="inset-x-0  top-10 z-50 w-full origin-top-right transform py-2 transition md:hidden">
          <nav className="transform rounded-lg bg-white p-3 shadow-lg">
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Home
            </a>
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Services
            </a>
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Pricing
            </a>
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Blog
            </a>
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Contact
            </a>
            <a
              href="#"
              className="border-blue-50 block border-b px-6 py-3 font-semibold hover:opacity-70"
            >
              Login
            </a>
            <a
              href="#"
              className="px-5text-white block rounded-lg bg-green-800 py-3 text-center text-sm font-semibold text-white"
            >
              Get started
            </a>
          </nav>
        </div> */}
      </div>
      {/* <!--/ navigation -->*/}
    </header>
  );
};

export default Navbar;
