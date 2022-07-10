import type { NextPage } from 'next'
import Header from './layouts/Header'
import PageHead from './layouts/PageHead'
//import { getSuggestedVideos, getPlaylistVideos } from '../services/videos'
import { useEffect } from 'react'
import Video from '../components/Video'
import { getVideos,selectVideosState } from '../store/slice/videoSlice'
import  {useAppSelector, useAppDispatch}  from '../hooks/useRedux'
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { Ivideo } from "../interface/video"
 const Home:NextPage = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector(selectVideosState);
  const [videosData, setVideosData] = useState< any[]|undefined>();

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/videos',
//   params: {part: 'contentDetails,snippet,statistics', id: '7ghhRHRP6t4'},
//   headers: {
//     'X-RapidAPI-Key': 'cc11434ae5msh2983f73c1f648d1p12d45ejsn1b01dcddd524',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
  useEffect(()=>{
  //axios.request(options).then((res=>console.log("res",res)));

    setVideosData(videos)
    dispatch(getVideos());
  },[])
  
  useEffect(()=>{
    setVideosData(videos);
  },[videos])

  return (
    <div className='relative h-screen'>
      <PageHead />
      <Header />
      <main className="relative pt-20 p-20 md:p-20 lg:p-32 ">
       
        <section>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
            {videosData?.map((video, index)=>(
              !isEmpty(video.snippet) && (
                <div>
                <Video video={video as Ivideo} />
              </div>
              )   
            ))}
          </div>
          

        </section>

      </main>
    </div>
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const paramArr = [
//     getSuggestedVideos(),
//     getPlaylistVideos(),
//   ];
//   const result = await Promise.all([paramArr]);
//   console.log("result",result);
  



//   return {
//     props: {
//       result
//     },
//   }
// }