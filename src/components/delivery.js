import React from 'react';

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>
        Quick Delivery App
      </h3>
      <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
        <img
          className='w-full mx-auto py-4'
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
          alt='Delivery'
        />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-Jxl text-2xl font-bold py-2'>limities Convenience On-Demand</h1>
            <p>
             Experience the fastest and most convenient delivery service
            right at your fingertips. Download the app now and enjoy a
            seamless delivery experience!
          </p>
         <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get start </button>
        </div>

      </div>
    </div>
  );
};

export default Delivery;
