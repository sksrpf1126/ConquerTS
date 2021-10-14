// "타입"스크립트의 기본 타입에 대한 공부
// 자바스크립트는 동적으로 인터프리터에 의해 타입이 지정이 된다.
// 그렇기에 처음 JS를 배울 때 많은 사람들이 어려움을 겪었고, 나 또한 마찬가지다.
// 하지만 타입스크립트는 C, JAVA 처럼 정적인 타입을 제공해주기 때문에 많은 오류에서 벗어날 수 있었다.
var str = 'hello Typescript'; //string type
var num = 10; //number type
var isLoggedIn = false; //boolean type
var arr = [1, 2, 3]; //number type만 들어가는 Array타입
var arr2 = [4, 5, 6]; //위 타입을 제네릭으로 가능
//튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
var arr3 = ['hello', 100, true];
//이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
var hero = Avengers.Capt;
