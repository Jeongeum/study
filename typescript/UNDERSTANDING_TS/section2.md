## 11. Using Types

```ts
function add(n1, n2) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); // number1이 숫자가 아닌 문자이기 때문에 덧셈이 아닌 문자 붙이기가 되어 52.8이 된다.
```

자바스크립트로 작성 시, 원하는 답이 아님에도 에러가 발생하지 않는다.

원하는 답은 수학적 방식으로 처리하는 것이었지만 실수로 인해 문자열로 처리가 되어 7.8이 아닌 52.8이라는 답이 나오고 있다.

이러한 에러는 발생할 수 있지만 찾아내기가 어려울 수 있다.
이럴 때 타입스크립트가 유용하다.

매개변수의 뒤에 :number 붙이면 해당 매개변수의 타입이 number임을 명시하게 된다.

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

이제 위의 예제는 새로운 에러를 발생시킨다. 에러가 발생한 이유는 두 매개변수는 number로 명시해 주었는데 number1은 문자열로 할당되었기 때문이다.
이때 이 에러는 에러가 발생한다고 해서 컴파일을 차단하지 않는다.
컴파일은 에러가 있는 코드 그대로 하되 에러를 지적하는 빨간줄을 통해 실수가 발생한 부분을 알려준다. 이것이 타입스크립트의 기능 중 하나이다.

## 12.

자바스크립트에 내장된 메서드인 `typeof` 는 타입이 뭔지 알려준다.

```ts
function add(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("incorrect input!");
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

타입스크립트적이지 않은 방식으로 문자열로 함수를 호출할 수 없게 하는 코드를 작성해보았다.

결과는 에러가 발생한다. 하지만 이는 미리 예방될 수 있었던 사항이다.

여기서 타입스크립트와 자바스크립트의 차이가 드러나는데,

**자바스크립트** : 동적타입. 즉, 나중에 문자열을 할당할 때 처음에 숫자형을 잡아둘 수 있는 변수가 있더라도 전혀 문제가 없다. 그래서 특정 타입에 의존하는 코드가 있는 경우, 런타임에서 무언가의 현재 타입을 확인할 수 있게 해주는 typeof 연산자를 사용하는 것이다.

**타입스크립트** : 정적타입. 즉, 개발 도중에 끝나는 변수와 매개변수의 타입을 정의한다. 런타임 중에 갑자기 변경되지는 않는다. 물론 타입스크립트는 자바스크립트로 컴파일되기 때문에 이론적으로는 그럴 수 있지만 타입스크립트를 사용하여 갑자기 새로운 유형의 데이터를 예를들어, 숫자형이어야한다고 설정했던 변수에 할당하는 코드를 작성하고 문자열을 할당하면 개발 도중에 에러가 발생하므로 어떤 타입을 보유할 수 있는지 여부를 명확히 할 수 밖에 없다.

따라서 타입스크립트를 사용하여 이런 문제를 방지할 수 있다면 위와 같은 구현이나 솔루션을 사용하지 말아야 한다.

## 14

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2; // 아래의 문제를 해결하기 위해 숫자형의 연산 결과를 따로 변수에 저장
  if (showResult) {
    console.log(phrase + result); // 이것은 문자열과 함께 계산되지 않으므로 항상 숫자형으로 인식
    console.log(phrase + n1 + n2); // 문자형 + 숫자형 = 모두 문자열로 인식
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
```

## 15. 타입 할당 및 타입 추론하기

위의 예제에서 왜 어떤 부분은 타입을 지정하고 어떤 부분은 타입을 지정해주지 않았을까?

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string);

