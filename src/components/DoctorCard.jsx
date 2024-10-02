import React from 'react'
import WhiteButton from './Buttons/WhiteButton'

function DoctorCard({ image, text, buttonText }) {
  return (
    <div className='rounded-md bg-pale-yellow flex flex-col relative gap-6 items-center justify-center py-10 px-5'>
        <img src={image} className='w-full max-w-[66%] -mt-[88px]'/>
        <h1 className='text-xl font-normal h-[64px]'>{text}</h1>
        <div className=''><WhiteButton text={buttonText}/></div>
    </div>
  )
}

export default DoctorCard