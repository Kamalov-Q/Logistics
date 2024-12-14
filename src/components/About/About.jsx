import { Autoplay, Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import img from '/main.jpg';

const About = () => {
    return (
        <div className='h-screen bg-gray-100 container py-5 mx-auto w-full flex flex-col gap-10 justify-center items-center'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-auto p-5 my-5 max-w-[1300px]"
            >
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto rounded-lg shadow-xl border">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src="/main.jpg" alt="Truck Model 1" className="rounded-lg mb-4 object-cover w-full h-48" />
                        <h3 className="text-2xl font-semibold mb-2">Heavy Duty Trucks</h3>
                        <p className="text-lg leading-relaxed">
                            Designed for long-haul routes, these trucks offer maximum load capacity and reliability in challenging conditions.
                        </p>
                        <div className="flex justify-center items-center my-2">
                            <button className="px-10 py-3 rounded-md border-none bg-red-600 text-white">Aloqaga chiqing</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About
