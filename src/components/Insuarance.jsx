import React from 'react'
import aetna from '../assets/insuarance/aetna.png'
import BlueCross from '../assets/insuarance/BlueCross.png'
import Cigna from '../assets/insuarance/Cigna.png'
import Medicare from '../assets/insuarance/Medicare.png'
import United from '../assets/insuarance/United.png'
import InsuaranceCard from './InsuaranceCard'
import WhiteButton from './Buttons/WhiteButton'

function Insuarance() {
  return (
    <div className='container px-12 mx-auto py-16'>
        <div>
            <h1 className='text-2xl font-normal leading-normal'>Find an in-network doctor from over 1,000 insurance plans</h1>
            <p className='font-extralight text-xl'>Add your insurance to see in-network primary care doctors</p>
        </div>
        <div className='flex flex-row gap-4 my-10 flex-wrap items-center'>
            <InsuaranceCard image={aetna}/>
            <InsuaranceCard image={Cigna}/>
            <InsuaranceCard image={United}/>
            <InsuaranceCard image={Medicare}/>
            <InsuaranceCard image={BlueCross}/>
            <a href='#' className='underline font-light ps-6'>See all <span>(1,000+)</span></a>
        </div>
        <div className='flex'>
            <WhiteButton text={"Add your insurance coverage"}/>
        </div>
    </div>
  )
}

export default Insuarance