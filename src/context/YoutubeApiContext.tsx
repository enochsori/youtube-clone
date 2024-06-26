import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
// import YoutubeClient from '../api/youtubeClient';
import FakeYoutubeClient from '../api/fakeYoutubeClient';

export const YoutubeApiContext = createContext(null);

// const client = new YoutubeClient();
const client = new FakeYoutubeClient();

const youtube = new Youtube(client);

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