// ...

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
```

타입스크립트는 타입 추론이라는 내장 기능을 활용하기 때문이다.
즉, 특정 변수나 상수에 어떤 타입을 사용했는지를 타입스크립트는 잘 이해하는 것이다.

```js
const number1 = 5;
```

여기에서는 number1 상수에 5라는 숫자를 설정했기 때문에 타입스크립트는 number1을 아무 숫자가 아닌 항상 숫자형이라고 이해한다. (상수는 다른 숫자나 값을 할당할 수 없으니 5라는 값이 유일함.)

const가 아닌 let으로 작성하더라도 여전히 타입을 숫자형으로 감지한다.

위와 같이 타입을 추론할 수도 있지만 직접 작성해줄 수도 있는데

```ts
let number11 = 5;
let number111: number = 5;
```

함수의 매개변수에서 작성한 것과 같이 `:타입`의 형태로 작성한다.

그런데 이것은 좋은 작업방식이 아니다!

타입스크립트가 이 타입을 완벽히 추론할 수 있기 때문에 값을 지정해주는건 좋은 방법이 아니다.

```ts
let number22; // 이 경우에는 타입을 지정해준다.
let number222: number;
```

다만, 변수에 값을 할당해주지 않았을 경우에는 나중에 변수에 어떤 값을 저장할지 타입스크립트에게 알려주기 위해 미리 타입을 지정해주는게 좋다.

## 16. 객체 형태

```js
const person = {
  name: "Maximilian",
  age: 30,
};
```

자바스크립트에서 보았던 객체 형태는 위와 같다.

![image](https://github.com/Jeongeum/test/assets/77143425/86b94e28-feb9-452c-9dbb-cd04ba7fed36)
그런데 여기에 존재하지 않는 nickname이라는 속성을 보고자 한다면 타입스크립트에서는 즉시 에러를 표시해준다. 저장한 다음 컴파일을 시도해도 동일한 에러가 표시된다.

```text
app.ts:8:20 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.

8 console.log(person.nickname);
```

그럼 타입스크립트는 다음과 같이 타입을 추론한다.

person에 마우스 커서를 올리면 person에 :가 붙은 것을 볼 수 있는데

```ts
const person: {
  name: string;
  age: number;
};

const person = {
  name: "Maximilian",
  age: 30,
};
```

안의 내용이 person에 저장된 데이터의 타입이라고 추론하게 된다.
좀 더 구체적인 객체가 되는 것!

person 객체는 name 키가 string 타입이어야 하고, age 키가 number 타입이어야 한다.

이 모습이 자바스크립트 객체처럼 보이지만, 자바스크립트 객체와 비교해보면 확연히 다른 것을 알 수 있다. 자바스크립트에서는 name 속성뒤에 ,(쉼표)가 붙지만 타입을 추론할 때에는 쉼표가 붙지 않는다. 그러므로 이는 자바스크립트의 객체와 다르고 **타입스크립트가 추론한 객체 타입**임을 알 수 있다.

person 객체에 추론이 아니라 타입을 명시해보자.

그냥 object 또는 {} 라고 적어주면 될 것 같았는데 에러가 발생한다.

```ts
// object
const person: object = {
  name: "Maximilian",
  age: 30,
};

console.log(person);
console.log(person.name); // error
```

이유는, 아까 위에서 본 것처럼 person 타입인 object에 각 속성들에 대한 타입을 또 정해줘야하기 때문이다.

```ts
// object
const person: {
  name: string;
  age: number;
} = {
  name: "Maximilian",
  age: 30,
};

console.log(person);
console.log(person.name);
```

그런데 이처럼 타입스크립트를 명시적으로 지정하는 것은 좋은 방식이 아니다.
타입스크립트가 객체 타입을 이해하게 하려면

```ts
const person = {
  name: "Maximilian",
  age: 30,
};
```

이런식으로 타입스크립트를 이해시키는 게 좋다.

## 17. 중첩된 개체 및 타입

```js
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
```

위와 같은 자바스크립트 객체가 있다고 가정할 때, 객체의 타입은 다음과 같다.

```js
{
  id: string;
  price: number;
  tags: string[];
  details: { // 객체 타입 안에 객체 타입 존재
    title: string;
    description: string;
  }
}
```

따라서 객체 타입 안에 객체 타입이 있다고 말할 수 있다.

## 18. 배열 타입

```ts
const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

