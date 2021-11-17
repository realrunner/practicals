import { HairColor, Person } from "./models";

function ancestors(p: Person): Person[] {
    return [
        ...(p.father ? [p.father, ...ancestors(p.father)] : []),
        ...(p.mother ? [p.mother, ...ancestors(p.mother)] : []),
    ]
}

export function namesOfAncestors(p: Person): string[] {
    return ancestors(p).map(a => a.name);
}

export function mostCommonHairColorOfAncestors(p: Person): HairColor {
    const hairs = ancestors(p).map(a => a.hairColor);
    const histogram: {[key: string]: number} = {};
    hairs.forEach(h => {
        if (!histogram[h]) {
            histogram[h] = 0;
        }
        histogram[h] += 1;
    });
    

    const histoKeys = Object.keys(histogram) as HairColor[];
    let best: HairColor = histoKeys[0];
    for (const color of Object.keys(histogram)) {
        if (histogram[color] > histogram[best]) {
            best = color as HairColor;
        }
    }
    return best;
}
