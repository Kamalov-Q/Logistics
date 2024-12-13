import { useState } from 'react'
import main from '/main.jpg'
import ContactModal from './../Modal/ContactModal';
const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='flex h-auto md:h-[91vh] gap-5 py-5 flex-col items-center justify-center px-5 md:px-10 container w-full mx-auto'>
                <div className='text-center flex flex-col items-center justify-center text-[40px] text-red-600'>
                    "Truckland"ga Xush kelibsiz
                </div>
                <div className='flex flex-col md:flex-row gap-10 px-5 pt-0 md:pt-10 items-center'>
                    <div className='flex-1 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta commodi molestiae! Quae quasi, rerum fugiat quam iusto nisi ad. Similique ipsam tempora laboriosam atque voluptatem soluta repellat facilis ullam, corporis pariatur quod ipsa libero minus recusandae fuga odit quos fugit ab cupiditate rerum eum earum porro temporibus? Quod, repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse soluta laborum eius vel error quaerat autem nostrum commodi, fugiat, ut nemo, quos magni ex! Laborum, iste nam dignissimos labore recusandae porro impedit in perspiciatis saepe sint corporis quasi distinctio ipsum, quo ex vel quibusdam. Architecto nobis asperio Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse soluta laborum eius vel error quaerat autem nostrum commodi, fugiat, ut nemo, quos magni ex! Laborum, iste nam dignissimos labore recusandae porro impedit in perspiciatis saepe sint corporis quasi distinctio ipsum, quo ex vel quibusdam. Architecto nobis asperiores suscipit cupiditate?
                    </div>
                    <div className='flex-1'>
                        <img src={main} className='rounded-xl' alt="" />
                    </div>
                </div>
                <div>
                    <button className='px-14 py-3 rounded-md hover:text-red-600 hover:border-red-600 hover:border hover:bg-white transition-all duration-300 bg-red-600 text-white' onClick={() => setOpen(true)}>Aloqaga chiqing</button>
                </div>
            </div>
            {
                open && <ContactModal open={open} close={() => setOpen(false)} />
            }
        </>
    )
}

export default Home
