// "타입"스크립트의 기본 타입에 대한 공부
// 자바스크립트는 동적으로 인터프리터에 의해 타입이 지정이 된다.
// 그렇기에 처음 JS를 배울 때 많은 사람들이 어려움을 겪었고, 나 또한 마찬가지다.
// 하지만 타입스크립트는 C, JAVA 처럼 정적인 타입을 제공해주기 때문에 많은 오류에서 벗어날 수 있었다.

let str: string = 'hello Typescript' //string type
let num: number = 10 //number type
let isLoggedIn: boolean = false //boolean type
let arr: number[] = [1, 2, 3] //number type만 들어가는 Array타입
let arr2: Array<number> = [4, 5, 6] //위 타입을 제네릭으로 가능

//튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
let arr3: [string, number, boolean] = ['hello', 100, true]

//이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미
// https://hyunseob.github.io/2017/07/18/typescript-enums/ - enum 쓸 일이 있을 때 반드시 참고할 것
enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt

//단어 의미 그대로 모든 타입에 대해서 허용한다는 의미
let strAny: any = 'hi'
let numAny: any = 10
let arrAny: any = ['a', 2, true]

//void : 변수에는 undefined와 null만 할당
// 함수에는 반환 값을 설정할 수 없는 타입

let unuseful: void = undefined
function notuse(): void {
  console.log('sth')
}

//never : 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
function neverEnd(): never {
  while (true) {}
}
