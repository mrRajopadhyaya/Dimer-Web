import { ReduxAction } from '../../Interface/Common';
import { UserState } from '../../Interface/UserState';
import { UPDATE_PROFILE } from './constant';

const initialState: UserState = {
  profile: {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: '',
  },
};

export const UserReducer = (
  state: UserState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: { ...action.payload },
      };
    default:
      return state;
  }
};
