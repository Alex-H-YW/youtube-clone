import { isEmpty } from 'lodash';
import { Ivideos } from '../../interface/video'
import dayjs from 'dayjs';
import VideoList from '../VideoList';

interface SuggestProps {
  Suggest: Ivideos 
}

const SuggestVideos:React.FC<SuggestProps> = ({Suggest})=> {

    const SuggestSnippet = Suggest.map( item => item.snippet)
    const Snippets = SuggestSnippet?.filter(i=> !!i==true)
  console.log("Suggest", Suggest);
  
  return (
    <div className='pr-64' >
        {Snippets.map(item => 
            <VideoList snippet={item}/>
        )               
        }     
    </div>
  )
}

export default SuggestVideos