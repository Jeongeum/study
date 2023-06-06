function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("incorrect input!");
  // }
  const result = n1 + n2; // 아래의 문제를 해결하기 위해 숫자형의 연산 결과를 따로 변수에 저장
  if (showResult) {
    console.log(phrase + result); // 이것은 문자열과 함께 계산되지 않으므로 항상 숫자형으로 인식
    console.log(phrase + n1 + n2); // 문자형 + 숫자형 = 모두 문자열로 인식
  } else {
    return result;
  }
}

const number1 = 5;
let number11 = 5;
let number111: number = 5;
let number22; // 이 경우에는 타입을 지정해준다.
let number222: number;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
// resultPhrase = 0; // 이미 resultPhrase의 타입을 문자열로 추론했는데 숫자를 저장하려고 시도하니까 에러발생
add(number1, number2, printResult, resultPhrase);
