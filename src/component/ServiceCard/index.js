import React from 'react'

const ServiceCard = ({title, description, imgSrc, heaterClassName}) => {
  return (
    <div className="bg-white shadow-xl p-6 hover:rotate-[360deg] transform transition-transform duration-1000">
      <div className="absolute left-[50%] -translate-x-1/2 -top-6">
        <div className="border-2 border-[#2a1768] h-[70px] w-[70px] rounded-full bg-white">
          <img 
          src={imgSrc} 
          alt="" 
          className={`rounded-full ${heaterClassName}`} 
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-4 mt-5">{title}</h3>
      <p className="text-center text-sm">{description}</p>
      <div className='flex mt-4 justify-center'>
        <a href="#" className={`text-center text-[#2a1768] flex `}>
          EXPLORE THIS SERVICE
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2a1768" className="bi bi-chevron-right mt-1.5 ms-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ServiceCard
