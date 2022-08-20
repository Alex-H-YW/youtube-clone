import { isEmpty } from 'lodash';
import { Isnippet, Ivideos } from '../../interface/video'
import dayjs from 'dayjs';
import VideoList from '../VideoList';

interface SuggestProps {
  Suggest: Ivideos 
}

const SuggestVideos:React.FC<SuggestProps> = ({Suggest})=> {

    const SuggestSnippet:Isnippet = Suggest.map( (item: { snippet: Isnippet; }) => item.snippet)
    const Snippets = SuggestSnippet?.filter((i: Isnippet)=> !!i==true)
  console.log("Suggest", Suggest);
  
  return (
    <div className='pr-64' >
        {Snippets.map((item: Isnippet) => 
            <VideoList snippet={item}/>
        )               
        }     
    </div>
  )
}

export default SuggestVideos