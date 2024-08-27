import React from 'react'

const TrackTitles = ({selectedTrack, setSelectedTrack}) => {
      const changeSelectedTrack = (selectedTrack) => {
        setSelectedTrack(selectedTrack);
      };
  return (
    <div className="flex text-xl font-semibold gap-x-14 w-3/4">
      <h1
        onClick={() => {
          changeSelectedTrack("forYou");
        }}
        className={
          "cursor-pointer " +
          (selectedTrack === "forYou" ? "text-[#ffffff]" : "text-[#848484]")
        }
      >
        For You
      </h1>
      <h1
        onClick={() => {
          changeSelectedTrack("topTracks");
        }}
        className={
          "cursor-pointer " +
          (selectedTrack === "topTracks" ? "text-[#ffffff]" : "text-[#848484]")
        }
      >
        Top Tracks
      </h1>
    </div>
  );
}

export default TrackTitles