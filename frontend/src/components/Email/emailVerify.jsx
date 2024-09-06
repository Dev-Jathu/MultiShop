import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const { token, id } = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/${id}/verify/${token}`);
        const data = await response.json();
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmailUrl();
  }, [token, id]);

  const navigate = () => {
    // window.location.reload();
    window.location.href = '/my-account';
  };

  return (
    <Fragment>
      {validUrl ? (
        <div className='flex flex-col gap-5 justify-center items-center h-[100vh]'>
          <h1 className='text-3xl font-bold'>Account verified successfully</h1>
          {/* Successful verification hand image */}
          <img
            src='https://cdn-icons-png.flaticon.com/512/271/271257.png'
            alt='verified'
            className='w-24 h-24'
          />

          <button
            className='bg-primary text-white py-2 px-4 rounded'
            onClick={navigate}
          >
            Go to My Account
          </button>
        </div>
      ) : (
        <h1 className='text-3xl font-bold flex justify-center items-center h-10'>
          Wait for Another Chance!
        </h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
