import { HairColor, Person } from "./models";
import { mostCommonHairColorOfAncestors, namesOfAncestors } from "./p2";

test("names of ancestors", () => {
    const person = makeFamilyTree();
    const names = namesOfAncestors(person);
    expect(names).toContain("Kim Kimetto");
    expect(names).toContain("Pat Tergat");
    expect(names).toContain("Sue Guerrouj");
});

test("most common hair color", () => {
    const person = makeFamilyTree();
    expect(mostCommonHairColorOfAncestors(person)).toEqual(HairColor.BROWN);
});

function makeFamilyTree(): Person {
    const lastNames = ["Kiplagat", "Guerrouj", "Kimetto", "Kipsang", "Gebrselassie", "Tergat"];
    const firstNames = ["Sue", "Courtney", "Jan", "Ashley", "Pat", "Kim"];

    const nextHairColor = (function*() {
        let i = 0;
        const hKeys = Object.keys(HairColor);
        while(true) {
            yield HairColor[hKeys[i]] as HairColor;
            i += 1;
            if (i >= hKeys.length) {
                i = 0;
            }
        }
    })();
    

    const people: Person[] = [];
    for (const lname of lastNames) {
        for (const fname of firstNames) {
            const p: Person = {
                name: `${fname} ${lname}`,
                hairColor: nextHairColor.next().value,
            }
        }
    }

    const children = [...people];
    for (let i=1; (i + 1) < people.length; i += 2) {
        const child = children.shift();
        const mother = people[i];
        const father = people[i + 1];
        child.mother = mother;
        child.father = father;
    }

    return people[0];
}
