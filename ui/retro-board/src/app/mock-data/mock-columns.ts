import { Column } from '../model/column';

const Board1Columns: Column[] = [
    { id: 3, name: 'Action items Sprint 67', order: 3, },
    { id: 1, name: 'Went well Sprint 67', order: 1, },
    { id: 2, name: 'To improve Sprint 67', order: 2, },
];

const Board2Columns: Column[] = [
    { id: 13, name: 'Action items Sprint 68', order: 3, },
    { id: 12, name: 'To improve Sprint 68', order: 2, },
    { id: 11, name: 'Went well Sprint 68', order: 1, },
];

export const COLUMNS = [
    { boardId: 1, columns: Board1Columns, },
    { boardId: 2, columns: Board2Columns, },
];
