import { useContext, useState } from "react";
import { createContext } from "react";

const CurrentTrackContext = createContext({
  currentTrack: null,
  setCurrentTrack: () => {
    // By default is a dummy empty function.
  },
});

const CurrentTrackProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const contextValue = {
    currentTrack,
    setCurrentTrack,
  };

  return (
    <CurrentTrackContext.Provider value={contextValue}>
      {children}
    </CurrentTrackContext.Provider>
  );
};

export const useCurrentTrack = () => useContext(CurrentTrackContext);
export default CurrentTrackProvider;
