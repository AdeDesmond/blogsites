import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthUsers() {
  const { data: session, status } = useSession();
  console.log("session", session);
  const userEmail = session?.user?.email;
  console.log(" useremail", userEmail);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "authenticated") {
    return (
      <>
        <h1>Hi, {userEmail}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
}
