import React from 'react'
import Insuarance from './Insuarance'
import Specialities from './Specialities'
import DoctorConnect from './DoctorConnect'
import ZocdocApp from './ZocdocApp'
import PrivatePractice from './PrivatePractice'
import HealthSystems from './HealthSystems'

function Body() {
  return (
    <div>
        <Insuarance/>
        <Specialities/>
        <DoctorConnect/>
        <ZocdocApp/>
        <PrivatePractice/>
        <HealthSystems/>
    </div>
  )
}

export default Body