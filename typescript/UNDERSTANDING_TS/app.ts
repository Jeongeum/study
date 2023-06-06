// union 타입
// 함수가 받아들이는 요소를 보다 유연하게 바꿔보자.
// 입력값을 유연하게 처리할 것이다.
// 서로 다른 두 종류의 값을 사용해야 하는 애플리케이션에서 함수나 상수 혹은 변수의 매개변수를 사용해야 한다면 유니언 타입을 사용해 타입스크립트에게 숫자나 문자열 중 하나를 사용해도 괜찮다는 것을 알릴 수 있다.

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
