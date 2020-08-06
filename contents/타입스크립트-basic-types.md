---
path: /post/타입스크립트-basic-types
title: 타입스크립트 Basic Types
author: 김희철
date: '2018-12-28 15:18:22'
tags:
  - typescript
draft: false
---

타입스크립트의 기본타입들을 살펴봅니다.

### Boolean

`true` 또는 `false` 를 값으로 갖습니다.

```ts
// TS
let isMe: boolean = true

// TS to ES5
var is = true
```

### Number

Javascript 와 동일하게 타입스크립트도 부동소수점을 갖습니다.

```ts
// TS
let num: number = 10

// TS to ES5
var num = 10
```

### String

작은따옴표('') 또는 큰따옴표("") 로 감싸 표현할 수 있습니다. [Template Literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 을 이용하려면 백틱(\`\`) 으로 감싸면 됩니다.

```ts
// TS
let myName: string = 'heecheolman'
let greet: string = `Hello My name is ${myName}`

// TS to ES5
var myName = 'heecheolman'
var greet = 'Hello My name is ' + myName
```

### Array

배열을 표현하는 방식은 두가지가 존재합니다.

1. `type[]`
2. `Array<type>`

```ts
// TS
let list: number[] = [1, 2, 3, 4]
let list: Array<number> = [1, 2, 3, 4]

// TS to ES5
var list = [1, 2, 3, 4]
var list = [1, 2, 3, 4]
```

### Tuple

튜플 타입으로 요소의 수와 요소의 타입이 정확히 지정된 배열의 타입을 정의할 수 있다.

```ts
// TS
let person: [number, string] = [24, 'heecheolman']

// TS to ES5
var person = [24, 'heecheolman']
```

당연히 튜플의 요소는 배열도 가능하다. 다음 예에서 첫번째 요소는 자동차 색상들, 두번째 요소는 드라이버 이름을 나타낸다. (실제론 차 없음) 튜플의 첫번째 요소에 `string[]` 인것, 그리고 Array 의 prototype 메서드인 `push` 도 사용가능하다는것을 확인하자!

```ts
// TS
let car: [string[], string]
car.push(['white', 'black', 'blue'], 'heecheolman')

// TS to ES5
var car
car.push(['white', 'black', 'blue'], 'heecheolman')
```

이렇게도 가능하다. `[string, string]` 형태의 배열임을 생각하자.

```ts
// TS
let car: [string, string][]
car = [
  ['black', 'heecheol'],
  ['white', 'hoocheol'],
]

// TS to ES5
var car
car = [
  ['black', 'heecheol'],
  ['white', 'hoocheol'],
]
```

만약 요소를 추가할 때 튜플의 타입에 없는 타입이면 에러를 뱉는다.

```ts
// TS
let identify: [number, string] = [1, 'heecheolman']
identify.push(true) // Error!
//  TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

그리고 튜플의 요소에 대해 접근 할 시 각 요소에 정해진 타입으로 접근됩니다. 예를들어 다음과 같은 예에서

[`toFixed()` : 고정소수점 표기법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)은 Number.prototype 에만 존재하고 String 에는 존재하지 않기에 에러를 뱉습니다.

```ts
// TS
let person: [number, string] = [24, 'heecheolman']

person[0].toFixed() // Ok!
person[1].toFixed() // Error!
// TS2339: Property 'toFixed' does not exist on type 'string'.
```

### Enum

다른언어와 마찬가지인 열거형입니다. '숫자' 데이터를 가독성 좋게 표현할 수 있습니다.

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green
console.log(c) // 1

let colorName: string = Color[Color.Blue]
console.log(colorName) // Blue
```

다른 언어의 enum 은 숫자로만 반환되는데 반해 자바스크립트는 반대로 string 까지도 반환을 해줍니다.
`colorName` 을 보면 알 수 있습니다. `console.log(Color)` 를 통해 내부 속성들을 확인할 수 있습니다.

```
Color {
 0: "Red"
 1: "Green"
 2: "Blue"
 Blue: 2
 Green: 1
 Red: 0
}
```

타입스크립트는 `enum` 을 어떻게 구현을 했을까요?

위의 enum 코드는 아래와 같이 컴파일됩니다.

```js
// TS to ES5
var Color
;(function(Color) {
  Color[(Color['Red'] = 0)] = 'Red'
  Color[(Color['Green'] = 1)] = 'Green'
  Color[(Color['Blue'] = 2)] = 'Blue'
})(Color || (Color = {}))
```

그리고 이것을 다시 구성해보면 다음과 같습니다.

```js
var Color
;(function(Color) {
  Color['Red'] = 0
  Color['Green'] = 1
  Color['Blue'] = 2
  Color[0] = 'Red'
  Color[1] = 'Green'
  Color[2] = 'Blue'
})(Color || (Color = {}))
```

[IIFE](https://developer.mozilla.org/ko/docs/Glossary/IIFE) 를 통해 각 속성들을 정의하는것을 볼 수 있습니다.

### Any

타입스크립트에는 Any 라는 타입이 있는데 **알지 못하는 변수 유형** 이 있다면 이 타입을 사용합니다. 예를들어 동적으로 결정되는 변수의 유형들은 any 로 지정해주는데, 컴파일러는 컴파일 시 any 타입에 대하여 타입 검사를 하지않습니다.

```ts
// TS
let what: any = 1
what = 'what' // Ok!
what = true // OK!

// TS to ES5
var what = 1
what = 'what'
what = true
```

하지만 Object 타입의 변수는 값을 할당할 수만 있습니다.

```ts
// TS
let obj: Object = 4
obj.toFixed() // Error!
//  TS2339: Property 'toFixed' does not exist on type 'Object'.
```

### Void

타입이 전혀 없는 타입입니다. 보통, 값을 반환하지 않는 함수의 반환유형으로 이 타입을 사용합니다.

```ts
// TS
function warning(): void {
  alert('Warning!!')
}

// TS to ES5
function warning() {
  alert('Warning!!')
}
```

변수의 타입으로도 사용할 수 있지만 `null` 과 `undefined` 만 할당이 가능하여 유용하지 않다고 합니다.

```ts
// TS
let unusable: void
unusable = undefined // Ok!
unusable = null // Ok!
unusable = 1 // Error!
//  TS2322: Type '1' is not assignable to type 'void'.
```

### Null과 Undefined

각각 null은 `null` undefined 는 `undefined` 값을 갖습니다.

```ts
// TS
let u: undefined = undefined
let n: null = null

// TS to ES5
var u = undefined
var n = null
```

#### tsconfig의 strictNullChecks를 활성화하자!

tsconfig 의 strictNullChecks 를 꺼놓은 경우에는 `null`, `undefined` 값을 할당할 수 있지만 `strictNullChecks` 를 활성화하면 모든 타입은 `null`과 `undefined` 값을 가질 수 없습니다. 갖게되는 경우는 다음과 같습니다.

1. union type 으로 직접 명시
2. any 타입은 null 과 undefined 를 갖을 수 있음
3. void 타입은 undefined 를 가짐

> "strictNullChecks 를 적용하지 않고, **어떤 값이 null 과 undefined 를 갖는다는것을 암묵적으로 인정하고 계속 사용하다보면 정확히 어떤 타입이 오는지를 개발 스스로가 간과할 수 있다.** 정말로 null 과 undefined 를 가질수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋습니다. 이 옵션을 켜고 사용하는 경우, 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하려는 노력을 기울여야 하고, 기울이게 될 것입니다."  
> 2018 devFest Seoul [타입스크립트 빡빡하게 사용하기] - 이웅재님

### Never

never 타입은 절대로 발생하지 않는 값의 타입입니다. 예를들어

- 함수 표현식의 리턴 타입이거나
- 항상 예외를 던지는 arrow function 이거나
- 리턴하지 않는 표현식

```ts
// TS

// 에러를 발생시켜 반환이 없는 경우.
function error(message: string): never {
  throw new Error(message)
}

// 항상 에러를 반환하는 화살표 함수인 경우.
;((): never => error('fail'))()

// 끝나지 않는 함수로 절대 반환이 될 수 없는 경우.
function infiniteLoop(): never {
  while (true) {
    // something ...
  }
}
```

## 참고문헌

- [Typescript - Basic Types](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Typescript - Basic Types[번역]](https://infoscis.github.io/2017/05/14/TypeScript-handbook-basic-types/)
