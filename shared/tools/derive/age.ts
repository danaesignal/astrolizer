export function age(key: string[]): string {
  let birthYear = parseInt(key[0].slice(0, 4));
  let currentYear = parseInt(key[1].slice(0, 4));

  return (1 + currentYear - birthYear).toString();
}
