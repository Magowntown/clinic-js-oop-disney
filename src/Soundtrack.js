class Soundtrack {
    constructor(name, songs) {
        this.name = name
        this.songs = songs
    }

    addSong(newSong) {
        this.songs.push(newSong)
    }
    printSoundtrack() {
        let output = ""
        this.songs.forEach(element => {
            output += `${song.name}\n`
        });
        return output
    }
}

export default Soundtrack