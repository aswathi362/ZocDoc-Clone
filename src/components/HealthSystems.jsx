import React from 'react'
import YellowButton from './Buttons/YellowButton'
import medstarLogo from '../assets/healthSystems/medstarLogo.svg'
import mountsinaiLogo from '../assets/healthSystems/mountsinaiLogo.svg'
import tuftsLogo from '../assets/healthSystems/tuftsLogo.svg'
import montefioreLogo from '../assets/healthSystems/montefioreLogo.svg'
import intermountHealthLogo from '../assets/healthSystems/intermountHealthLogo.svg'
import methodistLogo from '../assets/healthSystems/methodistLogo.svg'

function HealthSystems() {
  return (
    <div className='container mx-auto px-7 pb-16'>
        <div className='bg-light-grey grid grid-cols-1 lg:grid-cols-2 p-10'>
            <div className='mx-10 my-auto flex flex-col justify-start items-start'>
                <p className='text-lg my-3'>Zocdoc for health systems</p>
                <p className='text-2xl my-3'>We’re trusted by top health systems</p>
                <div className='my-3'>
                    <YellowButton text={"Partner with Zocdoc"}/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 items-center'>
                <img src={medstarLogo} alt='Med Star'/>
                <img src={mountsinaiLogo} alt='Mount Sinai'/>
                <img src={tuftsLogo} alt='Tufts'/>
                <img src={montefioreLogo} alt='MonteFiore'/>
                <img src={intermountHealthLogo} alt='Intermount Health'/>
                <img src={methodistLogo} alt='Methodist'/>
            </div>
        </div>
    </div>
  )
}

export default HealthSystems