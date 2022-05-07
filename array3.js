// 3. 특정 범위에 속하는 요소 찾기(배열 변경하기)
let arr = [5, 3, 8, 1];

let arr1 = [];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a <= arr[i] && b >= arr[i]) {
      arr1.push(arr[i]);
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr1);
