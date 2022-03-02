import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { IUser } from '@interfaces/user';

interface IParams {
  token: string;
}

export const authAction = createAsyncThunk(
  'user/auth',
  async (data: IParams, { dispatch }): Promise<IUser> => {
    console.log('Auth Action');

    // const response = await axios.post('yourServer', data);

    return {
      id: nanoid(),
      nickName: 'Tom Cruise',
    };
  },
);
