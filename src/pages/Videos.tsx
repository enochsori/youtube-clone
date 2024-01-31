import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa6';
import { BiError } from 'react-icons/bi';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return axios
        .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.data.items);
    },
  });

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
