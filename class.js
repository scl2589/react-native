// Class


class Person{
    // constructor는 class 인스턴스를 생성하고, 생성한 인스턴스를 초기화하는 역할이다.
    // instance란 class를 구성하기 위한 껍데기라고 생각하면 된다.
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;
    } 

    greetings(val = 'an-nyeong') {
        console.log(val)
    }
}

let korean = new Person('Korea', 'male')
console.log(korean); //Person { region: 'Korea', gender: 'male' }

korean.gender = 'female'
console.log(korean); //Person { region: 'Korea', gender: 'female' }

// 함수 불러오기
korean.greetings(); //an-nyeong

// 상속 해보기 
// es6에서는 extends라는 키워드로 상속을 구현한다.

class American extends Person {
    constructor(region_, gender_, language_) {
        // super라는 구문은 super로 감싸져 있는 애들은 부모 class에 있는 초기화 rule을 따르겠다는 뜻
        // 상속받은 자식 class에 있는 property에 대해서만 초기화가 필요 (language)
        super(region_, gender_);
        this.language = language_;
    }

    greetings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English')
console.log(american) // American { region: 'USA', gender: 'female', language: 'English' }

// 함수는 override가 된다.
// 부모 클래스와 자식 클래스의 메소드가 존재하면, 부모 클래스의 메소드는 호출되지 않는다.
american.greetings(); // hello