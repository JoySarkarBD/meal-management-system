import React, { useState } from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

export default function MealRateList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  /* Update User Info Modal */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /* Close User Info Modal */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to open the delete confirmation modal
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  // Function to close the delete confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  // Function to handle the meal deletion
  const handleDelete = () => {
    closeDeleteModal();
  };

  return (
    <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
      {/* Title And Search Bar */}
      <div className='flex-row sm:flex items-center justify-between'>
        <div>
          <h2 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl'>
            Meal Rate List
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
          <div className='inline-block min-w-full rounded-lg overflow-hidden'>
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
                  {/* Month */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Month</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Meal Rate */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Meal Rate</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Is Visible */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Is Visible</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>
                  {/* Month Start Date */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Month Start Date</span>
                      <button className='text-base ml-3'>
                        <HiMiniArrowsUpDown />
                      </button>
                    </div>
                  </th>

                  {/* Month End Date */}
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    <div className='flex'>
                      <span>Month End Date</span>
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
                  <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      November-2023
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      40
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-green-900'>
                        Visible
                      </span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-11-01
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-11-30
                    </p>
                  </td>

                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-green-900'>
                        Active
                      </span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <button
                      className='dark:bg-slate-100 p-3 rounded-full m-1'
                      onClick={openModal}>
                      <AiFillEdit className='text-gray-900 text-lg' />
                    </button>
                    <button
                      className='dark:bg-slate-100 p-3 rounded-full'
                      onClick={() => openDeleteModal()}>
                      <AiTwotoneDelete className='text-red-900 text-lg' />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      November-2023
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      40
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-red-900'>
                        Invisible
                      </span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-11-01
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                      2023-11-30
                    </p>
                  </td>

                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'></span>
                      <span className='relative dark:text-gray-300 text-red-900'>
                        Inactive
                      </span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                    <button
                      className='dark:bg-slate-100 p-3 rounded-full m-1'
                      onClick={openModal}>
                      <AiFillEdit className='text-gray-900 text-lg' />
                    </button>
                    <button
                      className='dark:bg-slate-100 p-3 rounded-full'
                      onClick={() => openDeleteModal()}>
                      <AiTwotoneDelete className='text-red-900 text-lg' />
                    </button>
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

      {/* Modal */}
      {isModalOpen && <ModalComponent closeModal={closeModal} />}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        onDelete={handleDelete}
      />
    </div>
  );
}

/* Update Meal Rate Info Modal*/

function ModalComponent({ closeModal }) {
  const currentYear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthOptions = months.map((month) => (
    <option
      key={month}
      value={`${month}-${currentYear}`}>{`${month}-${currentYear}`}</option>
  ));

  return (
    <div className='fixed z-[999] inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay */}
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        {/* Center modal */}
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'>
          &#8203;
        </span>
        <div
          className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'>
          {/* Close Button */}
          <button
            className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out rounded focus:outline-none'
            onClick={closeModal}
            aria-label='close modal'
            role='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z'></path>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
          {/* Modal content */}
          <div className='bg-white dark:bg-gray-900 dark:text-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <h1 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl'>
              Update Meal Rate Info
            </h1>
            <div className='space-y-12'>
              {/* Fields */}

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                {/* Month */}
                <div>
                  <label
                    htmlFor='month'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Month
                  </label>
                  <div className='mt-2'>
                    <select
                      id='month'
                      name='month'
                      required
                      className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      {monthOptions}
                    </select>
                  </div>
                </div>
                {/* Quantity */}
                <div>
                  <label
                    htmlFor='meal_rate'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Meal Rate
                  </label>
                  <div className='mt-2'>
                    <input
                      type='number'
                      id='meal_rate'
                      name='meal_rate'
                      required
                      placeholder='Enter the meal rate'
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Is Visible */}
                <div>
                  <label
                    htmlFor='is_visible'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Is Visible
                  </label>
                  <div className='mt-2'>
                    <select
                      id='is_visible'
                      name='is_visible'
                      required
                      className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      <option value={1}>Visible</option>
                      <option value={0}>Invisible</option>
                    </select>
                  </div>
                </div>
                {/* Month Start Date */}
                <div>
                  <label
                    htmlFor='month_start_date'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Month Start Date
                  </label>
                  <div className='mt-2'>
                    <input
                      type='date'
                      name='month_start_date'
                      id='month_start_date'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Month End Date */}
                <div>
                  <label
                    htmlFor='month_end_date'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Month End Date
                  </label>
                  <div className='mt-2'>
                    <input
                      type='date'
                      name='month_end_date'
                      id='month_end_date'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Status */}
                <div>
                  <label
                    htmlFor='status'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Status
                  </label>
                  <div className='mt-2'>
                    <select
                      id='status'
                      name='status'
                      required
                      className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      <option value={1}>Active</option>
                      <option value={0}>In-active</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit & Modal Close Button */}
              <div className='mt-6 flex items-center justify-end gap-x-6 border-t pt-4 dark:border-gray-600'>
                <button
                  onClick={closeModal}
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
                  Close
                </button>
                <button
                  type='submit'
                  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Update Meal Rate Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Delete Meal Rate Info Confirmation modal */

function DeleteConfirmationModal({ isOpen, closeModal, onDelete }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed z-[999] inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay */}
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        {/* Center modal */}
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'>
          &#8203;
        </span>
        <div
          className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'>
          {/* Close Button */}
          <button
            className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out rounded focus:outline-none'
            onClick={closeModal}
            aria-label='close modal'
            role='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z'></path>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
          {/* Modal content */}
          <div className='bg-white dark:bg-gray-900 dark:text-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <h1 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl'>
              Delete Meal Rate Info Alert
            </h1>
            <div>
              {/* Message */}
              <p className='mt-5'>
                Are you sure, you want to delete this meal rate info?
              </p>
              {/* Submit & Modal Close Button */}
              <div className='mt-6 flex items-center justify-end gap-x-6 border-t pt-4 dark:border-gray-600'>
                <button
                  type='submit'
                  onClick={onDelete}
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
                  Delete
                </button>
                <button
                  onClick={closeModal}
                  type='button'
                  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
