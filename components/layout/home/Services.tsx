import React from "react";
import { Headset, ShieldCheck } from "lucide-react";
import { FaTruckFast } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      icon: FaTruckFast,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headset,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs group"
            >
              {/* Circular Icon */}
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                <span className="bg-black rounded-full p-2">
                  <service.icon className="w-10 h-10  stroke-white text-white" />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
