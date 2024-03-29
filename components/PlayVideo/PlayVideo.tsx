import React from 'react'
import { Isnippet } from '../../interface/video'

interface PlayVideoProps {
    videoId: string,
    snippet: Isnippet
}

const PlayVideo:React.FC<PlayVideoProps> = ({ videoId, snippet }) => {
  return (
    <div className=' w-11/12 lg:pr-8'>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder='0'
            title={snippet?.title}
            allowFullScreen
            width='100%'
            height='700px'>
        </iframe>
    </div>
  )
}

export default PlayVideo