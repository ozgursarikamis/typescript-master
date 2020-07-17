// const exists = 'localStorage' in window;
// for (const prop in [{}]) {}

const foo = 'bar'; // literal type

class Song {
    kind:'song'; // declaring only type of 'kind' as 'song'
    constructor(public title: string, public duration: number) { }
}
class PlayList {
    kind: 'playlist'; // declaring only type of 'kind' as 'playlist'
    constructor(public name: string, public songs: Song[]) { }
}

function isSong(item: any): item is Song { // explicitly declare the return type to not to get compile-time errors.
    return 'title' in item;
}

function getItemName(item: Song | PlayList) {
    // if (isSong(item)) {
    //     return (item as Song).title;
    // }
    if (item.kind === 'song') {
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
