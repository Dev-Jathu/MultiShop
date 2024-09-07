import React from 'react';
import { useLocation } from 'react-router-dom';
import bank from "../../assets/images/bank.png"
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; 
  const total = subtotal + shipping;

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[100vh] pt-[150px]">
      <h2 className="text-2xl font-bold mb-4 pt-5">Billing Details</h2>
      <div className="bg-white  flex flex-col md:flex-row w-full max-w-7xl pt-3">
        <div className="w-full md:w-1/2 p-8 space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Apartment, floor, etc. (optional)"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Town/City"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 w-full"
          />
          <div>
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 border rounded-lg">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <img
                src={item.images}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Shipping:</span>
            <span>{shipping === 0 ? "Free" : shipping}</span>
          </div>
          <div className="flex justify-between items-center mt-4 font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="">
            <div className="flex items-center justify-between h-14">
              <div>
                <input type="radio" id="bank" name="payment" className="mr-2" />
                <label htmlFor="bank">Bank</label>
              </div>
              <img src={bank} alt="bankcart" className='h-30' />
            </div>
            <div className="flex items-center">
              <input type="radio" id="cod" name="payment" className="mr-2" />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 flex-1"
            />
            <button className="bg-primary text-white px-4 py-2">
              Apply Coupon
            </button>
          </div>

          <button className="bg-primary text-white px-4 py-2 mt-4 w-full">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
