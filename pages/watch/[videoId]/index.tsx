import { useRouter } from 'next/router';
import VideoDetailsInfo from '../../../components/VideoInfo';
import { isEmpty } from 'lodash';
import { Ivideo } from '../../../interface/video';
import {  IComments } from '../../../interface/comments';
import { getVideoDetail, getVideoComments } from '../../../services/videos';
import Comments from '../../../components/Comments';
import PlayVideo from '../../../components/PlayVideo';
import PageHead from '../../layouts/PageHead'
import Header from '../../layouts/Header'
interface VideoDetailProps {
  VideoDetail: Ivideo,
  VideoComments: IComments

}
const VideoDetailPage: React.FC<VideoDetailProps> = ({VideoDetail, VideoComments}) => {
     const router = useRouter();
     const {videoId} = router.query;
     console.log("id",videoId);
     const { snippet } = VideoDetail
  
    
  return (
    <>
      <PageHead />
      <Header />
      {
        !isEmpty(videoId) && !isEmpty(snippet) &&
        <PlayVideo videoId={videoId as string} snippet={snippet} />
      }
      {
        !isEmpty(VideoDetail) &&
        <VideoDetailsInfo VideoDetail={VideoDetail}  />
      }
      {
        !isEmpty(VideoComments)&& 
        <Comments VideoComments={VideoComments}/>

      }
        

      
       
    </>
  )
}

export const getServerSideProps = async (context: { query: { videoId: any; }; }) => {
  const { videoId } = context.query;
  const paramsArr = [
    getVideoDetail(videoId as string),
    getVideoComments(videoId as string),
  ];

  const result = await Promise.all(paramsArr);
  const [VideoDetail, VideoComments] = result;

  return {
    props: {
      VideoDetail: VideoDetail.items[0],
      VideoComments: VideoComments.items
    },
  }
}
export default VideoDetailPage;