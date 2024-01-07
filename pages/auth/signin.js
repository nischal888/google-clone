import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';
const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            <p>This Website is created for learning purposes</p>
            {/* <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
