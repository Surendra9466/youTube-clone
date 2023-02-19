import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle } = snippet;

    return (
        <div className='p-2 m-2 w-[280px] shadow'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="video" />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;