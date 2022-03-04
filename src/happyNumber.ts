/**
 * https://leetcode.com/problems/happy-number/
 *
 * Neetcode: https://www.youtube.com/watch?v=ljz85bxOYJ0
 */
export function isHappy(n: number): boolean {
  let seen: any = {}

  while(!seen[n]) {
    seen[n] = true

    n = sumOfSquare2(n)

    if(n === 1) return true
  }
  
  return false
}

function sumOfSquare(num: number): number {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10
    digit = Math.pow(digit, 2)
    sum += digit

    num /= 10
  }

  return sum
}

function sumOfSquare2(num: number): number {
  let sum = 0;

  let temp = num.toString().split('')

  temp.forEach((n) => {
    sum += Math.pow(parseInt(n), 2)
  })

  return sum
}