class Foo { bar() {} }

const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
    constructor(public title: string, public duration: number) { }
}
class PlayList {
    constructor(public name: string, public songs: Song[]) { }
}

function getItemName(item: Song | PlayList) {
    if (item instanceof Song) {
        return item.title;
    }
    return item.name;
}


const songName = getItemName(new Song('Wonderful', 300000));
console.log('Song name: ', songName);

const playListName = getItemName(
    new PlayList('The Best Songs', [new Song('The Man', 70000)])
);

console.log('Playlist Name', playListName);
