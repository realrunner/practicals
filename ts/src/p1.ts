export function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  const reversedStr = s.split("").reverse().join("");
  return reversedStr === s;
}

export function reverseWordsInString(s: string): string {
  const reverseWord = s.split(" ").reverse();
  return reverseWord.join(" ");
}

export function doCalculation(s: string): number {
   const evalStr = eval(s)
  return evalStr;
}
