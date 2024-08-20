import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Google from '../assets/images/Google.png';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [passwordValid, setPasswordValid] = useState(false);

  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (validatePassword(newPassword)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      setPasswordValid(true);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          'Password must include capital letters, numbers, and symbols.',
      }));
      setPasswordValid(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !errors.password &&
      !errors.confirmPassword &&
      password &&
      confirmPassword
    ) {
      try {
        console.log('Registration successful');
      } catch (err) {
        console.error('Registration failed:', err);
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h2 className='text-2xl font-bold mb-4'>Create an account</h2>
        <p className='text-gray-600 mb-6'>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
            required
          />
          <input
            type='email'
            placeholder='Email or Phone Number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
            required
          />

          <div className='relative mb-4'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <div
              className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.password && (
            <p className='text-red-500 text-sm mb-2'>{errors.password}</p>
          )}

          <div className='relative mb-6'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Retype Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              disabled={!passwordValid}
              className={`w-full p-2 border border-gray-300 rounded ${
                !passwordValid ? 'cursor-not-allowed' : ''
              }`}
              title={!passwordValid ? 'Type a correct password' : ''}
              required
            />
            <div
              className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm mb-2'>
              {errors.confirmPassword}
            </p>
          )}

          <button
            type='submit'
            className='w-full bg-green-500 text-white py-2 rounded-lg font-bold'
          >
            Create Account
          </button>
        </form>
        <div className='flex items-center justify-center mt-4'>
          <button className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg'>
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
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-black font-semibold'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
