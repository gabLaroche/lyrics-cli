const menus = {
    main: `
    lyrics [command] <options>

    --version ............ show package version
    --help ............... show help menu for a command
    --song ............. Show lyrics of a song`,

    song: `
    lyrics song <options>

    --artist, -a ..... The desired artist
    --title, -t ...... The song title`,
}

module.exports = (args) => {
    const selectedMenu = args.help === 'song' ? menus.song : menus.main;

    console.log(selectedMenu);
};