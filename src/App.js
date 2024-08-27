import AudioPlayer from "./components/AudioPlayer/AudioPlayer"
import BrandAndUser from "./components/BrandAndUser";
import SongBrowser from "./components/SongBrowser/SongBrowser";

function App() {
  return (
    <div className="grid grid-cols-12 text-white bg-gray-900 h-screen">
      
      <div className="ml-10  col-span-2  flex-col flex justify-between">
        <BrandAndUser />
      </div>

      <div className="col-span-5  flex-col items-center justify-center">
        <SongBrowser />
      </div>

      <div className=" col-span-5  flex items-center justify-center">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
