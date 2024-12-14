import { Autoplay, Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import img from '/main.jpg';
import { useState } from "react";
import ContactModal from "../Modal/ContactModal";

const About = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='h-screen bg-gray-100 xl:container py-5 mx-auto w-full flex flex-col gap-10 justify-center items-center overflow-x-hidden'>
                <Swiper
                    slidesPerView={1} // Default for small screens
                    spaceBetween={20} // Default spacing
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 }, // Small screens
                        768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
                        1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
                    }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper h-auto flex justify-center items-center p-5 my-5 max-w-[760px] md:max-w-[1300px]"
                >
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 w-[350px] md:w-[420px] rounded-lg shadow-lg">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[420px]">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[420px]">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[420px]">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[420px]">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto flex items-center justify-center rounded-lg shadow-xl border">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[420px]">
                            <img src={img} alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                            <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                            <p className="text-lg leading-relaxed">
                                Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                            </p>
                            <div className="flex justify-center items-center my-2">
                                <button onClick={() => setOpen(true)} className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {open && <ContactModal open={open} close={() => setOpen(false)} />}
        </>
    )
}

export default About
