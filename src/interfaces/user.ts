export interface IUser {
  id: string;
  nickName: string;
}

export interface IUserReducer {
  user: IUser | null;
  signInPending: boolean;
  signInFulfilled: boolean;
  signInRejected: string;
  authPending: boolean;
  authFulfilled: boolean;
  authRejected: string;
}
