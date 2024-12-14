import React from 'react'

const Logistic = () => {
    return (
        <div className="container bg-gray-100 w-full mx-auto py-10 px-5">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Logistics Services</h2>
                <p className="text-gray-600">What We Do</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Sea Transport" className="mx-auto w-[200px] h-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Sea Transport Services</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Warehousing" className="mx-auto w-[200px] h-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Warehousing Services</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Air Freight" className="mx-auto w-[200px] h-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Air Freight Services</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Project & Exhibition" className="w-[200px] h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Project & Exhibition</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Local Shipping" className="mx-auto w-[200px] h-auto  mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Local Shipping Services</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <img src="/main.jpg" alt="Customer Clearance" className="w-[200px] h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600">Customer Clearance</h3>
                    <p className="text-gray-600 mt-2">Following the quality of our service, thus having gained trust of our many clients.</p>
                </div>
            </div>
        </div>
    )
}

export default Logistic
