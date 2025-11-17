import { Headset, ShieldCheckIcon } from 'lucide-react';
import React from 'react'
import { FaTruckFast } from "react-icons/fa6";

export default function Services() {
    // With descriptive labels
const iconsWithLabels: { name: string; label: string, icon:React.ElementType }[] = [
  { name: "local-shipping", label: "Fast Delivery" , icon: FaTruckFast },
  { name: "headset-mic",    label: "24/7 Support", icon:Headset},
  { name: "verified-user",  label: "Secure Payment", icon:ShieldCheckIcon }
];
  return (
    <div>
        {
            iconsWithLabels.map((service) => (
                <div key={service.name}>
                <service.icon size={32} />
                    <h3>{service.name}</h3>
                    <p>{service.label}</p>
                </div>

            ))
        }
    </div>
  )
}
