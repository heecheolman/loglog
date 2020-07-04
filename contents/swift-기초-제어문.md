---
path: /post/swift-기초-제어문
title: Swift 기초 - 제어문
author: 김희철
date: '2020-03-25 19:09:46'
tags:
  - swift
draft: true
---

```toc

```

반복및 조건에 들어가기 앞서 **nil 병합 연산자** 와 **범위 연산자**에 대해 짚고 가겠습니다. 연산자이지만 제어와 더 가깝다고 생각해 이 파트에 넣었습니다.

## nil 병합 연산자

`nil` 병합 연산자(Nil-Coalescing Operator)는 옵셔널 값이 `nil` 인지 여부에 따라 분기합니다. `??` 키워드를 이용합니다.

```swift
/*
    a 가 nil 이 아니라면 a 의 옵셔널을 해제한 값을 return 하고
    nil 이라면 b 를 return 합니다.
*/
var foo = a ?? b // 아래의 코드와 동일
var foo = a != nil ? a! : b
```

## 범위 연산자

### 닫힌 범위 연산자

`n...m` 으로 n 부터 m 까지 반복하라는 연산자입니다. (n포함, m포함)

```swift
for index in 1...3 {
    print(index)
}
/*
    1
    2
    3
*/
```

### 반 닫힌 범위 연산자

`n..<m` 으로 n 부터 m-1 까지의 범위를 갖습니다. 배열을 순회하는데 자주 쓰입니다.

```swift
let nameList = ["a", "b", "c"]

for index in 0..<nameList.count {
    print(index, nameList[index])
}
/*
    0 a
    1 b
    2 c
*/
```

### 단방향 범위 연산자

시작이나 끝의 범위만 지정해준 범위 연산자입니다. `[..n]` 또는 `[n..]` 과 같이 기술합니다.

```swift
let nameList = ["a", "b", "c", "d"]

for name in nameList[2...] {
    print(name)
}
/*
    c
    d
*/
for name in nameList[..<2]  {
    print(name)
}
/*
    a
    b
*/
```

변수나 상수에 범위를 할당해 범위에 대한 확인도 가능합니다

```swift
let underSix = ...6
underSix.contains(7) // false
underSix.contains(2) // true
underSix.contains(-100) // true
```

## 반복문

스위프트에서 사용하는 여러가지 반복 및 제어문에 대해 알아봅니다.

### for in

배열, 숫자, 문자열과 같이 순회 가능한것들에 대해 순회합니다.

#### Array

```swift
let nameList = ["a", "b", "c", "d"]
let name = "heecheol"

// string도 enumerated() 가 가능
for (index, character) in name.enumerated() {
    print(index, character)
}
/*
0 h
1 e
2 e
3 c
4 h
5 e
6 o
7 l
*/

for name in nameList {
    print(name)
}
/*
    a
    b
    c
    d
*/
for (index, name) in nameList.enumerated() {
    print(index, name)
}
/*
    0 a
    1 b
    2 c
    3 d
*/
```

#### Dictionary

`Key-Value` 를 순회합니다. 순서는 보장되지 않습니다. `(key, value)` 로 분해할 수 있고 각각 상수(readonly)로 할당됩니다.

```swift
let people = [
    "heecheol": 26,
    "hocheol": 25,
    "heechoon": 20
]

for (name, age) in people {
    print(name, age)
}
/*
    hocheol 25
    heechoon 20
    heecheol 26
*/
```

#### 단순 반복만 필요할 때

`for in` 문에서 반복되는 값이 필요한 것이 아닌 단순 반복횟수만 필요하다면 `_` 키워드로 값을 무시할 수 있습니다.

```swift
for _ in 1...3 {
    print("hello")
}
/*
    hello
    hello
    hello
*/
```

#### stride 함수

시퀀스를 만드는 특정함수입니다.

- `stride(from:to:by:)` 는 from 부터 to 까지(to 미포함) by 씩 반복됩니다.
- `stride(from:through:by:)` 는 from 부터 through(through 포함) 까지 by 씩 반복됩니다.

```swift
for step in stride(from: 0, to: 4, by:2) {
    print(step)
}
/*
    0
    2
*/

for step in stride(from: 0, through: 4, by:2) {
    print(step)
}
/*
    0
    2
    4
*/
```

