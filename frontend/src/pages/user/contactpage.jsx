import React from "react";
<<<<<<< HEAD:src/pages/user/contactpage.jsx
import logo from "../../assets/images/alfies-logo-dark 1.png"
=======
import logo from "../../assets/images/alfies-logo-dark 1.png";
>>>>>>> bdb3422b22ea15de1d3175c430c3bfdb19e718f9:frontend/src/pages/user/contactpage.jsx

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-6 space-y-6 md:space-y-0 md:space-x-10 h-[100vh] md:h-[80vh] lg:h-[80vh] lg:pt-[12%] md:pt-[30%] pt-[45%]">
<<<<<<< HEAD:src/pages/user/contactpage.jsx
      {/* Contact Information */}

      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <img src={logo} className="md:h-4 lg:h-14 h-4" />
        <div className="flex flex-col space-y-4">
          {/* Call To Us */}
=======
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          <img src={logo} className="md:h-4 lg:h-14 h-4"  alt ="logo"/>
        <div className="flex flex-col space-y-4">
>>>>>>> bdb3422b22ea15de1d3175c430c3bfdb19e718f9:frontend/src/pages/user/contactpage.jsx
          <div className="flex items-start space-x-4 lg:pt-20 md:pt-5">
            <div className="text-green-500 text-2xl">
              <i className="fas fa-phone-alt"></i>
            </div>

            <div>
              <h3 className="text-lg font-bold">Call To Us</h3>
              <p className="text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-semibold">Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
<<<<<<< HEAD:src/pages/user/contactpage.jsx
          {/* Write To Us */}
=======
>>>>>>> bdb3422b22ea15de1d3175c430c3bfdb19e718f9:frontend/src/pages/user/contactpage.jsx
          <div className="flex items-start space-x-4">
            <div className="text-red-500 text-2xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold">Write To Us</h3>
              <p className="text-gray-600">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-semibold">Emails: customer@exclusive.com</p>
              <p className="font-semibold">support@exclusive.com</p>
            </div>
          </div>
          <hr />
        </div>
      </div>

<<<<<<< HEAD:src/pages/user/contactpage.jsx
      {/* Contact Form */}
=======
>>>>>>> bdb3422b22ea15de1d3175c430c3bfdb19e718f9:frontend/src/pages/user/contactpage.jsx
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Your Phone *"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded h-32"
          ></textarea>
          <button className="bg-green-500 text-white w-full py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
