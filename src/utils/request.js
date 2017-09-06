import axios from 'axios';

axios.defaults.baseURL = document.querySelector('#base-url').href;

export default axios;
