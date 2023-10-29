"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="w-full flex justify-center items-center gap-2">
          <p className="font-semibold ">{session?.user?.email}</p>
          <button
            className="border-2 border-black px-5 py-2 rounded-lg"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[20rem] h-[20rem] bg-slate-300 shadow-md flex items-center justify-center rounded-md">
          <button
            onClick={() => signIn("github")}
            className="text-xl font-semibold"
          >
            <Image
              src="/icons8-github.svg"
              alt="github icons for login button"
              height={100}
              width={100}
            />
            <span className="bg-blue-400 px-5 py-2 rounded-md">Sign in</span>
          </button>
        </div>
      </div>
    </>
  );
}
