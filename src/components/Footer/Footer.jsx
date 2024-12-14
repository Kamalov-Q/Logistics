import logo from '/logo.jpg';
import { LuFacebook, LuInstagram, LuLocateFixed, LuPhone, LuYoutube } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
    return (
        <div className='container mx-auto py-5 w-full' id='boglanish'>
            <div>
                <div className='flex md:flex-row flex-wrap gap-10 md:gap-2 flex-col justify-evenly items-center border-b-2 p-5'>
                    <div className='flex gap-3 flex-col'>
                        <div className='my-2 font-semibold text-2xl text-center md:text-left'>Asosiy</div>
                        <ul className='flex gap-2 flex-col'>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">Nimaga biz</a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">Biz haqimizda</a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">Aloqa</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <div className='my-2 font-semibold text-2xl text-center md:text-left'>Kontaktlar</div>
                        <ul className='flex gap-2 flex-col justify-center items-center'>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">
                                    <div className='flex justify-center items-center gap-2'>
                                        <LuPhone size={20} />
                                        <span>+998919989988</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">
                                    <div className='flex justify-center items-center gap-2'>
                                        <LuPhone size={20} />
                                        <span>+998919989988</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="">
                                    <div className='flex justify-center items-center gap-2'>
                                        <LuPhone size={20} />
                                        <span>+998919989988</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <div className='my-2 font-semibold text-2xl text-center md:text-left'>
                            Biz bilan bog'laning
                        </div>
                        <ul className='flex gap-2 flex-col'>
                            <li>
                                <a className='text-xl text-center md:text-left' href="/">
                                    <div className='flex gap-2 justify-center items-center'>
                                        <LuInstagram size={20} />
                                        <span>Instagram</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="/">
                                    <div className='flex gap-2 justify-center items-center'>
                                        <LiaTelegram size={20} />
                                        <span>Telegram</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="/">
                                    <div className='flex gap-2 justify-center items-center'>
                                        <LuFacebook size={20} />
                                        <span>Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='text-xl text-center md:text-left' href="/">
                                    <div className='flex gap-2 justify-center items-center'>
                                        <LuYoutube size={20} />
                                        <span>YouTube</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div style={{ position: "relative", overflow: "hidden" }} ><a className='text-xl text-center md:text-left' href="https://yandex.uz/maps/10331/karshi/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Qarshi</a><a href="https://yandex.uz/maps/geo/771272145/?ll=65.795954%2C38.844514&utm_medium=mapframe&utm_source=maps&z=12.41" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Qarshi — Yandex Xarita</a><iframe src="https://yandex.uz/map-widget/v1/?ll=65.795954%2C38.844514&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzIxNDUSKk_Ku3piZWtpc3RvbiwgUWFzaHFhZGFyeW8gdmlsb3lhdGksIFFhcnNoaSIKDXmUg0IVzV0bQg%2C%2C&z=12.41" className='md:w-[400px] md:h-[200px] w-full h-[200px]' frameBorder="1" allowFullScreen="true" style={{ position: "relative" }}></iframe>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-2 items-center'>
                    <div className='text-center text-lg md:text-xl'>
                        &copy; 2024. All rights reserved</div>
                </div>
            </div>
        </div >
    )
}

export default Footer
