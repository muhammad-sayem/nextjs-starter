"use client";

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <div>
      <button onClick={()=> signOut()} className='btn bg-red-500 font-bold border-2 border-black'> Logout </button>
    </div>
  );
};

export default LogoutButton;