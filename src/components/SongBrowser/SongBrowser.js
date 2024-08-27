import React, { useEffect, useState } from "react";
import { SpinnerRoundFilled } from "spinners-react";
import songsApi from "../../apis/songsApi";
import checkIfSearchedSongIsPresent from "../../utilityMethods/checkIfSearchedSongIsPresent";
import SongSearchBar from "./SongSearchBar";
import SongTiles from "./SongTiles";
import TrackTitles from "./TrackTitles";

const SongBrowser = ({
  selectedSong,
  setSelectedSong,
  setCurrentBackgroundHexcode,
}) => {
  const [forYouSongs, setForYouSongs] = useState([]);
  const [topTracksSongs, setTopTracksSongs] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("forYou");
  const [loading, setLoading] = useState(true);
  const [searchedText, setSearchedText] = useState("");
  const [searchedSongsResults, setSearchedSongsResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(songsApi);
        const data = await response.json();
        let topTracks = [];
        let forYou = [];

        data.data.forEach((song) => {
          if (song.top_track) {
            topTracks.push(song);
          } else {
            forYou.push(song);
          }
        });

        setForYouSongs(forYou);
        setTopTracksSongs(topTracks);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchedText.trim()) {
      if (selectedTrack === "forYou") {
        setSearchedSongsResults(
          forYouSongs.filter((song) =>
            checkIfSearchedSongIsPresent(song, searchedText)
          )
        );
      } else {
        setSearchedSongsResults(
          topTracksSongs.filter((song) =>
            checkIfSearchedSongIsPresent(song, searchedText)
          )
        );
      }
    } else {
      setSearchedSongsResults([]);
    }
  }, [searchedText]);

  return (
    <div className="w-3/4 mt-16 mx-auto">
      <TrackTitles
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />

      <SongSearchBar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      />

      {loading ? (
        <div className="w-full flex flex-col justify-ceter items-center mt-20">
          <SpinnerRoundFilled size={"100"} />
        </div>
      ) : (
        <div className="mt-10">
          {searchedText.trim() && !Boolean(searchedSongsResults.length) ? (
            <div> No Songs Found</div>
          ) : (
            <SongTiles
              songsList={
                Boolean(searchedSongsResults.length)
                  ? searchedSongsResults
                  : selectedTrack === "forYou"
                  ? forYouSongs
                  : topTracksSongs
              }
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              setCurrentBackgroundHexcode={setCurrentBackgroundHexcode}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SongBrowser;
