import { nanoid } from 'nanoid';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '@interfaces/user';

const TimeSleep = (time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

interface IParams {
  id: string;
  password: string;
}

export const signInAction = createAsyncThunk(
  'user/signIn',
  async (data: IParams, { dispatch }): Promise<IUser> => {
    console.log('signIn Action');

    // const response = await axios.post('yourServer', data);
    await TimeSleep(3000);

    return {
      id: nanoid(),
      nickName: 'Tom Cruise',
    };
  },
);
