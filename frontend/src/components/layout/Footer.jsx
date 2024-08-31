import React from 'react';
import { Link } from 'react-router-dom';
import PlayStore from '../../assets/images/google-play-badge.png';
import AppleStore from '../../assets/images/apple-store.png';
import QrCode from '../../assets/images/frame.png';

function Footer() {
  return (
    <div className='div'>
      <div className='flex flex-wrap justify-around lg:px-40 md:px-4 px-[7px] py-2'>
        <div className='account flex flex-col'>
          <h1 className='font-bold text-xl md:text-lg mb-2'>
            Account
          </h1>
          <div className='links flex-col flex gap-3  text-sm md:text-base'>
            <Link to='/my-account'>My Account</Link>
            <Link to='/login'>Login</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/wishlist'>Wish List</Link>
            <Link to='/'>Shop</Link>
          </div>
        </div>
        <div className='support flex flex-col'>
          <h1 className='font-bold text-xl md:text-lg  mb-2'>Support</h1>
          <div className='links flex flex-col gap-3  text-sm md:text-base'>
            <p>03, Vavuniya</p>
            <p>northernit@gmail.com</p>
            <p>+94-77-876-6547</p>
          </div>
        </div>
        <div className='quick-links flex flex-col'>
          <h1 className='font-bold text-xl md:text-lg  mb-2'>Quick Links</h1>
          <div className='links flex flex-col gap-3  text-sm md:text-base'>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/terms'>Terms Of Use</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
        </div>
        <div className='apps flex flex-col'>
          <h1 className='font-bold text-xl md:text-lg  mb-2'>Download Apps</h1>
          <p className=' text-sm md:text-base'>
            Save CEH 5.00 With App New User Only
          </p>
          <div className='links flex items-center'>
            <img
              src={QrCode}
              alt='QR Code'
              className='w-[130px] h-[130px]'
            />
            <div className='stores'>
              <img
                src={PlayStore}
                alt='Play Store'
                className='w-[150px]'
              />
              <img
                src={AppleStore}
                alt='Apple Store'
                className='w-[150px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='copyrights bg-black text-white py-1 text-xs md:text-sm'>
        <p className='text-center'>
          &copy; Copyright NIH 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
