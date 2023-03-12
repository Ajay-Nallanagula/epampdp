//https://dev.to/tomekbuszewski/facade-pattern-in-javascript-3on4

class Music {
    constructor() {
        this.albums = [
            { id: 1, title: "Song1" },
            { id: 2, title: "Song2" },
            { id: 3, title: "Song3" },
        ]
    }

    fetchAlbumById(id) {
        return this.albums.find(i => i.id === id)
    }
}

class Movie {
    constructor() {
        this.albums = [
            { id: 1, title: "Movie1" },
            { id: 2, title: "Movie2" },
            { id: 3, title: "Movie3" },
        ]
    }

    fetchMovieById(id) {
        return this.albums.find(i => i.id === id)
    }
}

const TVShows = (id) => {
    this.albums = [
        { id: 1, title: "TVShow1" },
        { id: 2, title: "TVShow2" },
        { id: 3, title: "TVShow3" },
    ]

    return this.albums.find(i => i.id === id)
}

class EntertainmentFacade {
    constructor() {
    }

    _findMusic(id) {
        return new Music().fetchAlbumById(id)
    }
    _findMovie(id) {
        return new Movie().fetchMovieById(id)
    }
    _findTvShows(id) {
        return TVShows(id)
    }

    get(id, type) {
        switch (type) {
            case "music":
                return this._findMusic(id)
            case "movie":
                return this._findMovie(id)
            case "tv":
                return this._findTvShows(id)
        }
    }

}

function main() {
    const enterFacade = new EntertainmentFacade()
    const result = enterFacade.get(1, "music")
    console.log(result)
}

main()