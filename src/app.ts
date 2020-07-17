interface Item { name: string; }

interface Artist extends Item { songs: number; }
// merging interfaces, which we can't do with types
interface Artist { getSongs(): number }

// instead of extend, we can use intersection type:
type Artist2 = { name: string } & Item;

const newArtist: Artist = {
    name: 'abc',
    songs: 5,
    getSongs(): number {
        return this.songs;
    }
}
