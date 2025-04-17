import React from 'react';

const SongDetails = ({ song, onBack }) => {
    return (
        <div className="song-details p-4">
            <button
                onClick={onBack}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mb-4"
            >
                Retour
            </button>
            <h2 className="text-2xl font-bold mb-2">{song.title}</h2>
            <h3 className="text-lg text-gray-700 mb-4">Artiste : {song.artist}</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">{song.lyrics}</pre>
        </div>
    );
};

export default SongDetails;
