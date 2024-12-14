import React from 'react'

export function Company() {
    return (
        <div>
            <section className="bg-gray-100 py-16 px-8 text-gray-800">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">About Our Logistics Services</h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            We specialize in efficient and reliable logistics solutions, ensuring that goods are transported safely and on time. With a modern fleet of trucks and a dedicated team of logistics experts, we are committed to providing top-tier services tailored to your needs.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Our extensive network covers local and international routes, offering comprehensive logistics management from pickup to delivery. We leverage cutting-edge technology to provide real-time tracking, ensuring complete transparency and control over your shipments.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Partner with us for a seamless logistics experience driven by reliability, innovation, and customer satisfaction.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="/main.jpg"
                            alt="Logistics Truck"
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

