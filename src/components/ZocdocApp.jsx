import React from 'react'
import zocdocApp from '../assets/zocdocApp.png'
import qrCode from '../assets/qrCode.png'
import playStore from '../assets/playStore.png'
import appStore from '../assets/appStore.png'

function ZocdocApp() {
  return (
    <div className='bg-bright-orangle grid grid-cols-1 md:grid-cols-2 px-20 pt-20'>
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
        <div className=''>
            <img src={zocdocApp}/>
        </div>
    </div>
  )
}

export default ZocdocApp