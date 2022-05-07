// 2. 특정 범위에 속하는 요소 찾기

let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

let filtered = arr.filter((a) => {
  return a >= 1 && a < 4;
});

console.log(filtered);
console.log(arr);
