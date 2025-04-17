import axios from 'axios';

const BASE_URL = 'https://api.lyrics.ovh/v1';

export const fetchLyrics = async (artist, title) => {
    try {
        const response = await axios.get(`${BASE_URL}/${artist}/${title}`);
        return response.data.lyrics;
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        throw error;
    }
};
