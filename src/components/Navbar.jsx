import React from 'react';
import search from "../assets/search.svg";
import avatar from '../assets/avatar-user.jpg';
import dropdown from "../assets/dropdown.png";
import flag from "../assets/flag.png";

export const Navbar = () => {
  return (
    <div className='bg-white shadow-md w-screen absolute h-[10vh] top-0 left-0 px-6 flex justify-between items-center'>
        <div className='flex gap-4 h-1/2'>
        <svg className='h-[5vh] w-[5vh] hover:stroke-blue-600 hover:fill-blue-600' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
            <div className='relative h-full flex items-center'>
                <input className='bg-gray-100 placeholder:text-gray-400 w-[30vh] h-full pl-2 rounded-md'  placeholder='Search projects...' ></input>
                <img className='absolute h-5 w-5 right-2' src={search}></img>
            </div>
        </div>
        <div className='flex gap-5 h-1/2'>
            <div className='flex gap-5 items-center h-full'>
            <svg className='hover:stroke-blue-600' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle align-middle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            <svg className='hover:stroke-blue-600' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-off align-middle"><path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"></path><path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="m2 2 20 20"></path></svg>
            <span className='rounded-full overflow-hidden flex items-center h-[18px] w-[18px]'><img className=' object-contai h-full' src={flag}></img></span>
            </div>
            <div className='flex items-center gap-2 h-full'>
                <img className='rounded-full h-full w-[5vh] cursor-pointer' src={avatar}></img>  
                <label className='flex items-center gap-2 cursor-pointer'>Chris Wood <span><img className='h-6 w-6' src={dropdown}></img></span></label>
            </div>
        </div>
    </div>
  )
}
