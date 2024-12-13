import location from '/svgs/location.svg';
import phone from '/svgs/phone.svg';
import email from '/svgs/email.svg';
import telegram from '/svgs/telegram.svg';
const Contact = () => {
  return (
    <div className='container mx-auto w-full h-auto py-5 px-10'>
      <div className='mx-10 shadow-lg h-[70vh] pt-5 flex flex-col'>
        <div className='flex'>
          <form className='mt-5 px-20 flex flex-col gap-5 flex-1'>
            <div className='text-center text-red-600 text-[40px]'>Xabaringizni qoldiring</div>
            <div>
              <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md p-2 w-full border-black' />
            </div>
            <div>
              <input type="text" id='familiya' placeholder='Ismingizni kiriting' className='border rounded-md p-2 w-full border-black' />
            </div>
            <div>
              <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md p-2 w-full border-black' />
            </div>
            <div>
              <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md p-2 w-full border-black' />
            </div>
            <button type='submit' className='bg-green-700 text-white px-5 py-2 rounded-md'>Jo'natish</button>
          </form>
          <div className='flex-1 flex justify-between gap-5 flex-col'>
            <div style={{ position: "relative", overflow: "hidden" }} className='h-[250px] w-full'><a href="https://yandex.uz/maps/10331/karshi/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Qarshi</a><a href="https://yandex.uz/maps/geo/771272145/?ll=65.795954%2C38.844514&utm_medium=mapframe&utm_source=maps&z=12.41" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Qarshi — Yandex Xarita</a><iframe src="https://yandex.uz/map-widget/v1/?ll=65.795954%2C38.844514&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzIxNDUSKk_Ku3piZWtpc3RvbiwgUWFzaHFhZGFyeW8gdmlsb3lhdGksIFFhcnNoaSIKDXmUg0IVzV0bQg%2C%2C&z=12.41" width="560" height="400" frameBorder="1" allowFullScreen="true" style={{ position: "relative" }}></iframe></div>
            <div className='flex flex-col gap-5 px-5'>
              <a href="/">
                <div className='flex gap-5'>
                  <img src={location} alt="Location Image" />
                  <span>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</span>
                </div>
              </a>
              <a href="/">
                <div className='flex gap-5'>
                  <img src={phone} alt="Phone Image" />
                  <span>+998 33 66 00 999</span>
                </div>
              </a>
              <a href="/">
                <div className='flex gap-5'>
                  <img src={email} alt="Phone Image" />
                  <span>azizbek.b@udevs.io</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
