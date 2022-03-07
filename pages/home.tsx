import { GetServerSideProps, NextPage } from 'next';

import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

const Home: NextPage = () => {
  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/home',
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    return { props: { customProp: 'bar' } };
  },
});

export default Home;
