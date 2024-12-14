import logo from '/logo.jpg'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import ContactModal from './../Modal/ContactModal';
import { useEffect, useState } from 'react';


export function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        !active && window.addEventListener("scroll", () => {
            setActive(false)
        })
    }, [])

    return (
        <>
            <div className='z-30 sticky bg-white shadow-md top-0 hidden md:flex justify-between items-center px-5 py-3 w-full'>
                <a href="/">
                    <div className=''>
                        <img src={logo} className='cursor-pointer rounded-full w-[70px] h-[70px] object-cover' alt="" />
                    </div>
                </a>
                <ul className='flex gap-10'>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="/">Asosiy</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="#haqida">Haqida</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="#aloqa">Aloqa</a>
                    </li>
                    <li>
                        <a className='hover:text-red-500 text-xl' href="#boglanish">Bog`lanish</a>
                    </li>
                </ul>
                <div className='flex gap-2'>
                    <button className='px-4 py-2 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => setOpen(true)}>Bog'lanish</button>
                    <button className='px-4 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all duration-300 border-red-600 text-red-600 bg-white'>Tugma</button>
                </div>
            </div>

            <div className='flex flex-col md:hidden z-30 fixed w-full top-0 bg-red-600 justify-center'>
                <div className='flex border-b py-2'>
                    <button onClick={() => setActive(!active)} className='h-[50px] px-5'>
                        <IoMenu color='white' size={35} />
                    </button>
                </div>
                {
                    active && <div className={`flex h-[90vh] w-full z-30 bg-red-600 text-white sticky top-0 `}>
                        <div className='p-4 w-full flex justify-evenly items-center flex-col'>
                            <a href="/">
                                <div className='flex justify-center items-center'>
                                    <img src={logo} className='w-[100px] h-[100px] object-cover rounded-full' alt="Responsive Menu Image" />
                                </div>
                            </a>
                            <ul className='flex gap-10 flex-col items-center justify-center'>
                                <li>
                                    <a className='hover:text-red-500 text-xl' href="/" onClick={() => setActive(true)}>Asosiy</a>
                                </li>
                                <li>
                                    <a className='hover:text-red-500 text-xl' href="#haqida" onClick={() => setActive(false)}>Haqida</a>
                                </li>
                                <li>
                                    <a className='hover:text-red-500 text-xl' href="#aloqa" onClick={() => setActive(false)}>Aloqa</a>
                                </li>
                                <li>
                                    <a className='hover:text-red-500 text-xl' href="#boglanish" onClick={() => setActive(false)}>Bog`lanish</a>
                                </li>
                            </ul>
                            <div className='flex gap-2 flex-col'>
                                <button className='px-4 py-2 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => {
                                    setOpen(true);
                                    setActive(false);
                                }}>Bog'lanish</button>
                                <button className='px-4 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all duration-300 border-red-600 text-red-600 bg-white' onClick={() => setActive(false)}>Tugma</button>
                            </div>
                        </div>
                    </div>

                }
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}


