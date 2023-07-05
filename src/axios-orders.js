import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c8f5d.firebaseio.com/'
});

export default instance;