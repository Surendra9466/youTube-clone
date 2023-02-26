import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const videoId = searchParam.get("v");
    useEffect(() => {
        dispatch(closeMenu());
    }, []);


    return (
        <div>
            <div className='px-5'>
                <iframe className='w-full' height="500" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage;