import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid'
import { Ivideo} from "../../interface/video"
interface DetailsInfoProps {
    detailData: Ivideo
}
const VideoDetailsInfo: React.FC<DetailsInfoProps> = ({detailData}) => {
    const {snippet, statistics } = detailData
    console.log("statistics",statistics);
    
  return (
    <div>
        <div className='flex flex-col'>
            <h5>v title</h5>
            <div className='flex justify-center justify-around'>
                <span>
                    {statistics?.viewCount}{' '}{'views'}
                    7 months ago
                </span>
            </div>
            <div className='flex items-center justify-center'>
                <ThumbUpIcon className='h-6 w-6'/>
                <span>{statistics?.likeCount}</span>
                <ThumbDownIcon className='h-6 w-6'/>{0}
            </div>
        </div>
        <div>
            channel
        </div>
        <div>
            description
        </div>
    </div>
  )
}
export default VideoDetailsInfo;