import { useRouter } from 'next/router';
import { getSeatchVideos } from '../../services/videos'
import { useEffect, useState } from 'react';
import axios
 from 'axios';
import { isEmpty } from 'lodash';
const index:React.FC = ()=> {
    const router = useRouter();
    const {q} = router.query;
    const [searchVideo, setSearchVideo] = useState()
  
  useEffect(()=>{
    if(!isEmpty(q)){
      const fetchSearch = async()=> {
        const result = await getSeatchVideos(q as string);
        setSearchVideo(result.items);
      }
      fetchSearch();
    }
    
  },[q])
console.log(searchVideo);
const snippet = searchVideo?.map(item=>item.snippet);
console.log(snippet);


  return (
    <div>
      
    </div>
  )
}

export default index