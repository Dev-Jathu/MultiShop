import { useState } from 'react';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success('Registration successful');
      setEmail('');
      setPassword('');
    } catch (error) {
      setErrors({ email: 'Registration failed. Please try again.' });
      toast.error('Registration failed. Please try again');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[30%] p-8 rounded-lg shadow-lg bg-white'>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
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
          <button
            type='submit'
            className='w-full bg-green-500 text-white py-2 rounded-lg font-bold'
          >
            Register
          </button>
        </form>
        <div className='flex items-center justify-center mt-4'>
          <button
            type='button'
            className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg'
          >
            <img
              src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
              alt='Google Icon'
              className='w-5 h-5 mr-2'
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
