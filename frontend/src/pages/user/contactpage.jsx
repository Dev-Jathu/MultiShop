import React from 'react';
import logo from '../../assets/images/logos.png';

const ContactSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start p-6 space-y-6 md:space-y-4 md:space-x-10 h-[100vh] md:h-[75.6vh] lg:h-[69.8vh] lg:pt-[10%] md:pt-[30%] pt-[45%] md:mb-10 lfg:mb-0 mb-10'>
      <div className='rounded-lg p-6 w-full md:w-1/3'>
        <img
          src={logo}
          className='md:h-14 lg:w-32 lg:h-32 h-10 hidden lg:block'
          alt='logo'
        />
        <div className='flex flex-col space-y-4  '>
          <div className='flex items-start space-x-4  md:pt-5'>
            <div className='text-green-500 text-2xl'>
              <i className='fas fa-phone-alt'></i>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Call To Us</h3>
              <p className='text-gray-600'>
                We are available 24/7, 7 days a week.
              </p>
              <p className='font-semibold'>Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
          <div className='flex items-start space-x-4'>
            <div className='text-red-500 text-2xl'>
              <i className='fas fa-envelope'></i>
            </div>
            <div>
              <h3 className='text-lg font-bold'>Write To Us</h3>
              <p className='text-gray-600'>
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className='font-semibold'>Emails: customer@exclusive.com</p>
              <p className='font-semibold'>support@exclusive.com</p>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className='bg-white shadow-sm rounded-lg p-6 w-full md:w-1/2'>
        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Your Name *'
            className='w-full border p-2 rounded'
          />
          <input
            type='email'
            placeholder='Your Email *'
            className='w-full border p-2 rounded'
          />
          <input
            type='text'
            placeholder='Your Phone *'
            className='w-full border p-2 rounded'
          />
          <textarea
            placeholder='Your Message'
            className='w-full border p-2 rounded h-32'
          ></textarea>
          <button className='bg-primary text-white w-full py-2 rounded'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
