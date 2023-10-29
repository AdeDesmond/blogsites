"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmitNewUser = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return toast.error("password not same ");
    } else if (!email.includes("@")) {
      return toast.error("wrong email");
    } else if (password.length < 8) {
      return toast.error("password is too short");
    }
    const data = { name, email, password };
    try {
      setError(null);
      await axios.post("/api/users/signup", data);
      toast.success("Successfully created");
      setEmail("");
      setName("");
      setPassword("");
      setPasswordConfirm("");
      router.push("/signin");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full">
      <form
        action=""
        className="flex flex-col items-center justify-center text-sm gap-2 bg-slate-300"
        onSubmit={handleSubmitNewUser}
      >
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-3/4 h-10 rounded-lg focus:outline-none md:w-1/2 lg:w-1/2"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-3/4 h-10 rounded-lg focus:outline-none md:w-1/2 lg:w-1/2"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-3/4 h-10 rounded-lg focus:outline-none md:w-1/2 lg:w-1/2"
        />
        <label htmlFor="password">Password Confirm</label>
        <input
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-3/4 h-10 rounded-lg focus:outline-none md:w-1/2 lg:w-1/2"
        />
        <button className="bg-slate-900 text-white px-5 py-1 rounded-lg mb-3">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
