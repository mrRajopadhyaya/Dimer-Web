import axios from '../Config/axios';
import { UserProfile } from '../Interface/UserState';

const BASE_PATH = '/auth';

export const APILogin = async (userDetails: UserProfile) => {
  try {
    const data = await axios.post(`${BASE_PATH}/login`, { ...userDetails });
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
