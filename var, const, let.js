var hello = 'world';

function test() {
    var hello = 'korea';
    console.log(hello);
}

test(); //korea

console.log(hello); //world

//2번째 case
//var 로 선언한 변수는 block문이 아닌 function이기 때문입니다.
var hello = 'world'; //global

if (true) {
    var hello = 'korea'; //local
    console.log(hello); //korea
}

console.log(hello); //world


//3번째 case - var의 중복 선언 
var hello = 'world';
var hello = 'korea';

console.log(hello); //korea
// 같은 변수 명을 두 번 썼는데도 오류를 발생시키지 않는다.
//이런 것들은 오류가 생기는게 좋다. 코드가 길어지면 내가 어떠한 변수명을 쓰고 있는지 파악하기 어렵기 때문이다.
// 이러한 상황에서 오류가 나지 않으면, 내가 원치않는 갑이 덧칠해지기 때문에 바람직하지 않다.

//4번째 case - let 사용
let hello = 'world'
let hello = 'korea' //오류 발생

//5번째 case - let 사용
// let은 변수를 사용한 블록에서 유효하다.
let hello = 'world'

if (true) {
    let hello = 'korea'
    console.log(hello); //korea
}

console.log(hello); //world

// 6번째 case - const
// const는 변하지 않는 값
const num = 5;
num = 6;
console.log(num); //오류 발생 

// 7번째 case - const (global과 local)
const hello = 'world'

if (true) {
    const hello = 'korea'
    console.log(hello); //korea
}

console.log(hello); //world

//8번째 case - const 객체 vs 배열
//const는 객체와 배열에서 변경이 가능하다.
//객체
const drinks = {};
drinks.caffe = 'latte';
drinks.lemon = 'ade';

console.log(drinks); //{coffe: 'latte', lemon: 'ade'}

//배열
const arr = [1, 2, 3, 4, 5];
arr[0] = 100;
arr[4] = 500;
console.log(arr); //[100, 2, 3, 4, 500]