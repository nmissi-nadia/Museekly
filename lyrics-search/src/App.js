import React, { useState } from 'react';
import { searchSongs, getSongLyrics } from './api/lyricsApi';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

function App() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleSearch = async (query) => {
        try {
            const results = await searchSongs(query);
            setSongs(results.map(song => ({
                id: song.id,
                title: song.title,
                artist: song.artist.name,
                album: song.album.title,
                cover: song.album.cover_medium,
            })));
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
        }
    };

    const handleSongSelect = async (song) => {
        try {
            const lyrics = await getSongLyrics(song.artist, song.title);
            setSelectedSong({
                ...song,
                lyrics,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des paroles :", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Lyrics Finder</h1>
            <input
                type="text"
                placeholder="Rechercher une chanson..."
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            {selectedSong ? (
                <SongDetails song={selectedSong} onBack={() => setSelectedSong(null)} />
            ) : (
                <SongList songs={songs} onSelect={handleSongSelect} />
            )}
        </div>
    );
}

export default App;
