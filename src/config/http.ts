import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;
axios.defaults.headers = {
  icode: '8272C73EA5D315C2',
};

axios.interceptors.request.use(
  function (config) {
    console.log('请求config', config);
    config.headers = {
      icode: '8272C73EA5D315C2',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    console.log('响应response', response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
