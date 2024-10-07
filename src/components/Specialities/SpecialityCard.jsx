import React from 'react'

function SpecialityCard({image, text}) {
  return (
    <div className='h-[205px] px-8 w-auto rounded-md bg-bright-yellow flex flex-col justify-evenly items-center border border-pale-grey border-1 pt-2'>
        <img src={image} className='object-contain w-full h-full max-w-[110px] max-h-[110px]' alt='Speciality Logo' />
        <p className='text-md'>{text}</p>
    </div>
  )
}

export default SpecialityCard