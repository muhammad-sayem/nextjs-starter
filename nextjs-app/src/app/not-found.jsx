import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <h1 className='text-cneter text-4xl text-red-500 font-bold mb-4'> 404 Not found </h1>
      <p className='mb-4'> <Link className='btn bg-teal-400 p-3 rounded-xl' href='/'> Go back to home </Link> </p>
    </div>
  );
};

export default NotFoundPage;