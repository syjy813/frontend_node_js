# 1. 자바스크립트 등장 배경

- 브라우저 제어
- Ajax(Asynchronous Javascript and XML)
  - 서버에 API 콜할 때 사용

브라우저는 자바스크립트를 해석할 수 있는 엔진들을 내장하고 있음
대표적으로 크롬의 경우 -> V8

노드
-> 서버 사이드에서 자바스크립트를 사용하기 위해 V8 엔진을 사용하여 만듬

# 2. 용어 정리

- DOM: Document Object Model
    - 브라우저에 렌더링된 요소들(element,tag)

- 이벤트: 브라우저 상에서 발생한 액션들
  

# 3. 자바스크립트의 타입

(원시타입)
- 숫자(Number)
  - 64비트 부동소수점 정밀도
- 문자열(String)
- 불리언(boolean)
- 심벌(symbol)
- undefined
- null

(그 외에 모두 객체)
- 객체


# 3.1. 숫자 타입

- 64비트 부동소수점 정밀도
- Infinity
- NaN(Not a Number)

# 3.2. 문자열

- 작은 따옴표('')
- 큰 따옴표("")
- 백틱(backtick, `) -> 

## 3.2.1. 템플릿 리터럴 (`백틱으로 선언`)

ES6+
```
const n = 10;
const message = 'test';
console.log(`변수 n의 값: ${n}. 상수 message의 값: ${message}`);
```


## 3.3. boolean

true, false

## 3.4. 심벌

immutable 원시 타입, 값이 중복이 안됨, ES6+


## 3.5. undefined
변수를 선언하고 값을 초기화 하지 않는 경우 묵시적으로 할당되는 값.

## 3.6. null
의도적으로 변수에 값이 없음을 명시할 때 사용

## 3.7. 타입 검사
typeof 연산자 사용


## 3.8.  객체


## 3.8.1.
빈 객체 선언
const obj = {}

선언과 동시에 멤버 초기화
```javascript
const obj = {
    member1: 'abc',
    member2: [1,2,3]
    member3: 10
}
```

- 멤버 접근 연산자 (member access operator)


- 계산된 멤버 접근 연산자(computed member access operator)

```javascript
//멤버 추가하기
```

### 3.8.2. 배열

```javascript
const arr = []
```

자바스크립트 배열 특징
- 객체 -> 아무 값이나 넣을 수 있다.(자바와 달리)

### 3.8.3. 날짜
Date 객체 사용

```javascript
new Date(2020, 11, 12)
```


# 4. 제어문


## 4.1. 분기
```javascript
const a = 10
if(a > 5) {
    console.log('a가 5보다 크다');
}
```


## 4.2. 반복

- for
- for-in
- for-of

### 4.2.1. for문

```javascript
for(var i = 0; i < 10; i++) {
    console.log(`${i+1}번째 출력`)
}
```


### 4.2.2. for-in

객체 `프로퍼티` 순회할 때 사용
```javascript
for(variable in object) {
    // code
}
```
```javascript
const obj = {
    food: '감자',
    number: 10,
    arr: [1,2,3],
}
for(p in obj) {
    console.log(obj[p])
}
```

### 4.2.3. for-of

프로퍼티가 아닌 값을 순회할 때 사용

```javascript
const obj = ['감자', 10, [1,2,3]]

for (value of obj) {
    console.log(value)
}
```


# 5. 연산자


## 5.1. 비교 연산자

- 동등 비교 연산자(==);
  - 좌항과 우항의 타입을 일치시킨 후 비교

- 일치 비교 연산자(===);
  - 타입도 일치하고, 값도 일치하면 참


## 5.2. 지수 연산자
ES7+역승 계산

```javascript
x ** y
```

## 5.3. 그 외

- new: 생성자 함수 호출
- delete: 프로퍼티 제거
- `in`: 멤버 검사
- ?.: 옵셔널 체이닝


```java
if(obj != null) {
    obj.size();
}
```
obj?.size();












