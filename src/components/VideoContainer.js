import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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


  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map((item, index) => {
        return (
          <Link to={"/watch?v=" + item.id} key={index}>
            <VideoCard info={item} key={item.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer;