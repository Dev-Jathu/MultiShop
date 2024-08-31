import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext.js';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import Google from '../assets/images/Google.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(authContext);
  const Navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address.';
      toast.error('Please enter a valid email address.');
    }

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      toast.error('Password must be at least 6 characters.');
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        toast.success('Welcome Back!');

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: result.user,
            role: result.role,
            token: result.token,
          },
        });

        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('role', result.role);
        localStorage.setItem('token', result.token);

        setEmail('');
        setPassword('');
        setLoading(false);

        if (result.role === 'admin') {
          Navigate('/admin');
        } else {
          Navigate('/my-account');
        }
      } catch (error) {
        setErrors({ email: 'Login failed. Please try again.' });
        toast.error('Login failed. Please try again');
        setLoading(false);
      }
    }
  };

  // google authentication
  function navigate(url) {
    window.location.href = url;
  }

  async function auth() {
    const response = await fetch(`http://localhost:5000/request`, {
      method: 'POST',
    });
    const data = await response.json();
    navigate(data.url);
  }
  return (
    <div className='flex items-center justify-center lg:min-h-screen md:h-[79vh] h-[90vh] bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-2xl font-bold mb-4'>Log in to Exclusive</h2>
        <p className='text-gray-600 mb-6'>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email or Phone Number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
            required
          />
          {errors.email && (
            <p className='text-red-500 text-sm mb-2'>{errors.email}</p>
          )}
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
            required
          />
          {errors.password && (
            <p className='text-red-500 text-sm mb-2'>{errors.password}</p>
          )}
          <button
            type='submit'
            className='w-full bg-primary text-white py-2 rounded-lg font-bold'
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className='flex items-center justify-center mt-4'>
          <button
            onClick={() => auth()}
            type='submit'
            className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg'
          >
            <img
              src={Google}
              alt='Google Icon'
              className='w-5 h-5 mr-2'
            />
            Sign up with Google
          </button>
        </div>
        <div className='mt-6 text-center'>
          <p className='text-gray-600'>
            Dont have an account?{' '}
            <Link
              to='/sign-up'
              className='text-black font-semibold'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// import React from "react";
// import { BASE_URL } from "../config";

// function navigate(url) {
//   window.location.href = url;
// }

// async function auth() {
//   const response = await fetch(`http://localhost:5000/request`, { method: "POST" });
//   const data = await response.json();
//   navigate(data.url);
// }

// function login() {
//   return (
//     <div className="h-[100vh] flex flex-col justify-center items-center">
//       <div className="text-xl text-center">login</div>
//       <button type="button" onClick={() => auth()}>
//         Login
//       </button>
//     </div>
//   );
// }

// export default login;
