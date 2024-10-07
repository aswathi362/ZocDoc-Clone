import React from 'react'
import primaryCare from '../../assets/specialities/primaryCare.png'
import dentist from '../../assets/specialities/dentist.png'
import obgyn from '../../assets/specialities/obgyn.png'
import derm from '../../assets/specialities/derm.png'
import psych from '../../assets/specialities/psych.png'
import eye from '../../assets/specialities/eye.png'
import SpecialityCard from './SpecialityCard'

function Specialities() {
  return (
    <div className='container px-12 mx-auto pb-16'>
        <div>
            <h1 className='text-2xl font-normal leading-normal'>Top-searched specialties</h1>
        </div>
        <div className='flex flex-wrap items-center gap-6 my-10'>
            <SpecialityCard image={primaryCare} text={"Primary Care"}/>
            <SpecialityCard image={dentist} text={"Dentist"}/>
            <SpecialityCard image={obgyn} text={"OB-GYN"}/>
            <SpecialityCard image={derm} text={"Dermatologist"}/>
            <SpecialityCard image={psych} text={"Psychiatrist"}/>
            <SpecialityCard image={eye} text={"Eye Doctor"}/>
        </div>
    </div>
  )
}

export default Specialities