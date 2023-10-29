"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || " ");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      const verifyUserEmail = async () => {
        try {
          await axios.post("/api/users/verifyemail", { token });
          setVerified(true);
        } catch (err: any) {
          setError(true);
          console.log(err.message);
        }
      };
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div>
      <h1 className="text-4xl">Verify your email</h1>
      <h2>{token ? `${token}` : "no token"}</h2>
      {verified && (
        <div>
          <Link href="/login">Login</Link>
        </div>
      )}

      <h1 className="text-4xl">Error</h1>
      {error && <div>{error}</div>}
    </div>
  );
}
