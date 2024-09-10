'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
const SigninButton = () => {
  const { data: status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SigninButton;
