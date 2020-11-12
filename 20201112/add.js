// ctrl alt N -- 시작

//ES6 변수, 상수 선언
var name; // 함수 레벨 스코프.. 
let name1 = "abc"; //  변수 선언 방법
const name2 = "abc"; // final(변경 불가능 - 상수)

// 선언 - 식별자를 등록
// 초기화 단계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않으면 undefined

/*
자바스크립트에서 변수 선언 -> var 식별자; 
변수
함수
클래스
식별자 - 실행 컨텍스트에 등록됨


- 특수 문자 제외한 숫자, 문자, 언더스코어, 달러 기호 가능...
- 숫자로 식별자 이름 시작은 불가능
- 예약어(keyword, reserved word) 사용 불가능
*/

// 스크립트의 문제점... 타입이 일정하지 않고 계속 바뀔 수 있기 때문에 오류가 발생할 수 있음.
var name = 'abc';
console.log(name);
name = 12344;
console.log(name);

/*동적 타이핑
1. 값을 보고 타임 추론
2. 언제든 식별자의 값이 변경될 수 있음.
*/


const n = 10;
const message = 'test';
console.log(`변수 n의 값: ${n}. 상수 message의 값: ${message}`);


/*

*/
const obj = {
    abc:'abc'

};
//멤버 접근 연산자(.) memver aasdccess operator
console.log(obj.abc);

// 계산된 멤버 접근 연산자 ([]) computed member access operator
console.log(obj['abc']);

obj['alpha'] = 'a';
obj['beta'] = 'a';
console.log(obj);

const obj1 = {
    abc: 'abc'
}
const obj2 = {
    abc: 'abc'
}
console.log(obj1 === obj2);


const a = 10
if(a > 5) {
    console.log('a가 5보다 크다');
}


for(var i = 0; i < 10; i++) {
    console.log(`${i+1}번째 출력`)
}

const obj55 = {
    food: '감자',
    number: 10,
    arr: [1,2,3],
};
for(p in obj55) {
    console.log(obj55[p])
};


function test(a, b) {
    return `${a}와 ${b}의 합은 ${a+b}입니다.`
}

const resultMessage = test(1,2);
console.log(resultMessage);

const a = test
const resultMessage = a(1,2);
console.log(resultMessage);


const obj = {
    name: 'haejun',
    say: function() {
        console.log(`my name is ${this.name}`);
    }
}

obj.say()