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
    const stack: string[] = [];
    let operand = "";
    
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (c === "+" || c === "-") {
            if (!operand) {
                throw new Error(`invalid state: operator ${c} without a prior operand in ${s}`);
            }
            stack.push(operand);
            stack.push(c);
            operand = "";
        } else {
            operand += c;
        }
    }
    stack.push(operand);

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
