import axios from 'axios';
import apiConfig from '../config';

const getAllImages = async () => {
    console.log('-- Getting All Images --');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        crossDomain: true
    };	

    const url = `${apiConfig.baseUrl}/image/list`;
    console.log('-- Getting from URL --', url);
    try {
        const response = await axios.get(url, config);
        if(response.status === 200) {
            return response.data.images;
        } else {
            return [];
        }
    } catch (error) {
        console.log('-- API Error --', error);
        return undefined;
    }
};

export default getAllImages;
