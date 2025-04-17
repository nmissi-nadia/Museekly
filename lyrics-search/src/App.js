import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import { searchLyrics, getLyricsDetails } from './api/lyricsApi';

function App() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleSearch = async (query) => {
        try {
            const results = await searchLyrics(query);
            setSongs(results.data); // Adapte cette ligne selon la structure de l'API.
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
        }
    };

    const handleSongSelect = async (song) => {
        try {
            const details = await getLyricsDetails(song.artist, song.title);
            setSelectedSong({ ...song, lyrics: details.lyrics });
        } catch (error) {
            console.error("Erreur lors de la récupération des détails :", error);
        }
    };

    const handleBack = () => {
        setSelectedSong(null);
    };

    return (
        <div className="App container mx-auto p-4">
            <SearchBar onSearch={handleSearch} />
            {!selectedSong && <SongList songs={songs} onSelect={handleSongSelect} />}
            {selectedSong && <SongDetails song={selectedSong} onBack={handleBack} />}
        </div>
    );
}

export default App;
