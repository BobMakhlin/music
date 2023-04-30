import { useContext, useState } from "react";
import { createContext } from "react";

const CurrentTrackContext = createContext(null);
const CurrentTrackDispatchContext = createContext(() => {
  // By default is a dummy empty function.
});

const CurrentTrackProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <CurrentTrackContext.Provider value={currentTrack}>
      <CurrentTrackDispatchContext.Provider value={setCurrentTrack}>
        {children}
      </CurrentTrackDispatchContext.Provider>
    </CurrentTrackContext.Provider>
  );
};

export const useCurrentTrack = () => useContext(CurrentTrackContext);
export const useCurrentTrackDispatch = () =>
  useContext(CurrentTrackDispatchContext);
export default CurrentTrackProvider;
