// 49. let, const
const userName = "Max";
// userName = 'Anna';
let age = 30;

age = 29;

var result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

console.log(result);

function add2(a: number, b: number) {
  let result2;
  result2 = a + b;
  return result2;
}

// console.log(result2); // let은 블록레벨 스코프이기 때문에 블록 외부에서 변수를 찾으려하면 에러가 발생한다.

// 50. 화살표 함수
const add3 = (a: number, b: number) => {
  return a + b;
};

console.log(add3(2, 5));

// 51. 기본값 함수 매개변수
const add4 = (a: number, b: number = 1) => a + b; // 표현식이 하나뿐인 경우 중괄호 생략 가능

console.log(add4(2, 5));

const printOutput = (output: string | number) => console.log(output);

printOutput(add4(5, 2));
printOutput("Hi!!");
printOutput(add4(5)); // 인수 b의 기본값이 1이므로 결과는 5+1 = 6

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// 52. 스프레드 연산자

const hobbies = ["Sports", "Cooking", "Waking", "Swimming"];
console.log(hobbies[0]);

const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies); // 배열의 요소를 추출

const person = {
  name2: "Max",
  age2: 30,
};

// const copiedPerson = person; // person 객체에 해당하는 포인터를 copiedPerson 상수로 복사

const copiedPerson = { ...person };
console.log(copiedPerson);

// 53. 나머지 매개변수
// 들어올 인수의 개수가 명확하다면 튜플 사용 가능 -> const add5 = (...numbers: [number, number, number])
const add5 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add5(5, 10, 2, 3.7);
console.log(addedNumbers);

// 54. 배열 및 객체 비구조화 할당
// 만약, hobbies 배열에서 두 항목을 추출해 변수나 상수에 저장하려는 경우에는 다음과 같이 작성할 수 있다.
// 하지만, 이 방법은 검색하려는 요소가 많을수록 라인 수가 늘어난다.
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// 구조분해는 원래의 배열을 바꾸지 않는다.
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(
  "hobbies: ",
  hobbies,
  "구조분해: ",
  hobby1,
  hobby2,
  remainingHobbies
);

// 객체도 동일
const { name2, age2 } = person;
