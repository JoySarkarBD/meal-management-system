import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

export default function PaymentsHistory() {
  return (
    <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
      {/* Title And Search Bar */}
      <div className='flex-row sm:flex items-center justify-between pb-6'>
        <div>
          <h2 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl'>
            Payment History
          </h2>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex dark:bg-slate-600 bg-gray-50 items-center p-2 rounded-md mt-2 sm:mt-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
            <input
              className='dark:bg-slate-600 dark:text-gray-200 text-gray-800 bg-gray-50 outline-none ml-1 block min-w-[40px] w-full'
              type='text'
              name=''
              id=''
              placeholder='search...'
            />
          </div>
        </div>
      </div>
      {/* Table Starts From Here */}
      <div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            {/* Show Per Page */}
            <div>
              <label
                htmlFor='show_per_page'
                className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                Show Per Page :
              </label>
              <div className='mt-2 mb-3 w-[100px]'>
                <select
                  id='show_per_page'
                  name='show_per_page'
                  className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                  <option selected>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
            </div>
            {/* Table */}
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  {/* Name */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Name</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Role */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Role</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Mobile */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Mobile</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Department */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Department</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Payment Date */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Payment Date</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Paid Amount */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Paid Amount</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Status */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Status</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      Admin
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      +8801XXXXXXXXX
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      IT
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-10-17
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2000
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-green-900'>
                        Paid
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      Admin
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      +8801XXXXXXXXX
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      UI/UX
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-10-17
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2000
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-green-900'>
                        Paid
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      User
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      +8801XXXXXXXXX
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      UI/UX
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-10-17
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2000
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-red-900'>
                        Due
                      </span>
                    </span>
                  </td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
            {/* Pagination */}
            <div className='px-5 py-5 dark:bg-gray-900 bg-white border-t dark:border-gray-500 border-gray-200 flex flex-col xs:flex-row items-center xs:justify-between'>
              {/* Result Paragraph */}
              <span className='dark:text-gray-200 text-gray-600 text-sm mb-2'>
                Showing 3 out of 50
              </span>
              {/* Page Numbers */}
              <nav>
                <ul className='flex'>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'
                      aria-label='Previous'>
                      <BsArrowLeftShort className='text-2xl dark:text-gray-300 text-gray-900' />
                    </a>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm dark:text-white text-gray-900 shadow-md transition duration-150 ease-in-out'
                      href='#'>
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm dark:text-white text-gray-900 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'>
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm dark:text-white text-gray-900 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'>
                      3
                    </a>
                  </li>
                  {/* More Page Indicator */}
                  <li className='dark:text-white text-gray-900 relative w-[17px]'>
                    <span className='absolute bottom-1'>.....</span>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm dark:text-white text-gray-900 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'>
                      15
                    </a>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm dark:text-white text-gray-900 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'>
                      16
                    </a>
                  </li>
                  <li>
                    <a
                      className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
                      href='#'
                      aria-label='Next'>
                      <BsArrowLeftShort className='text-2xl rotate-180 dark:text-gray-300 text-gray-900' />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
