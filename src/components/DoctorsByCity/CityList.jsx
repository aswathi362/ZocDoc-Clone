import React, { useEffect, useState } from 'react';
import CityColumn from './CityColumn';
import { getDoctorCities } from '../../axios/axios';

function CityList() {
    const [doctorCities, setDoctorCities] = useState([]);

    useEffect(() => {
      getDoctorCities()
        .then((response) => {
          setDoctorCities(response.data);
        })
        .catch((error) => {
          console.error("Error fetching doctor cities:", error);
        });
    }, []);
    const cityNames = Object.keys(doctorCities);
    const firstColCities = cityNames.slice(0, 5);
    const secondColCities = cityNames.slice(5, 10);
    const thirdColCities = cityNames.slice(10, 15);
    const fourthColCities = cityNames.slice(15, 20);

  return (
    <div className='bg-bright-yellow'>
        <div className='container mx-auto py-20 px-10'>
            <h1 className='text-2xl'>Find doctors and dentists by city</h1>
            <div className='mt-10 flex flex-col lg:flex-row justify-between'>
                <CityColumn cities={firstColCities} data={doctorCities} />
                <CityColumn cities={secondColCities} data={doctorCities} />
                <CityColumn cities={thirdColCities} data={doctorCities} />
                <CityColumn cities={fourthColCities} data={doctorCities} />
            </div>
      </div>
    </div>
  );
}

export default CityList;