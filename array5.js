// 5. 배열 복사본을 정렬하기

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  arr.slice();
  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(copySorted(arr));
console.log(arr);
