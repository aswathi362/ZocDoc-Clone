import React from 'react'
import Insuarance from './Insuarance'
import Specialities from './Specialities'
import DoctorConnect from './DoctorConnect'
import ZocdocApp from './ZocdocApp'
import PrivatePractice from './PrivatePractice'
import HealthSystems from './HealthSystems'
import CityList from './CityList'
import Jobs from './Jobs'
import VisitReasons from './VisitReasons'

function Body() {
  return (
    <div>
        <Insuarance/>
        <Specialities/>
        <DoctorConnect/>
        <ZocdocApp/>
        <PrivatePractice/>
        <HealthSystems/>
        <CityList/>
        <Jobs/>
        <VisitReasons/>
    </div>
  )
}

export default Body