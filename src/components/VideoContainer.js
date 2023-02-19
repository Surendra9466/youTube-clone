import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS } from '../utils/contants';
import VideoCard from './VideoCard';

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS);
    const data = await res.json();
    setVideos(data.items);
  }
  console.log(videos);


  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map((item)=>{
        return (
          <VideoCard info={item} key={item.id}/>
        )
      })}
    </div>
  )
}

export default VideoContainer;