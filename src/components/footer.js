import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto py-8 bg-[#24262b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
        <p className='lg:col-span-2'>
          YumEats is your ultimate destination for delicious and mouthwatering recipes from around the world. 
          Our team of culinary experts strives to bring you a delightful experience through our diverse range of 
          recipes that cater to various tastes and preferences. Whether you're a seasoned chef or just starting 
          out in the kitchen, YumEats is here to inspire and guide you in your culinary journey. Join us and 
          explore the flavors, techniques, and joy of cooking.
        </p>
        <div className='flex justify-between w-[50%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
            <ul>
            <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>A108 Adam Street</li>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>United States</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
            <ul>
            <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>A108 Adam Street</li>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>United States</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[hsl(0,0%,61%)]'>Location</h6>
            <ul>
            <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>A108 Adam Street</li>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>United States</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
            <ul>
            <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>A108 Adam Street</li>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>United States</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Contact</h6>
            <ul>
              <li className='py-2 text-sm'>Email: info@yumeats.com</li>
              <li className='py-2 text-sm'>Phone: +1 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
