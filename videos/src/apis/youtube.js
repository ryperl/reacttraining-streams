import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyDHdzMYmAHhzFL9x02uFb_5eH9vMXRySWM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_KEY
    }
});