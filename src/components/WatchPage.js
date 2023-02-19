import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleMenu());
    }, []);
    return (
        <div>WatchPage</div>
    )
}

export default WatchPage;