console.log(person);
console.log(person.name);
```

이번에는 객체에 배열을 추가해보자.

그 후, hobbies에 커서를 올려보면 **(property) hobbies: string[]** 라고 표시된다. 타입스크립트가 hobbies 키를 가진 배열 내 값들을 보고 타입을 추론한 것이다.

```ts
let favoriteActivites: string[];
favoriteActivites = ["Sports2"];
// favoriteActivites = ['Sports2', 1] // error -> 배열은 string 타입만 작성할 수 있는데 숫자형이 섞임. any 타입으로 해결해야함

let favoriteActivites2: any[]; // any타입은 자주 사용할 타입은 x
favoriteActivites2 = ["Sports2", 1];

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase()); // 에러가 나지 않는 이유 : person.hobbies는 문자열 배열타입이고, hobby는 문자열 배열에 속한 문자열이기 때문!
}
```

배열에 타입을 지정해줄 때에는 타입[] 이라고 작성한다.
첫번째 예시처럼 string[] 이라고 타입을 지정해준 favoriteActivites에는 문자열 값이 할당될 수 있다. 하지만, 숫자형은 문자열 배열에 섞일 수 없기 때문에 에러가 발생한다.

이럴때에는 다양한 타입을 하나의 배열에서 적을 수 있도록 any 타입으로 작성해준다.
하지만 이 타입은 자주 사용하지 않는다.
타입스크립트에서 자동으로 타입을 추론해주는 좋은 기능을 방해하기 때문이다.

## 19. 튜플 작업하기

튜플 : 타입과 길이가 고정된 배열

```ts
const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;
```

role의 첫번째 요소는 숫자, 두번째 요소는 문자열이었으면 좋겠다고 가정할 때,
정확히 타입을 명시해주지 않으면 role은 number | string 이기 때문에 얼마든지 내용을 추가하고 타입을 바꿔도 타입스크립트는 알아차리지 못한다.

각 자리에 맞게 타입을 지정해주고 싶을 때에는 튜플을 사용해야 한다. role의 타입을 명시적으로 설정함으로써 타입스크립트에게 인식을 시켜주는 것이다.

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10; // error => 첫번째 요소는 문자열만 가능한데 숫자를 넣으려고 하고 있으니 에러
```

그런데 2개의 값만 들어갈 수 있다면서 push는 왜 되는걸까?
푸시는 예외적으로 튜플에서 허용되기 때문에 타입스크립트가 이런 에러를 잡을 수는 없다.

길이에 대해서는 지원 기능을 사용할 수 있다.

```ts
person.role = []; // error
person.role = [0, "good"];
person.role = [0, "good", 100]; // error
```

위에서 이미 첫번째 요소는 숫자, 두번째 요소는 문자열 총 길이 2의 튜플을 만들었기 때문에 세번째 요소를 넣으려고 하면 에러가 발생한다. 배열에 정확히 n개의 값이 필요하다고 각 값의 타입을 미리 알고 있는 상황에서는 배열보다 튜플을 사용하면 작업 중인 데이터 타입과 예상되는 데이터 타입을 보다 명확하게 파악할 수 있다.

## 20. 열거형으로 작업하기

예를들어 위의 person객체에서 각 사람들을 0은 관리자, 1은 사용자, 2는 작성자라고 표시하고 싶을 때 어떻게 해야할까?

role이 READ_ONLY_USER 인지, READ ONLY USER인지 외우기 어려울 수 있고, 0이 관리자인지 1이 관리자인지 헷갈릴 수 있다.

보통 자바스크립트의 경우, 다음과 같이 작성하는 경우가 많다. (숫자가 메모리 점유 적음)

```ts
const ADMIN = 0;
const READ_ONLY_USER = 1;
const AUTHOR = 2;

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ADMIN,
};

if (person.role === ADMIN) {
  console.log("is admin");
}
```

그런데 여기서 단점은 role이 숫자로 추론되었다는 것이다. 입력하지 않은 숫자를 포함해 모든 숫자가 저장된다. 이 문제를 enum으로 해결할 수 있다.

