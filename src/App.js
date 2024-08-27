import { useState } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import BrandAndUser from "./components/BrandAndUser";
import SongBrowser from "./components/SongBrowser/SongBrowser";

import {
  convertIntoDarkShade,
  hexToRgba,
} from "./utilityMethods/convertIntoDarkShade";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [currentBackgroundHexCode, setCurrentBackgroundHexcode] =
    useState("#023020");

    console.log(selectedSong); 

  return (
    <div
      className="grid grid-cols-12 text-white min-h-screen "
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${hexToRgba(
          currentBackgroundHexCode,
          1
        )}, ${hexToRgba(
          convertIntoDarkShade(currentBackgroundHexCode, 40),
          1
        )}, ${hexToRgba(
          convertIntoDarkShade(currentBackgroundHexCode, 90),
          1
        )})`,
      }}
    >
      <div className="ml-10 col-span-2 flex-col flex justify-between">
        <BrandAndUser />
      </div>

      <div className="col-span-5 flex-col items-center justify-center">
        <SongBrowser
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          setCurrentBackgroundHexcode={setCurrentBackgroundHexcode}
        />
      </div>

      <div className="col-span-5 flex items-center justify-center">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
