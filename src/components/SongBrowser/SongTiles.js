import React from "react";
import songCoverImageApi from "../../apis/songCoverImageApi";
import getDurationInMinutes from "../../utilityMethods/getDurationInMinutes";

const SongTiles = ({
  selectedSong,
  setSelectedSong,
  songsList,
  setCurrentBackgroundHexcode,
}) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg">
      {songsList.map((song) => (
        <div
          key={song.id}
          className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
            song.id === selectedSong
              ? "bg-white bg-opacity-15 transform scale-105 shadow-lg"
              : ""
          }`}
          onClick={() => {
            setSelectedSong(song);
            setCurrentBackgroundHexcode(song.accent);
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 bg-cover rounded-full"
              style={{
                backgroundImage: `url(${songCoverImageApi + song.cover})`,
              }}
            ></div>
            <div>
              <h4 className="text-white text-sm font-medium">{song.name}</h4>
              <p className="text-gray-400 text-xs">{song.artist}</p>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            {getDurationInMinutes(song.url)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongTiles;
