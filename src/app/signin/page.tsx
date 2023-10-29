import Component from "@/components/login-btn";

export default function SignInPage() {
  return <Component />;
}

/* 

"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/userdata";
function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSignInUser = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    const data = { email, password };
    try {
      setError(null);
      if (!email.includes("@")) {
        return toast.error("wrong email");
      } else if (password.length < 8) {
        return toast.error("password is too short");
      }

      await axios.post("/api/users/signin", data);
      toast.success("successfully signin");
      await getUser();
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err: any) {
      toast.error(error);
      setError(err.message);
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSignInUser}
        action=""
        className="flex flex-col items-center justify-center text-sm gap-2 bg-slate-300"
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-3/4 h-10 rounded-lg focus:outline-none md:w-1/2 "
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-3/4 h-10 rounded-lg focus:outline-none lg:w-1/2 md:w-1/2"
        />

        <button className="bg-slate-900 text-white px-5 py-1 rounded-lg mb-3">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;

*/
