import Link from 'next/link';
import { nanoid } from 'nanoid';
import { GetServerSideProps, NextPage } from 'next';

import wrapper from '@store/.';

import { IUser } from '@interfaces/user';

import { authAction } from '@actions/user';
import useAppSelector from '@hooks/useAppSelector';

const SSRPage: NextPage = () => {
  const user = useAppSelector<IUser | null>(state => state.user.user);

  return (
    <div>
      {user && user.id && (
        <>
          <div>ID:{user.id}</div>
          <div>NICKNAME:{user.nickName}</div>
          <br />
          <strong>Try Reload!!</strong>
        </>
      )}

      <br />
      <br />

      <Link href='/'>
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async context => {
    // don't delete await
    await store.dispatch(authAction({ token: nanoid() }));

    return {
      props: {},
    };
  },
);

export default SSRPage;
