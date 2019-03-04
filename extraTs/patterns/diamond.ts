export default function diamond(n: number) {
  console.log(`Print a diamond with rows ${n}`);
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

  for (let i: number = n; i >= 1; i--) {
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
