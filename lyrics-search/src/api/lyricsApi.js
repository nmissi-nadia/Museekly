import axios from 'axios';

// URL de base de l'API Lyrics.ovh
const BASE_URL = 'https://api.lyrics.ovh';

// Fonction pour rechercher des chansons
export const searchSongs = async (term) => {
    try {
        const response = await axios.get(`${BASE_URL}/suggest/${term}`);
        return response.data.data; // Résultats de la recherche
    } catch (error) {
        console.error("Erreur lors de la recherche des chansons :", error);
        throw error;
    }
};

// Fonction pour obtenir les paroles d’une chanson
export const getSongLyrics = async (artist, title) => {
    try {
        const response = await axios.get(`${BASE_URL}/v1/${artist}/${title}`);
        return response.data.lyrics; // Paroles de la chanson
    } catch (error) {
        console.error("Erreur lors de la récupération des paroles :", error);
        throw error;
    }
};
