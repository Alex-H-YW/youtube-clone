import dayjs from 'dayjs';
import { Isnippet } from '../../interface/video';

interface VideoListProps {
    snippet: Isnippet
     
}

const VideoList:React.FC<VideoListProps> = ({snippet}) => {
  return (
    <div  className='flex py-1.5'>
        <img src={snippet.thumbnails.default.url} />
        <div className='pl-3'>
            <p className='text-sm'>{snippet.title}</p>
            <p className='text-sm text-gray-400'>{snippet.channelTitle}</p>
            <p className='text-sm text-gray-400'>{dayjs(snippet.publishedAt).fromNow()}</p>
        </div>
    </div>
  )
}

export default VideoList