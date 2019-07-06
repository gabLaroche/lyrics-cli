const ora = require('ora');
const getLyrics = require('../utils/lyrics');
const getHelp = require('./help');

module.exports = async (args) => {
    const spinner = ora().start();

    try {
        const artist = args.artist || args.a;
        const title = args.title || args.t;

        const lyrics = await getLyrics(encodeURI(artist), encodeURI(title));

        spinner.stop();

        console.log('-----------------------------------------------------------');
        console.log(`Lyrics for ${title} by ${artist}:`);
        console.log('-----------------------------------------------------------');
        console.log(lyrics);
        console.log('-----------------------------------------------------------');
    } catch (err) {
        spinner.stop();

        console.log('The artist or title was incorrect or missing');
        console.log(getHelp({_: [], help: 'song'}));
    }
}