/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 *
 * https://www.tutorialcup.com/leetcode-solutions/kids-with-the-greatest-number-of-candies-leetcode-solution.htm
 */

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result:Array<boolean> = [];
    
    let hightest:number = candies.reduce((accumulator:number, item:number) => {
        return item >= accumulator ? item : accumulator;
    })    

    candies.forEach((candyN) => {
        result.push((candyN + extraCandies) >= hightest);
    })
    return result;    
};