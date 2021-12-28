import axios from '../Config/axios';

const BASE_PATH = '/user';

export const APIGetProfile = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/profile`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};
