// Spread Operator
// Spread Operator은 함수를 호출할 때 인수로 사용할 수 있고, 배열 안에 들어갈 수 있고, 객체 안에 들어갈 수 있다.

// 함수
function sum(x, y, z) {
    return x+y+z;
}

console.log(sum(1, 2, 3));

// 아래 방식으로 하면 이상한 값이 뜬다
// 이렇게 하면 배열의 요소들을 함수의 인수로 사용할 수 없다.
let arr = [10, 20, 30];
console.log(sum(arr)) // 10,20,30undefinedundefined

//배열의 요소들을 함수의 인수로 사용하려면 apply를 사용한다.
console.log(sum.apply(null, arr)); //60 

// 위 코드를 spread operator를 사용하면 훨씬 더 간단해진다.
console.log(sum(...arr)); //60

//spread operator은 rest operator과 다르게 중간에 끼어있어도 된다.
function sum2(a, b, c, d, e) {
    return a+b+c+d+2;
}

let arr2 = [20, 30]

console.log(
    sum(10, ...arr, 40, 50) //150
    //10이 a에 들어가고, array가 가지고 있는 2개의 요소가 b, c로 들어간다. 그리고 40과 50이 d와 e에 들어간다.
)

// 배열 안에서 spread operator이 사용되는 방법
// spread operator는 face라는 배열이 가지고 있는 element를 head가 가질 수 있게 도와준다.
let face = ["eyes", "nose", "mouth"]
let head = ["hair", ...face, "ears"]

console.log(head) //[ 'hair', 'eyes', 'nose', 'mouth', 'ears' ]

// 배열을 복사할 때 사용하는 법
let arr3 = [1, 2, 3];
let arrCpy = [...arr3]; // spread operator를 사용해야 original 배열이 영향받지 않는다.


console.log(arrCpy) //[ 1, 2, 3 ]

//shallow copy
let arrShallowCpy = arr; // 이 방식대로 사용하면 오리지널 배열이 수정되면 영향을 받는다.
arrShallowCpy.push(4)

console.log(arr) // [ 10, 20, 30, 4 ]
console.log(arrShallowCpy) //[ 10, 20, 30, 4 ]

// 객체 안에서 spread operator가 사용되는 방법
let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

// original 객체 안에 key value 값을 그대로 가지는 객체를 만든다
let newDrinks = {
    lemon: 'tea',
    orange: 'juice',
    drinks
}

console.log(newDrinks)
// {
//     lemon: 'tea',
//     orange: 'juice',
//     drinks: { caffe: 'latte', coca: 'cola' }
//   }

let newDrinks2 = {
    lemon: 'tea',
    orange: 'juice',
    ...drinks
}

console.log(newDrinks2)
// { lemon: 'tea', orange: 'juice', caffe: 'latte', coca: 'cola' }