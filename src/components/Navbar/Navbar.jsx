import logo from '../../assets/react.svg'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import ContactModal from './../Modal/ContactModal';
import { useState } from 'react';


export function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='border-2 z-30 sticky bg-gray-200 top-0 hidden md:flex justify-between items-center px-5 py-2 w-full'>
                <div className=''>
                    <img src={logo} className='cursor-pointer' alt="" />
                </div>
                <ul className='flex gap-10'>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="">Asosiy</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="">Haqida</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="">Aloqa</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="">Bog`lanish</a>
                    </li>
                </ul>
                <div className='flex gap-2'>
                    <button className='px-4 py-2 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => setOpen(true)}>Bog'lanish</button>
                    <button className='px-4 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all duration-300 border-red-600 text-red-600 bg-white'>Tugma</button>
                </div>
            </div>
            <div className='flex h-[70px] z-30 bg-red-600 text-white sticky top-0 md:hidden'>
                <div className='flex justify-center items-center relative'>
                    <button className='h-[50px] px-5'>
                        <IoMenu color='white' size={35} />
                    </button>
                    <div>

                    </div>
                </div>
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}


