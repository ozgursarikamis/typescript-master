interface IArtist {
    name: string;
}

class ArtistCreator implements IArtist {
    constructor(public name: string) { }    // <-- Artist interface satisfied.
}

function artistFactory({ name }: ArtistCreator) {
    return new ArtistCreator(name);
}

artistFactory({ name: 'Todd' });
