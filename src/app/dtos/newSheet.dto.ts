enum types {
    'PEPS',
    'COSTO PROMEDIO',
}
export class NewSheetDto {
    name: string;
    type: types;

    constructor(name: string, type: types) {
        this.name = name;
        this.type = type;

    }
}
