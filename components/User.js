import { useSession, signIn, signOut } from 'next-auth/react';

const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button>sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  );
};

export default User;