### while

while 문으로 `조건` 이 `true` 일 때까지 `구문` 이 실행됩니다. 조건을 제대로 걸어주지 않으면 무한루프에 빠지기 쉬우므로 유의해야합니다.

```swift
while 조건 {
    구문
}
```

```swift
var step = 0
while step < 3 {
    print(step)
    step += 1
}
print("끝")
/*
    0
    1
    2
    끝
*/
```

### repeat while

repeat while 문으로 `구문`이 먼저 실행되고 `조건` 여부에 따라 다시 실행할지 결정합니다.
while 문은 먼저 조건을 확인한 후 구문에 들어가지만, repeat while 문은 구문이 먼저 실행된 이후에 조건을 확인합니다.

while 문과 마찬가지로 무한루프에 빠지기 쉬우므로 조건에 유의해야합니다.

```swift
repeat {
    구문
} while 조건
```

```swift
var step = 0

repeat {
    print(step)
    step += 1
} while step == 0

print("끝")
/*
    0
    끝
*/
```

## 조건문

조건에 따라 처리를 다르게 해줘야할 때 사용합니다. 스위프트는 `if` 와 `switch` 를 제공합니다.

### if

다른 언어에서의 if 문과 동일합니다.

```swift
var step = 0

if step == 1 {
    print(1)
} else if step == 2  {
    print(2)
} else {
    print("default")
}
// default
```

### switch

switch 문은 각 상황에 맞는 구문을 매칭해줍니다. C++ 나 Java, Javascript 에서는 `break` 구문을 이용해 case 를 빠져나왔지만, 스위프트는 `break` 구문을 적지 않아도 됩니다.
하나의 case 에는 하나의 구문만 올 수 있고, 조건이 여러개일 때는 쉼표(`,`) 를 이용합니다.

```swift
switch 값 {
    case 값1:
        구문1
    case 값2:
        구문2
    case 값3, 값4:
        구문3
    default:
        기본구문
}
```

```swift
var step = 3

switch step {
case 0: print(0)
case 1: print(1)
case 2: print(2)
case 3, 4: print(3, "or", 4)
default: print("nothing")
}
// 3 or 4
```

#### 범위를 갖는 case

switch 의 case 의 조건으로 범위연산자가 올 수 있습니다.

```switch
var step = 50

switch step {
case 0...50:
    print("0 ~ 50")
case 51...100:
    print("51 ~ 100")
default:
    print("nothing")
}
// 0 ~ 50
```

#### 튜플 case

switch 의 case 조건으로 튜플이 올 수 있습니다.

```swift
let position = (4, 6)

switch position {
case (0, 0):
    print("원점")
case (_, 0):
    print("x축에 존재")
case (0, _):
    print("y축에 존재")
case (0...2, 0...2):
    print("x: 0~2 와 y: 0~2 사이에 존재")
default:
    print("어딘가 있겠죠")
}
// 어딘가 있겠죠
```

#### case 에서 값 바인딩

case 의 비교로 들어오는 값을 바인딩해 사용할 수 있습니다.

```swift
let position = (4, 6)

switch position {
case (let x, 4):
    print(x, 4)
case (let x, 6):
    print(x, 6)
default:
    print("default")
}
// 4 6
```

#### where 문

`where` 문을 이용해 case 에 조건을 걸어줄 수 있습니다.

```swift
let yetAnotherPoint = (1, -1)
switch yetAnotherPoint {
case let (x, y) where x == y:
    print("(\(x), \(y)) is on the line x == y")
case let (x, y) where x == -y:
    print("(\(x), \(y)) is on the line x == -y")
case let (x, y):
    print("(\(x), \(y)) is just some arbitrary point")
}

// (1, -1) is on the line x == -y
```

## 제어 전송 구문

제어 전송 구문은 반복이나 조건문에서 코드의 흐름을 바꾸기위해 사용하는 구문입니다.

### continue

현재 실행되고 있는 loop 을 중지하고 다음 loop 를 실행합니다.

```swift
for index in 0...6 {
    if (index % 2  == 0)  {
        continue
    }
    print(index)
}
/*
    1
    3
    5
*/
```

### break

현재 실행되고 있는 반복문 자체를 바로 중지시킵니다.

