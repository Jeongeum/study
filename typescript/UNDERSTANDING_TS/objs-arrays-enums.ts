// object
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// console.log(person);
// console.log(person.name);

let favoriteActivites: string[];
favoriteActivites = ["Sports2"];
// favoriteActivites = ['Sports2', 1] // error -> 배열은 string 타입만 작성할 수 있는데 숫자형이 섞임. any 타입으로 해결해야함

let favoriteActivites2: any[]; // any타입은 자주 사용할 타입은 x
favoriteActivites2 = ["Sports2", 1];

// for (const hobby of person.hobbies) {
//   console.log(hobby);
//   console.log(hobby.toUpperCase()); // 에러가 나지 않는 이유 : person.hobbies는 문자열 배열타입이고, hobby는 문자열 배열에 속한 문자열이기 때문!
// }

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "good"];
// person.role = [0, 'good', 100];

// enum
// 0은 관리자, 1은 사용자, 2는 작성자라고 표시하고 싶을 때
// role: READ_ONLY_USER 인지, READ ONLY USER인지 외우기 어려울 수 있고, 0이 관리자인지 1이 관리자인지 헷갈릴 수 있다.
// 보통 자바스크립트의 경우, 다음과 같이 작성하는 경우가 많다. (숫자가 메모리 점유 적음)
// 단점은 role이 숫자로 추론되었다는 것이다. 입력하지 않은 숫자를 포함해 모든 숫자가 저장된다.

// const ADMIN = 0;
// const READ_ONLY_USER = 1;
// const AUTHOR = 2;

// 이 문제를 enum으로 해결할 수 있다.
// 이렇게 작성하면 알아서 ADMIN에는 0, READ_ONLY_USER에는 1 이런식으로 할당이 된다.
// 그리고 접근은 Role.ADMIN으로 하면 식별자에 접근하게 되고 코드의 어디서든 사용할 수 있다.
// 숫자를 인간이 읽을 수 있는 방식으로 사용할 수 있게 된다.
enum Role {
  ADMIN,
  READ_ONLY_USER,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

// any의 단점 : 타입스크립트가 주는 모든 장점을 any가 상쇄
let favoriteArray: any[];
favoriteArray = ["Sports2", 10];
