const menus = {
    main: `
    lyrics [command] <options>

    --help, -h ............... Show help menu for a command
    --version, -v ............ Show package version
    song <options> ........... Show lyrics of a song`,

    song: `
    lyrics song <options>

    --artist, -a ..... The desired artist
    --title, -t ...... The song title`,
}

module.exports = (args) => {
    const selectedMenu = args.help === 'song' ? menus.song : menus.main;

    console.log(selectedMenu);
};