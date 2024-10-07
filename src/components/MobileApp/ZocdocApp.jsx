import React from 'react'
import zocdocApp from '../../assets/zocdocApp.png'
import qrCode from '../../assets/qrCode.png'
import playStore from '../../assets/playStore.png'
import appStore from '../../assets/appStore.png'
import zocdocAppArrow from '../../assets/zocdocAppArrow.svg'

function ZocdocApp() {
  return (
    <div className='bg-bright-orangle grid grid-cols-1 md:grid-cols-2 px-20 pt-20 z-0 overflow-hidden'>
        <div className=''>
            <p className='text-2xl'>Thousands of providers.<br/>
            One app.</p>
            <p className='leading-loose font-light my-5'>The Zocdoc app is the quickest, easiest way to book <br/>and keep track of your appointments.</p>
            <p className='font-normal'>Scan the QR code to get the app now</p>
            <div className='my-5 w-32'><img src={qrCode} alt='qr-code' /></div>
            <div className='flex gap-5 w-72'>
                <a href="http://itunes.apple.com/us/app/zocdoc-doctor-appointments/id391062219?mt=8">
                    <img src={appStore} alt='appStore'/>
                </a>
                <a href="https://market.android.com/details?id=com.zocdoc.android">
                    <img src={playStore} alt='playStore'/>
                </a>
            </div>
        </div>
        <div className='relative'>
            <img src={zocdocAppArrow} className='absolute hidden lg:block -left-24 -top-10 w-64' alt='pointer arrow'/>
            <svg className='absolute bottom-0 -right-48 w-fit z-10 hidden lg:block' width="1054" height="409" viewBox="0 0 1054 409" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M728.634 39.0536C862.85 92.9629 970.295 198.338 1027.33 331.999C1037.88 356.721 1046.61 382.182 1053.44 408.178H0C5.61949 386.804 12.5195 365.787 20.6627 345.242C74.2128 210.126 178.887 101.96 311.658 44.5379C444.428 -12.8833 594.419 -14.8557 728.634 39.0536Z" fill="#FEED5A"/>
            </svg>
            <img src={zocdocApp} className='relative z-20' alt='zocdoc mobile app'/>
        </div>
    </div>
  )
}

export default ZocdocApp