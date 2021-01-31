//String literal은 문자열과 변수를 쉽게 다룰 수 있게 해준다.

// 기존 방식
const val01 = 'Hello';
const val02 = 'World';
const val03 = val01 + ' ' + val02 + '!!!!!';

console.log(val03); //Hello World!!!!!

// string literal 방식 - 좌상단에 있는 따옴표 사용
// `${variable}`

const litVal = `${val01} ${val02}!!!!!`
console.log(litVal) //Hello World!!!!!

// => 변수가 많아지면 편해질 방식. 
// 따옴표와 스페이스 방식을 통해 문자열과 변수를 간단하게 입력할 수 있는 방법이 String Literal이다.