```ts
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
```

이렇게 작성하면 알아서 ADMIN에는 0, READ_ONLY_USER에는 1 이런식으로 할당이 된다.
그리고 접근은 Role.ADMIN으로 하면 식별자에 접근하게 되고 코드의 어디서든 사용할 수 있다.

![image](https://github.com/Jeongeum/test/assets/77143425/e8976555-cded-44aa-b72c-ac94772feb8a)

![image](https://github.com/Jeongeum/test/assets/77143425/6066a883-07a4-4334-93bc-a90baa60c298)
중요한 점은 이 모든 작업을 **라벨을 숫자로 할당**하게 해주는 enum으로 수행했다는 것이다.

enum의 경우, 기본 동작에 국한되지 않는다.
지금과 같이 시작 숫자를 0으로 할 수도 있고,

```ts
enum Role {
  ADMIN,
  READ_ONLY_USER,
  AUTHOR,
}
```

시작 숫자를 지정해줄 수도 있다. 이러면 그 뒤의 다음 식별자들은 1씩 증가한 값을 가지게 된다.

```ts
enum Role {
  ADMIN = 5,
  READ_ONLY_USER,
  AUTHOR,
}
```

혹은, 모든 식별자에 숫자를 지정할 수도 있다.

```ts
enum Role {
  ADMIN = 5,
  READ_ONLY_USER = 100,
  AUTHOR = 30,
}
```

다음과 같이 문자열을 할당할 수도 있고 숫자와 문자열을 혼합할 수도 있다.

```ts
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY_USER = 100,
  AUTHOR = 30,
}
```

if 검사에 활용하거나 타입 배정에 활용해도 좋다!

## 21. Any 타입

any 타입 : 가장 유연하고 타입스크립트에게 어떤 것도 이해시키지 않는다. 모든 종류의 값을 저장할 수 있다.

```ts
let favoriteArray: any[];
favoriteArray = ["Sports2", 10];
```

**any의 단점**

- 타입스크립트가 주는 모든 장점을 any가 상쇄시켜 바닐라 자스를 쓰는 것과 다름없게 된다.
- any 타입을 사용하는 모든 위치에서는 타입스크립트 컴파일러가 작동을 하지 않는다.

**any 사용**
어떤 값이나 종류의 데이터가 어디에 저장될지 전혀 알 수 없는 경우에 대비하거나 런타임 검사를 수행하는 경우 런타임 도중 특정 값에 수행하고자 하는 작업의 범위를 좁히기 위해서만 사용한다.

## 22. 조합 타입

```ts
function combine(input1: number, input2: number) {
  const result = input1 + input2;

  return result;
}

const combinedAges = combine(30, 26); // 그렇다고 combine의 매개변수 타입을 string으로 바꾸면 여기서 에러 발생
console.log(combinedAges);

const combinedNames = combine("Max", "Anna"); // error -> 숫자만 가능하기 때문에
```

여러 타입을 조합하고 싶을 때에는 다음과 같이 작성한다.

```ts
// 변경 전
function combine(input1: number, input2: number);

// 변경 후
function combine(input1: number | string, input2: number | string);
```

하지만, 이렇게 작성하면 result에서 에러가 발생한다. 타입을 정해주긴 했지만, 타입스크립트 입장에서는 그저 여러 타입이 입력되었으니 + 연산자를 사용하지 못하는 타입도 있을 것이라고 판단하기 때문이다.

해결 방법으로는 런타임 타입 검사를 추가하여 input1과 input2가 모두 숫자인지를 판별하도록 한다.

```ts
let result;
if (typeof input1 === "number" && typeof input2 === "number") {
  result = input1 + input2;
} else {
  result = input1.toString() + input2.toString();
}
```

숫자라면 더해주고 숫자가 아니라면 문자열로 변환하여 연결한다. 이러면 타입스크립트와 자바스크립트에서 모두 문제가 발생하지 않는다.
