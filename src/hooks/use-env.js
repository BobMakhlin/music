const useEnv = () => {
    return {
        musicApi: process.env.REACT_APP_MUSIC_API_URI
    }
};

export default useEnv;
