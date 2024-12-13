import { Autoplay, Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import img from '/main.jpg';

const About = () => {
    return (
        <div className='h-screen container mx-auto w-full mt-10 flex flex-col gap-10 justify-center items-center'>
            <div className="text-[40px] text-red-600 text-center">
                About Our Company
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-auto p-5 max-w-[1300px]"
            >
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
                <SwiperSlide className="h-auto p-3 rounded-lg border">
                    <img src={img} alt="Slider images" className="rounded-lg" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam saepe excepturi totam veritatis temporibus perspiciatis esse soluta, sed nemo id, consequuntur blanditiis obcaecati nesciunt illum amet ab. Alias, porro accusantium necessitatibus autem voluptate cum dolorem reprehenderit saepe error. Aperiam explicabo quisquam nihil praesentium dicta expedita ut magnam, quae tempora.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About
