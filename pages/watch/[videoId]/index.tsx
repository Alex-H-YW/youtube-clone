import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  {useAppSelector, useAppDispatch}  from '../../../hooks/useRedux'
import { selectVideoDetailSate, getVideoDetailById } from '../../../store/slice/videoSlice'
import VideoDetailsInfo from '../../../components/VideoDetailsInfo'
import { isEmpty } from 'lodash';
import { Ivideo } from '../../../interface/video';
const VideoDetailPage = () => {
    const router = useRouter();
    const { videoId } = router.query
    const dispatch = useAppDispatch();
    const videoDetail = useAppSelector(selectVideoDetailSate);
    const [detailData, setDetailData ] = useState({});

    useEffect(()=>{
        dispatch(getVideoDetailById(videoId as string));
    },[])
    console.log("videoDetail", videoDetail);

    useEffect(()=>{
        setDetailData(videoDetail);
      },[videoDetail])
    
  return (
    <div>
      {
        !isEmpty(detailData) &&
        <VideoDetailsInfo detailData={detailData as Ivideo}/>
      }
       
    </div>
  )
}
export default VideoDetailPage;