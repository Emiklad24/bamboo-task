import React from 'react'

const Profile = () => {
  return (
    <aside className='basis-1/4 px-2 flex flex-col justify-between w-full'>
      <div className="circle absolute -top-7 ">
        <div className="w-64 h-64 bg-gray-700 border-2 rounded-full"></div>
        <div className="absolute bottom-5 right-3 border-2 w-8 h-8 bg-gray-300 rounded-full "></div>
      </div>
      <br /><br /><br /><br /><br /><br />
      {/* details */}
      <div className='relative flex flex-col items-start justify-center border-b py-4'>
        <span className='text-xl font-semibold capitalize'>Name</span>
        <span className='text-lg text-gray-600 lowercase'>Username</span>
        <button className='my-4 w-full px-4 py-1 text-center text-gray-800 font-semibold text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded'>follow</button>
        <p className='text-gray-800 font-semibold text-sm'>Trying to make the world a better place</p>
        <div className='flex flex-row items-center justify-start my-4 text-gray-700 text-xs '>
          <span className='flex flex-row items-center justify-center hover:text-blue-500 cursor-pointer'>
            <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                <path  fill='currentColor' fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
            </svg>
            <p className='ml-1 '><strong>158</strong> followers</p>
          </span>
         
          <span className='mx-2 flex flex-row items-center justify-center hover:text-blue-500 cursor-pointer'>
            <p className='ml-1'><strong>23</strong> following</p>
          </span>          
        </div>
         <p className='flex flex-row items-start justify-center text-sm'>
          <span className='mr-2 text-gray-700'>
            <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fill='currentColor' fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            </span>
            FCT, Abuja
        </p>
        <p className='flex flex-row items-start justify-center text-sm'>
          <span className='mr-2 text-gray-700'>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
                <path fill='currentColor' fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
            </svg>
            </span>
            <a href="/" className='hover:text-blue-500 hover:underline'>https://website.com</a>
        </p>
       

      </div>
    </aside>
  )
}

export default Profile