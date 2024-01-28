// netlify/youtube-trailer.js
const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const { title, release_date } = JSON.parse(event.body);
    const releaseYear = release_date ? new Date(release_date).getFullYear() : '';

    // Your existing logic to fetch the YouTube trailer URL
    const searchQuery = encodeURIComponent(`${title} official trailer ${releaseYear}`);
    const apiKey = 'AIzaSyC7UEh4uRpo1slT7RB_BNlPMKAAsBQcuRQ'; // Use environment variables
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=${apiKey}`
    );

    const trailerVideoId = response.data.items[0]?.id.videoId;
    const trailerUrl = trailerVideoId ? `https://www.youtube.com/embed/${trailerVideoId}?autoplay=1` : '';

    return {
      statusCode: 200,
      body: JSON.stringify({ trailerUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
