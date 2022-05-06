// https://leetcode.com/problems/backspace-string-compare/
// restriction solve in O(n) time and O(1) time
export const backspaceCompare = (s: string, t: string): boolean => {
  return false
};

// restriction solve in O(n) time and O(n) time
export const backspaceCompare_1 = (s: string, t: string): boolean => {
  let s_stack: string[] = []
  let t_stack: string[] = []

  for(let i = 0; i < s.length; i++) {
    if(s[i] === '#') {
      s_stack.pop()
    } else {
      s_stack.push(s[i])
    }
  }

  
  for(let i = 0; i < t.length; i++) {
    if(t[i] === '#') {
      t_stack.pop()
    } else {
      t_stack.push(t[i])
    }
  }

  return s_stack.toString() === t_stack.toString();
};