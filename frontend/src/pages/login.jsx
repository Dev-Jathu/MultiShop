import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const errors = { email: '', password: '' };

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        await login(email, password);
        navigate('/');
      } catch (error) {
        setErrors({ ...errors, email: 'Login failed. Please try again.' });
      } finally {
        setLoading(false);
      }
      console.log("Form submitted");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
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
          />
          {errors.password && (
            <p className='text-red-500 text-sm mb-2'>{errors.password}</p>
          )}
          <button
            type='submit'
            className='w-full bg-green-500 text-white py-2 rounded-lg font-bold'
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <div className='flex justify-between mt-4'>
          <Link
            to='/forgot-password'
            className='text-gray-600 font-semibold'
          >
            Forgot Password?
          </Link>
        </div>
        <div className='mt-6 text-center'>
          <p className='text-gray-600'>
            Don’t have an account?{' '}
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
