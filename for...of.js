// for ... of ..
// for ... in 반복문은 객체의 key값만 접근이 가능하고, value 값에는 접근이 불가
let array = [10, 20, 30, 40]

for (let val in array) {
    console.log(val); //0, 1, 2, 3 이 나온다..!

}

for (let val in array) {
    console.log(array[val]); //10, 20, 30, 40 
}

// for...of
for (let val of array) {
    console.log(val) //10, 20, 30, 40
}

// for...of 는 symbol iterator 속성을 가지는 collection을 상대로만 사용이 가능하다.
// value값이 생기면, key값이 저절로 생기는 배열 같은 객체 여야만 한다.
// 따라서 iterator객체를 반환하지 않는 객체를 만들었다면 for..of 반복문의 사용은 불가능하다.

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let val of obj) {
    console.log(val); //error
}

// 위와 같은 obj의 경우에는 for...in을 사용해야한다.
for (let val in obj) {
    console.log(val); //a, b, c
}