import { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';

const IndexPage: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {user ? (
        <div>
          <h2>Welcome Back {user.name}</h2>
          <a href='/api/auth/logout'>Logout</a>
        </div>
      ) : (
        <div>
          <a href='/api/auth/login'>Login</a>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
