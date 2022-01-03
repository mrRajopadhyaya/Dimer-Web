import axios from 'axios';
import firebaseInstance from './firebase';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

let token = '';
(async () => {
  const user = firebaseInstance.auth().currentUser;
  token = user ? ((await user.getIdToken()) as string) : '';
})();

axios.defaults.headers.common.Authorization =
  localStorage.getItem('access-token') ?? '';

axios.defaults.headers['Accept-Language'] = 'en-us';

axios.interceptors.request.use(
  function (config) {
    const user = firebaseInstance.auth().currentUser;
    const idToken = user?.getIdToken();
    // * Do something before request is sent
    return config;
  },
  function (error) {
    // * Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // * Any status code that lie within the range of 2xx cause this function to trigger
    // * Do something with response data
    return response.data;
  },
  function (error) {
    // * Any status codes that falls outside the range of 2xx cause this function to trigger
    // * Do something with response error

    if (error.response && error.response.status === 401) {
      // * write unauthorized logic here..
    }

    return Promise.reject(error?.response?.data?.message ?? 'Network Error');
  }
);
export default axios;