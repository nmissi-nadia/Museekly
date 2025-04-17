import React from 'react';

function SongDetails({ song, onBack }) {
    return (
        <div>
            <button onClick={onBack} className="mb-4 p-2 bg-blue-500 text-white rounded">
                Retour
            </button>
            <h2 className="text-xl font-bold mb-2">{song.title}</h2>
            <p className="text-sm text-gray-600 mb-4">Par {song.artist}</p>
            <div className="lyrics bg-gray-100 p-4 rounded">
                {song.lyrics || "Paroles non disponibles"}
            </div>
        </div>
    );
}

export default SongDetails;
