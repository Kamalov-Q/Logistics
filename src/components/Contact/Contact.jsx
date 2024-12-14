import location from '/svgs/location.svg';
import phone from '/svgs/phone.svg';
import email from '/svgs/email.svg';

const Contact = () => {
  return (
    <div className="container mx-auto w-full py-5 px-0 md:px-5">
      <div className="md:mx-10 mx-5 shadow-lg h-auto relative pt-5 flex flex-col">

        <div className="flex px-2 py-5 flex-col xl:flex-row md:px-10 items-center justify-center static">
          <div className="bg-white flex-1 p-3 md:p-8 rounded-lg shadow-none md:shadow-lg w-full md:w-[500px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Need Reliable Logistics?</h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Contact us today to learn how our modern fleet and logistics expertise can drive your business forward.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-5 items-center">
                <img src={location} alt="Location Icon" />
                <span>Tashkent, Mirzo-Ulugbek District, 5th Kurgan Avenue, 32</span>
              </li>
              <li className="flex gap-5 items-center">
                <img src={phone} alt="Phone Icon" />
                <span>+998 33 66 00 999</span>
              </li>
              <li className="flex gap-5 items-center">
                <img src={email} alt="Email Icon" />
                <span>azizbek.b@udevs.io</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 m-2">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=65.795954%2C38.844514&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzIxNDUSKk_Ku3piZWtpc3RvbiwgUWFzaHFhZGFyeW8gdmlsb3lhdGksIFFhcnNoaSIKDXmUg0IVzV0bQg%2C%2C&z=12.41"
                className='md:w-full md:h-[300px] w-full h-full'
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
