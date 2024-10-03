import React, { useEffect } from 'react';
import Accordion from './Accordian';

const CityColumn = ({ cities, data }) => {
  return (
    <div className='flex flex-col w-full lg:w-1/4 p-4'>
        {cities.map((city) => (
            <Accordion key={city} title={city} items={data[city]} />
        ))}
    </div>
  );
};

export default CityColumn;