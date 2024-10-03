import React, { useEffect, useState } from 'react'
import Accordion from './Accordian'
import { getVisitReasons } from '../axios/axios';

function VisitReasons() {
    const [visitReasons, setVisitReasons] = useState([]);

    useEffect(() => {
        getVisitReasons()
          .then((response) => {
            setVisitReasons(response.data);
          })
          .catch((error) => {
            console.error("Error fetching visit reasons:", error);
          });
      }, []);
  return (
    <div className='bg-bright-yellow px-20 py-10'>
        <div className='container mx-auto py-20 px-10'>
            <h1 className='text-2xl'>Common visit reasons</h1>
            <div className='mt-10 flex flex-col lg:flex-row justify-between gap-6'>
                {Object.keys(visitReasons).map((category) => (
                    <div className='w-full lg:w-1/4'>
                        <Accordion title={category} items={visitReasons[category]}/>
                    </div>
                ))}
            </div>
      </div>
    </div>
  )
}

export default VisitReasons