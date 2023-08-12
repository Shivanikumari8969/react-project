import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'; // Import RxDotFilled from react-icons/rx

const Featured = () => {
  const sliders = [
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
    }
  ];

  const [currentIndex, setcurrentIndex] = useState(0);

  const prevslider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevslider} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {sliders.map((slideItem, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-orange-700' : 'text-gray-400'
            }`}
            onClick={() => moveToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
