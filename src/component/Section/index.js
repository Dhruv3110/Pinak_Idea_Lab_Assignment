import React from 'react'
import combine_icon from '../../assests/combine_icon.png'
import pipeline from '../../assests/pipeline.jpg'
import water from '../../assests/water_drop.png'
import heater from '../../assests/water-heater-icon-0.jpg'
import ServiceCard from '../ServiceCard'
const Section = () => {
  const services = [
    {
      title: "Emergency Plumbing Services",
      description: "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
      imgSrc: combine_icon,
      heaterStyle :"p-2 ",
    },
    {
      title: "Plumbing and Drains",
      description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
      imgSrc: pipeline,
      heaterStyle :"p-3 rounded-lg",
    },
    {
      title: "Water Damage",
      description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
      imgSrc: water,
      heaterStyle :"p-3",
    },
    {
      title: "Water Heaters",
      description: "Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.",
      imgSrc: heater,
      heaterStyle :"mt-2",
    },
  ];

  return (

    <>
      <div id="assignment" className='relative'>
        {/* Content Section */}
        <div className='relative p-8 mx-auto max-w-6xl border-2 mt-5 shadow-inner bg-gray-100 z-10 overflow-hidden'>
          {/* Diagonal Line Box */}
          <div className="absolute inset-0 -translate-x-[16%] translate-y-[8%] ">
            <div className="w-full h-full bg-gradient-to-r bg-[#2a1768] transform  origin-top-left -rotate-[25deg] scale-y-[1.14] "></div>
          </div>
          
          {/* Our Services Section */}
          <div className="relative z-20 text-left text-3xl font-bold mb-8 text-white" style={{fontFamily:"Gambler Gothic Regular"}}>OUR SERVICES</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 ">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                imgSrc={service.imgSrc} 
                heaterClassName={service.heaterStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
