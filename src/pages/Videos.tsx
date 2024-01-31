import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return (
    <>
      <div className='text-lg'>Videos : {keyword ? keyword : 'hot videos'}</div>
    </>
  );
}
