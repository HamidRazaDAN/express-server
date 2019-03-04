export default function equilateral(n: number) {
  console.log(`Print a equilateral with rows ${n}`);
  let pattern: string = "";
  for (let i: number = 1; i <= n; i++) {
    for (let j: number = n; j > i; j--) {
      pattern += " ";
    }

    for (let j: number = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
