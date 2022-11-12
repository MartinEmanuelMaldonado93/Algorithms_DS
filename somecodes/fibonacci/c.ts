function fib(n: number, memo: Map<number, number>) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  if (n <= 2) return 1;

  let res = fib(n - 1, memo)! + fib(n - 2, memo)!;
  memo.set(n, res);

  return memo.get(n);
}

console.log(fib(8, new Map()));
