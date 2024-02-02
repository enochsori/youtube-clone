import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {
  const {
    state: {
      video: {
        id,
        snippet: { title, channelId, channelTitle, description },
      },
    },
  } = useLocation();

  return (
    <section>
      <iframe
        id='player'
        type='text/html'
        width='100%'
        height='640'
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
      />
      <div className='p-8'>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre className=' whitespace-pre-wrap'>{description}</pre>
      </div>
    </section>
  );
}
