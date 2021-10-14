// 타입스크립트에서의 함수 선언
//ts 함수 선언 인자에도 타입선언이 가능하며, 함수 return 타입에도 타입 명시가 가능
// 함수의 반환 값에 타입을 정하지 않을 때는 void라도 사용
function sum(a, b) {
    return a + b;
}
//화살표 함수 사용법
var arrowSum = function (a, b) {
    return a + b;
};
//변수 옆에 타입 어노테이션을 추가하고 함수 스스로 타입을 추론할 수 있게 가능
var sum1 = function (a, b) { return a + b; };
/**
 * 타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주합니다.
 * 따라서, 함수의 매개변수를 설정하면 undefined나 null이라도 인자로 넘겨야하며 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인합니다.
 * 달리 말하면 정의된 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다는 의미
 */
function sum2(a, b) {
    return a + b;
}
sum2(10, 20); // 30
//sum2(10, 20, 30); // error, too many parameters
//sum2(10); // error, too few parameters
/**
 * 위와 같은 특성은 정의된 매개변수의 갯수 만큼 인자를 넘기지 않아도 되는 자바스크립트의 특성과 반대됩니다.
 * 만약 이러한 특성을 살리고 싶다면 ?를 이용해서 아래와 같이 정의
 */
function sum3(a, b) {
    return a + b;
}
sum3(10, 20); // 30
//sum3(10, 20, 30) // error, too many parameters
sum3(10); // 10
//기본값 매개변수
var sum4 = function (a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
};
sum4(1); // 결과는 1이다.
sum4(2, undefined); // 결과는 2다.
