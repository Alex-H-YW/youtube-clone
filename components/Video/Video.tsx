import { useEffect, useState } from "react"
import { Ivideo } from "../../interface/video"
import { isEmpty } from 'lodash';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';

interface VideoProps {
	video: Ivideo;
}

const Video: React.FC<VideoProps> = ({ video }) => {  
    dayjs.extend(relativeTime);
    const [snippetValue, setsnippetValue] = useState<any>({});
    const router = useRouter();

    useEffect(()=>{
        if(!isEmpty(video?.snippet)){
            setsnippetValue(video.snippet)
        }  
    }
    ,[video, snippetValue]);

    const handleVideoClick = () => {
        router.push(`/watch/${snippetValue.resourceId.videoId}`)

    };

  return (
    <div>
    { 
        !isEmpty(snippetValue) && (
            <div className='cursor-pointer' onClick={handleVideoClick} data-testid ="video">
            <div className='relative'>
                <img className='w-full' src={snippetValue?.thumbnails?.standard?.url} alt=''/>
                <span className='absolute bottom-0.5 right-1 text-white text-sm px-1 bg-black'>05:43</span>
            </div>
            <div className="line-clamp-1">
                {snippetValue.title}
            </div>
            <div className="text-gray-500 text-xs">
                <p>{snippetValue.channelTitle}</p> 
            </div>
            <div >
                <span className='flex text-gray-500 text-xs'>
                    <span>{dayjs(snippetValue.publishedAt).fromNow()}</span>
                </span>
            </div>
        </div>
        ) 

    }
        
    </div>   
  )
}
export default Video;