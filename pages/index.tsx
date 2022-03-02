import Link from 'next/link';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { useCallback, useState, MouseEvent, ChangeEvent } from 'react';

import { IUser } from '@interfaces/user';
import useAppSelector from '@hooks/useAppSelector';

import { signInAction } from '@utils/redux/actions/user';

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  const user = useAppSelector<IUser | null>(state => state.user.user);
  const signInPending = useAppSelector<boolean>(state => state.user.signInPending);

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'id') {
      setId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }, []);

  const onClickSignIn = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      dispatch(
        signInAction({
          id,
          password,
        }),
      );
    },
    [dispatch, id, password],
  );

  return (
    <div>
      {user && user.id ? (
        <>
          <div>ID:{user.id}</div>
          <div>NICKNAME:{user.nickName}</div>
          <br />
          <strong>Try Reload!!</strong>
        </>
      ) : (
        <>
          <div>
            ID:
            <input name='id' type='text' value={id} onChange={onChangeText} />
          </div>
          <div>
            PASSWORD:
            <input name='password' type='password' value={password} onChange={onChangeText} />
          </div>
          <div>
            <button type='button' onClick={onClickSignIn} disabled={signInPending}>
              Sign In
            </button>
          </div>
        </>
      )}

      <br />
      <br />

      <Link href='/ssr'>
        <a>go SSR page</a>
      </Link>
    </div>
  );
};

export default IndexPage;
