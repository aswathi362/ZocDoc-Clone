import React from 'react';

function InsuranceCard({ image }) {
  return (
    <div className='w-[189px] h-[94px] rounded-md border border-1 border-grey flex justify-center items-center p-2'>
      <img src={image} className='object-contain w-full h-full max-w-[117px] max-h-[70px]' alt='Insurance Logo' />
    </div>
  );
}

export default InsuranceCard;