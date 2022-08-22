import Header from './layouts/Header'
import PageHead from './layouts/PageHead'
import { getSuggestedVideos, getPlaylistVideos } from '../services/videos'
import Video from '../components/Video'
import { isEmpty } from 'lodash';
import { Ivideo, Ivideos } from "../interface/video"
import { Key } from 'react';

interface HomeProps {
	videos: Ivideos
}

 const Home: React.FC<HomeProps> = ({videos}) => {
  return (
    <div className='relative h-screen'>
      <PageHead />
      <Header />
      <main className="relative pt-20 p-20 md:p-20 lg:p-32 ">
        <section>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
            {videos?.map((video: Ivideo, index: Key)=>(
              !isEmpty(video.snippet) && (
                <div key={index} >
                  <Video video={video} />
                </div>
              )   
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}


export const getServerSideProps = async () => {
  // const paramArr = [
  //   getSuggestedVideos(),
  //   getPlaylistVideos(),
  // ];
  const result = await getPlaylistVideos();
  const { items } = result


  return {
    props: {
      videos: items
    },
  }
}

export default Home