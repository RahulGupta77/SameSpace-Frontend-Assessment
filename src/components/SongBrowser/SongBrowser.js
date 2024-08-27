import React, { useState } from "react";
import TrackTitles from "./TrackTitles";
import SongSearchBar from "./SongSearchBar";

const SongBrowser = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("forYou");
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState(""); 




  //  useEffect(() => {

  //    const fetchData = async () => {
  //      try {
  //        setLoading(true);
  //        const response = await fetch(songsApi);
  //        const data = await response.json();
  //        setAllSongs(data.data);
  //        console.log(data.data);
  //      } catch (error) {
  //        console.log(error.message);
  //      } finally {
  //        setLoading(false);
  //      }
  //    };

  //    fetchData();
  //  }, []);

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
    </div>
  );
};

export default SongBrowser;
