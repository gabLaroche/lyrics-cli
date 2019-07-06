const axios = require('axios');

module.exports = async (artist, title) => {
    const results = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    return results.data.lyrics;
};