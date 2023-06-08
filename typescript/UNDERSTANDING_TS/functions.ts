function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log("Result: " + num); // 타입이 void일 경우 -> 함수 내에서 아무것도 반환하지 않음.
}

function printResult2(num: number): undefined {
  console.log("Result: " + num);
  return; // 타입이 undefined일 경우 -> 값을 반환하지 않는 반환문이 있어야 함.
}

console.log(printResult1(add(5, 12)));

let x: undefined;

// let combineValues: Function;

// combineValues = add;
// // combineValues = 5;

// console.log(combineValues(8, 8)); // 숫자형이 된 combineValues을 함수로 실행하려고 했기 때문에 에러 발생

// combineValues = printResult1;

// console.log(combineValues(8, 8)); // printResult1는 매개변수로 1개만 받고 있지만 여기서는 매개변수로 2개를 보내려고 하고 있기 때문에 원하는 값을 얻을 수 없음.

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult1; // error

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
