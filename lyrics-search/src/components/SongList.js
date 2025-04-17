import React from 'react';

const SongList = ({ songs, onSelect }) => {
    if (!songs.length) {
        return <p className="text-center mt-4">Aucun résultat trouvé.</p>;
    }

    return (
        <ul className="song-list list-none p-4">
            {songs.map((song, index) => (
                <li
                    key={index}
                    className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => onSelect(song)}
                >
                    <p className="font-bold">{song.title}</p>
                    <p className="text-sm text-gray-600">{song.artist.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default SongList;
