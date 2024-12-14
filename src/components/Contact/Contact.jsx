import location from '/svgs/location.svg';
import phone from '/svgs/phone.svg';
import email from '/svgs/email.svg';

const Contact = () => {
  return (
    <div className="container mx-auto w-full h-auto py-5 px-10">
      <div className="mx-10 shadow-lg h-[70vh] pt-5 flex flex-col">
        <div className="flex relative">
          <div className="flex px-10 items-center justify-center left-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Reliable Logistics?</h2>
              <p className="text-gray-600 mb-6">
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
          </div>
          <div className="flex-1 absolute right-10">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=65.795954%2C38.844514&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzIxNDUSKk_Ku3piZWtpc3RvbiwgUWFzaHFhZGFyeW8gdmlsb3lhdGksIFFhcnNoaSIKDXmUg0IVzV0bQg%2C%2C&z=12.41"
                width="500"
                height="300"
                frameBorder="0"
                allowFullScreen
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
