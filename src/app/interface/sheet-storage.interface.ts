const enum types {
    PEPS = 'PEPS',
    COSTOPROMEDIO = 'COSTO PROMEDIO',
}
export interface SheetStorage {
    _id: string;
    name: string;
    type: types;
    info: string[] | null;
}