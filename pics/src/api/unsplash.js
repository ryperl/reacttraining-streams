import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 46d0b7761c3334a81455362f8f030d15e82b671eed18cf007921be38a94d2480'
    }
});