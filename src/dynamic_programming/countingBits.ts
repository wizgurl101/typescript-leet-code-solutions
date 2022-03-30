// https://leetcode.com/problems/counting-bits/
export function countBits(n: number): number[] {
    let count: number[] = [];

    for(let i = 0; i < n + 1; i++) {
        count.push(0)
    }

    let offset = 1;

    for(let i = 0; i < n + 1; i++) {
        if (offset * 2 === i) {
            offset = i
        }

        count[i] = 1 + count[i - offset]
    }

    return count
};