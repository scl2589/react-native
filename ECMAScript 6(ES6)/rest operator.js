// Rest Operator

// 구문
// 맨 마지막 parameter 앞에 있는 '...'이 rest operator이다.
// '...'은 모든 나머지 인자를 표준 javascript 배열로 대체하기 위한 문법이다.
function f (a, b, ...c) { 
}

// paramter가 2개일 때 
function printNums(num1, num2) {
    console.log(num1, num2)
}

printNums(1, 2, 3, 4, 5) //1과 2만 출력. printNums에 전달되는 parameter는 2개이기 때문

// arguments로 바꿨을 때 
// arguments는 함수로 전달된 모든 인수를 포함하는 객체이다.
function printNums(num1, num2) {
    console.log(arguments); 
}

printNums(1, 2, 3, 4, 5); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// rest operator을 사용할 때
// num1이라는 인자에 전달된 1을 제외한, 나머지 인자인 2, 3, 4, 5가 num2인자인 배열로 전달이 된다.
// 함수의 마지막 parameter 앞에 '...'을 붙여서, 함수에 전달된 나머지 인자를 배열로 대체해주는 것이 rest operator이다.
function printNums(num1, ...num2){
    console.log(num1, num2);
}

printNums(1, 2, 3, 4, 5); //1 [ 2, 3, 4, 5 ]