
export enum HairColor {
    BLOND = "BLOND",
    BROWN = "BROWN",
    RED = "RED",
    BLACK = "BLACK",
    CHARTREUSE = "CHARTREUSE",
}

export interface Person {
    name: string;
    hairColor: HairColor;
    mother?: Person;
    father?: Person;
}
