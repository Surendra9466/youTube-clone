import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();
    const cachedData = useSelector(store => store.searchSlice);


    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 200)

        return () => {
            clearTimeout(timer);
        }
    }, [search]);

    const getSearchSuggestions = async () => {
        // console.log(cachedData);
        // console.log(!cachedData[search]);
        if (cachedData[search]) {
            setSearchResult(cachedData[search]);
        } else {
            const data = await fetch(YOUTUBE_SEARCH_API + search);
            const res = await data.json();
            setSearchResult(res[1]);
            let cachedResponse = {
                [search]: res[1]
            }
            // console.log(cachedResponse);
            dispatch(cacheResults(cachedResponse));
        }
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow sticky top-0 bg-white'>
            <div className='flex col-span-1 cursor-pointer'>
                <img
                    onClick={toggleMenuHandler}
                    className='h-8'
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" />
                <img className='h-8 mx-2' alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4gHI3mjZxIqea4KXjUNBgJwRjSlR8wAnbgwCtp1ynZjSS-Mf" />
            </div>
            <div className='col-span-10 px-5' >
                <div>
                    <input className='w-1/2 border border-gray-400 p-1 rounded-l-full px-5' type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border border-gray-400 p-1 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {searchResult.length > 0 && showSuggestion ?
                    (<div className='absolute bg-white px-3 py-2 w-[430px] shadow-lg rounded-lg border border-gray-100 '>
                        <ul>
                            {searchResult.map((item, index) => {
                                return <li key={index} className='py-2 px-2 shadow-sm hover:bg-gray-100 rounded-sm'>🔍 {item}</li>
                            })}
                        </ul>
                    </div>) : ''}

            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            </div>
        </div>
    )
}

export default Head;