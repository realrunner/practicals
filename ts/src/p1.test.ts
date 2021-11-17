import { doCalculation, isPalindrome, reverseWordsInString } from "./p1";

test("palindrome", () => {
    expect(isPalindrome("abcdedcba")).toEqual("true");
    expect(isPalindrome("Hannah")).toEqual("true");
    expect(isPalindrome("racecar")).toEqual("true");
    expect(isPalindrome("Able was I ere I saw Elba")).toEqual("true");
    expect(isPalindrome("Hannahash")).toEqual("false");
    expect(isPalindrome("Not a Palindrome")).toEqual("false");
});

test("reverse word in string", () => {
    expect(reverseWordsInString("phil is name my Hello")).toEqual("Hello my name is phil");
    expect(reverseWordsInString("shins my kicking stop George,")).toEqual("George, stop kicking my shins");
    expect(reverseWordsInString("Strings-with-hyphens-are-still-one-word")).toEqual("Strings-with-hyphens-are-still-one-word");
    expect(reverseWordsInString("?  spaces  Two")).toEqual("Two  spaces  ?");
});

test("calculator", () => {
    expect(doCalculation("1+1")).toEqual(2);
    expect(doCalculation("1+1+1+1")).toEqual(4);
    expect(doCalculation("1+3-1")).toEqual(3);
    expect(doCalculation("1-1+2")).toEqual(2);
    expect(doCalculation("1-1+2+3+4+5-3-5-2+2-2+3")).toEqual(7);
});
