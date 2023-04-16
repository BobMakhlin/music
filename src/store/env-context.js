import { createContext, useContext } from "react";

const EnvContext = createContext({
  musicApi: "",
});

export const EnvContextProvider = (props) => {
  return <EnvContext.Provider value={{
    // TODO: store urls in env files.
    musicApi: "https://localhost:7223/api"
  }}>{props.children}</EnvContext.Provider>;
};

export const useEnv = () => useContext(EnvContext);
export default EnvContextProvider;
