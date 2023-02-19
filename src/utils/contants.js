const GOOGLE_API_KEY = "AIzaSyDQdZ6ovUGvkfV6lQpTbndzJKvrvtBiddI";

export const YOUTUBE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;