```swift
var name = "heecheolman"

for char in name {
    if (char == "c") {
        break;
    }
    print(char)
}
/*
    h
    e
    e
*/
```

### fallthrough

switch 문에서 `fallthrough` 구문을 만나면 그 즉시 case 문을 종료하고 다음 case 문으로 이동합니다. 이 때 아래의 case 문에 대한 조건은 검사하지 않습니다.

```swift
var step = 10

switch step {
case 5:
    print("5")
case 10:
    print("10")
    fallthrough // 아래로
case 15:
    print("15")
    fallthrough // 아래로
default:
    print("default")
}
/*
    10
    15
    default
*/
```

### label

라벨을 문장 앞에 붙이면 라벨 구문(labeled statements)이 되는데 `contineu`, `break` 에서 라벨을 지정해 이동합니다.

```swift
var step = 1

stepLoop: while step != 7 {
    print("실행")
    let randomNumber = Int.random(in: 1...7)
    if randomNumber == 5 {
        print("5나옴")
        continue stepLoop
    }
    if randomNumber == 1 {
        print("1나옴")
        break stepLoop
    }
}
```

라벨 구문은 `goto` 문과 비슷한 느낌을 받아 지양해야 한다고 생각이 듭니다. label 을 써야할 때면 다른 조건으로 풀 수 있는지 다시 고민해봐야 합니다. [참고문서](https://medium.com/@rwgrier/swift-labeled-statements-3624ff30e0e7)

### guard

`guard` 문을 이용해 조건을 검사하고, 만족하지 않을 시 특정 처리를 할 수 있습니다.

단순 `if-else` 문과 다른 점은 `guard` 문은 옵셔널 바인딩을 통해 값을 얻어낼 수 있어 `nil` 검사를 하지 않고 코드가 간결해질 수 있습니다.

```swift
func greet(person: [String: String]) {
    guard let name = person["name"] else { // 옵셔널 바인딩
        return
    }

    print("Hello \(name)!")

    guard let location = person["location"] else { // 옵셔널 바인딩
        print("I hope the weather is nice near you.")
        return
    }

    print("I hope the weather is nice in \(location).")
}

greet(person: ["name": "John"])
// Prints "Hello John!"
// Prints "I hope the weather is nice near you."
greet(person: ["name": "Jane", "location": "Cupertino"])
// Prints "Hello Jane!"
// Prints "I hope the weather is nice in Cupertino."
```

만약 위의 코드를 `if-else` 문으로 바꾸면 `nil` 체크와 옵셔널을 해제해야합니다.

```swift
func greet(person: [String: String]) {
    if person["name"] == nil { // nil 체크
        return
    }

    let name = person["name"]! // 옵셔널 강제 해제

    print("Hello \(name)!")

    if person["location"] == nil { // nil 체크
        print("I hope the weather is nice near you.")
        return
    }

    let location = person["location"]! // 옵셔널 강제 해제

    print("I hope the weather is nice in \(location).")
}

greet(person: ["name": "John"])
// Prints "Hello John!"
// Prints "I hope the weather is nice near you."
greet(person: ["name": "Jane", "location": "Cupertino"])
// Prints "Hello Jane!"
// Prints "I hope the weather is nice in Cupertino."
```

## 이용 가능한 API 버젼 확인

스위프트에서는 플랫폼과 플랫폼 버전을 확인할 수 있게 문법적으로 제공해줍니다. asterisk(`*`) 는 와일드카드로 작동되며, 그 외 모든 플랫폼 및 버전임을 나타냅니다.

```swift
if #available(플랫폼이름 버전, ..., *) {
    API 사용 가능 구문
} else {
    API 사용 불가 구문
}
```

```swift
/* 예 */

if #available(iOS 10, macOS 10.12, *) {
    // Use iOS 10 APIs on iOS, and use macOS 10.12 APIs on macOS
} else {
    // Fall back to earlier iOS and macOS APIs
}
```

## 참고문서

- [Swift 문서](https://swift.org/)
- [The Swift Language Guide - 한국어](https://jusung.gitbook.io/the-swift-language-guide/)
- [Checking API Availability in Swift - AndyBargh.com](https://andybargh.com/checking-api-availability-in-swift/)
