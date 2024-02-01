import { createContext, useContext } from 'react';
// import Youtube from '../api/youtube';
import FakeYoutube from '../api/fake-youtube';

export const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new FakeYoutube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export default function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
