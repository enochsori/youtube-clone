import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa6';
import { BiError } from 'react-icons/bi';
import VideoCard from '../components/VideoCard';
import useYoutubeApi from '../context/YoutubeApiContext';
import { useEffect } from 'react';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      return youtube.search(keyword);
    },
  });

  useEffect(() => {}, [keyword]);

  return (
    <>
      <div className='text-lg'>Videos : {keyword ? keyword : 'hot videos'}</div>
      {isLoading && <FaSpinner className='text-4xl' />}
      {error && <BiError />}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
