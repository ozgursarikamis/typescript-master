// let dictionary: { [key: string]: any } = { } 

// a bit more dynamic:
let dictionary: Record<string, typeof item> = { } 

interface TrackStates {
    current: string;
    next: string;
}

// const item: Record<'current' | 'next', string> = {
//     current: '899u676t76t',
//     next: '545rftfr665',
// }
const item: Record<keyof TrackStates, string> = {
    current: '899u676t76t',
    next: '545rftfr665',
}

// numbers are coerced to String
dictionary[0] = item;