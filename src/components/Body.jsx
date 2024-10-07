import React from 'react'
import Insuarance from './Insuarance/Insuarance'
import Specialities from './Specialities/Specialities'
import DoctorConnect from './ConnectWithDoctor/DoctorConnect'
import ZocdocApp from './MobileApp/ZocdocApp'
import PrivatePractice from './ListYourPractice/PrivatePractice'
import HealthSystems from './HealthSystem/HealthSystems'
import CityList from './DoctorsByCity/CityList'
import Jobs from './JobOppurtunities/Jobs'
import VisitReasons from './VisitReasons/VisitReasons'

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