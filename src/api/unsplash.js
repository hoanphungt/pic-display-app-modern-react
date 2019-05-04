import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d68cd7f16b22a1a01aa2d2ec63a32504f3313adeb7c47df31e181a1c232352c2'
    }
});