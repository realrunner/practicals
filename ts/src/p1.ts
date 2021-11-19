export function isPalindrome(s: string): boolean {
    s = s.toLocaleLowerCase();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

export function reverseWordsInString(s: string): string {
    return s.split(" ").reverse().join(" ");
}

export function doCalculation(s: string): number {
    const stack: string[] = s.split(/([+-])/g);
    while(stack.length >= 3) {
        const left = parseFloat(stack.shift());
        const op = stack.shift();
        const right = parseFloat(stack.shift());
        let res: number = 0;
        if (op === "+") {
            res = left + right;
        } else if (op === "-") {
            res = left - right;
        }
        stack.unshift(res + "");
    }
    return parseFloat(stack[0]);
}
