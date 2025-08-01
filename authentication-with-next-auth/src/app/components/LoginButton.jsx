"use client"

import { signIn } from "next-auth/react"

const LoginButton = () => {
  return (
    <div>
      <button onClick={()=> signIn()} className="btn bg-orange-400 text-2xl font-bold border-2 px-10 py-2  mt-4 border-black rounded-xl"> Login </button>
    </div>
  );
};

export default LoginButton;