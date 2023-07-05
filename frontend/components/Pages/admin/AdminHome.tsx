import React from 'react';
import AdminLayout from './AdminLayout';

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3  md:gap-5  lg:grid-cols-4 lg:gap-20 ">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Students</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="rounded-xl bg-green-100 p-4">
                <div className="text-xl font-bold leading-none text-gray-800">
                  Good day, <br />
                  Bayazid
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-white py-2 px-3 text-sm font-semibold text-gray-800 transition hover:text-green-500"
                  >
                    Start tracking
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
              <div className="text-2xl font-bold leading-none">20</div>
              <div className="mt-2">Trip finished</div>
            </div>
            <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
              <div className="text-2xl font-bold leading-none">5,5</div>
              <div className="mt-2">Tracked hours</div>
            </div>
            <div className="col-span-2">
              <div className="rounded-xl bg-purple-100 p-4 text-gray-800">
                <div className="text-xl font-bold leading-none">
                  Your daily plan
                </div>
                <div className="mt-2">5 of 8 completed</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Buses</h2>

          <div className="space-y-4">
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Number 10</div>
                <div className="text-xs text-gray-400">4h</div>
              </div>
              <a className="font-bold hover:text-yellow-800 hover:underline">
                Blog and social posts
              </a>
              <div className="text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-1 inline align-middle text-gray-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                Deadline is today
              </div>
            </div>
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Grace Aroma</div>
                <div className="text-xs text-gray-400">7d</div>
              </div>
              <a
                href=""
                className="font-bold hover:text-yellow-800 hover:underline"
              >
                New campaign review
              </a>
              <div className="text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-1 inline align-middle text-gray-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                New feedback
              </div>
            </div>
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Petz App</div>
                <div className="text-xs text-gray-400">2h</div>
              </div>
              <a
                href=""
                className="font-bold hover:text-yellow-800 hover:underline"
              >
                Cross-platform and browser QA
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Routes</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="rounded-xl bg-green-100 p-4">
                <div className="text-xl font-bold leading-none text-gray-800">
                  Good day, <br />
                  Bayazid
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-white py-2 px-3 text-sm font-semibold text-gray-800 transition hover:text-green-500"
                  >
                    Start tracking
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
              <div className="text-2xl font-bold leading-none">20</div>
              <div className="mt-2">Tasks finished</div>
            </div>
            <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
              <div className="text-2xl font-bold leading-none">5,5</div>
              <div className="mt-2">Tracked hours</div>
            </div>
            <div className="col-span-2">
              <div className="rounded-xl bg-purple-100 p-4 text-gray-800">
                <div className="text-xl font-bold leading-none">
                  Your daily plan
                </div>
                <div className="mt-2">5 of 8 completed</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Drivers</h2>

          <div className="space-y-4">
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Number 10</div>
                <div className="text-xs text-gray-400">4h</div>
              </div>
              <a
                href=""
                className="font-bold hover:text-yellow-800 hover:underline"
              >
                Blog and social posts
              </a>
              <div className="text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-1 inline align-middle text-gray-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                Deadline is today
              </div>
            </div>
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Grace Aroma</div>
                <div className="text-xs text-gray-400">7d</div>
              </div>
              <a
                href=""
                className="font-bold hover:text-yellow-800 hover:underline"
              >
                New campaign review
              </a>
              <div className="text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-1 inline align-middle text-gray-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                New feedback
              </div>
            </div>
            <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
              <div className="flex justify-between">
                <div className="text-xs text-gray-400">Petz App</div>
                <div className="text-xs text-gray-400">2h</div>
              </div>
              <a
                href=""
                className="font-bold hover:text-yellow-800 hover:underline"
              >
                Cross-platform and browser QA
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
