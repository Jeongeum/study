let userInput1: unknown; // any와는 다른 타입, 어떤 사용자가 무엇을 입력할지 알 수 없기 때문에 사용하는 타입. (숫자일지 문자열일지 등..)
let userInput2: any;
let userName: string;

// 에러 발생 없이 어떤 값이든 저장할 수 있다. (여기까지는 any 타입이어도 가능)
userInput1 = 5;
userInput1 = "Max";
// userName = userInput1; // userName을 string 타입으로 지정했다 하더라도 unknown은 문자열로 인식되지 않는다.
userName = userInput2; // any로 타입을 바꾸면 any는 아주 유연하고 타입 확인을 수행하지 않게 하기 때문에 에러가 발생하지 않는다.

// unknown은 좀 더 제한적인 타입. 이를 사용할 경우, unserInput1에 현재 저장된 타입을 확인해야 문자열을 원하는 변수에 할당할 수 있다. 따라서 여기서 문자열이 필요하면 추가적인 타입 검사가 필요하다.

if (typeof userInput1 === "string") {
  userName = userInput1;
}

// unknown이 any보다 나은 이유 : 할 수 없는 작업을 알 수 있도록 타입 검사를 수행할 수 있기 때문이다.
// 물론, userInput이 항상 문자열인지, 혹은 문자열이나 숫자인지 미리 알 수 있다면 문자열이나 유니온 타입을 쓰는게 좋다.
let userInput3: string | number;

// 이 함수는 never를 반환하며 반환 값을 생성하지 않는다.
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("에러가 발생했어요!", 500);

// 로그가 출력되지 않는다. 이유는 throw가 스크립트와 충돌해서 스크립트가 취소되기 때문이다.
//
const result = generateError("An error occureed!", 500);
console.log(result);
