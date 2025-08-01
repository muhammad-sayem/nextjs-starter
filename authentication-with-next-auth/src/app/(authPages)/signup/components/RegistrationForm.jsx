"use client";

import { registerUser } from "@/app/actions/auth/regsiterUser";

// import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegistrationForm() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const userData = { username, password };
    // console.log("Registration payload", userData);
    const result = await registerUser(userData);
    console.log(result);
  };

  return (
    <>
      <form onSubmit={handleRegister} className="space-y-4">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          className="block p-1 text-black border border-black rounded-md"
          type="text"
          name="username"
          id="username"
          placeholder="Enter unique username"
        />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          className="block p-1  text-black border border-black rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button type="submit" className="btn outline rounded-md p-2">
          Register
        </button>
      </form>
    </>
  );
}