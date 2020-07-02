import { Note } from "../model/note";

const Column1Notes: Note[] = [
    { id: 1, contents: 'Everything\'s finished', order: 1, votes: 1, },
    { id: 2, contents: 'Good communication', order: 2, votes: 5, },
    { id: 3, contents: 'Time to self-development', order: 3, votes: 0, },
];

const Column2Notes: Note[] = [
    { id: 11, contents: 'Sign off stories earlier', order: 1, votes: 4, },
    { id: 12, contents: 'No more overtime', order: 2, votes: 5, },
];

const Column3Notes: Note[] = [
    { id: 21, contents: 'PM to provide some time to self-development', order: 1, votes: 1, },
    { id: 22, contents: 'Do not commit to not signed-off stories', order: 2, votes: 5, },
];

const Column11Notes: Note[] = [
    { id: 101, contents: 'Retro actions are happening', order: 1, votes: 3, },
    { id: 102, contents: 'Pizza party!', order: 2, votes: 7, },
];

const Column12Notes: Note[] = [
    { id: 111, contents: 'Write down all the assumptions', order: 1, votes: 2, },
    { id: 112, contents: 'Proof of concept first, commitment later!', order: 2, votes: 6, },
];

const Column13Notes: Note[] = [
    { id: 121, contents: 'Spend more time on refinement and PoCs', order: 1, votes: 10, },
];

export const NOTES = [
    { columnId: 1, notes: Column1Notes, },
    { columnId: 2, notes: Column2Notes, },
    { columnId: 3, notes: Column3Notes, },
    { columnId: 11, notes: Column11Notes, },
    { columnId: 12, notes: Column12Notes, },
    { columnId: 13, notes: Column13Notes, },
];
