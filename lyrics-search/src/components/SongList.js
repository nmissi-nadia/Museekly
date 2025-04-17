import React from 'react';

function SongList({ songs, onSelect }) {
    return (
        <ul className="song-list list-none p-4">
            {songs.map((song, index) => (
                <li
                    key={index}
                    className="p-2 border-b hover:bg-gray-100 cursor-pointer flex items-center gap-4"
                    onClick={() => onSelect(song)}
                >
                    <img src={song.cover} alt="Album" className="w-12 h-12 rounded" />
                    <div>
                        <p className="font-bold">{song.title}</p>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default SongList;
