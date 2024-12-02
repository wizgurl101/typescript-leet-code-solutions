export function sumTheStrings(a: string, b: string): string {
  if (a === '' && b === '') {
    return '0';
  }

  return (BigInt(a) + BigInt(b)).toString();
}
