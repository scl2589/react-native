// Arrow function
// => 화살표를 사용한다.

// 사용법은 크게 2가지이다.
// 1. 표현식의 결과값을 반환하는 표현식 본문에 쓰인다.
// 2. 상태 블럭 본문에 쓰인다

// 1. 표현식의 결과값을 반환하는 표현식 본문 
// 표현식의 결과를 return 해주는 본문 내에서 사용한다.
let arr = [1, 2, 3, 4, 5];
// map 이란? for문 같은 loop로 js에서 지원하는 배열 객체 내장 함수
// input이 paramter로 저장되는 함수이고, output이 새로운 배열이다. 

/*
함수가 들어갔는데 배열이 어떻게 나오나요?
- map이라는 method 자체가 배열 객체 내장 함수이므로 
- map이라는 메소드를 호출한 배열의 각 요소가 input 함수에 의해서 새로운 배열로 return 됩니다.
- 아래 구문은 밑에 arrow function 과 같습니다.
let twice = arr.map(function(val) {
    return val*2;
})
*/
let twice = arr.map(v=>v*2); 

console.log(twice) // [ 2, 4, 6, 8, 10 ]

/*
2. 상태 블록 본문에 쓰이는 경우
*/
let twice2 = arr.map(v => {
    if (v % 2 === 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    }
});

console.log(twice)

/*
odd number
even number
odd number
even number
odd number
*/

/* array 값을 바꾼 경우 */
let arr3 = [10, 20, 30, 40, 50];


let twice3 = arr3.map((v, i)=>{
    console.log(`i: ${i} v: ${v}`)
});

console.log(twice3)
/*
i가 index이다.
map이라는 배열 객체 내장 함수는 paramter로 전달되는 함수를 인자로 받는데,
그 함수의 두번째 인자가 배열의 인덱스 값이다.

i: 0 v: 10
i: 1 v: 20
i: 2 v: 30
i: 3 v: 40
i: 4 v: 50
[ undefined, undefined, undefined, undefined, undefined ]
*/
