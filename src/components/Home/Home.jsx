import { useState } from 'react'
import main from '/home.png'
import ContactModal from './../Modal/ContactModal';
const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='flex  h-auto md:h-[91vh] flex-col items-center justify-center pl-5 md:pl-10 container w-full mx-auto'>
                <div className='flex flex-col md:flex-row md:pt-0 pt-10 items-center'>
                    <div className='flex-1 px-3'>
                        <div className='text-[60px] my-5 text-center font-semibold'>
                            Affordable truck service
                        </div>
                        <p className='text-center text-xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam cum assumenda dolor adipisci commodi blanditiis obcaecati quibusdam quidem nesciunt temporibus aut molestias ipsa, dolorum exercitationem natus maxime architecto numquam.</p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='px-14 text-center py-3 my-3 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => setOpen(true)}>Aloqaga chiqing</button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={main} style={{ mixBlendMode: "multiply" }} className='rounded-xl w-full' alt="" />
                    </div>
                </div>
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}

export default Home
