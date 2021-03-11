import axios from 'axios';

const searchImage = axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        //'Accept-Version': 'V1',
        Authorization: 'Client-ID '
    },
})

export default searchImage