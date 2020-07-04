---
path: /post/swift-기초-함수
title: Swift 기초 - 함수
author: 김희철
date: "2020-03-28 16:39:58"
tags:
  - swift
draft: true
---

```toc

```

## 일급객체

스위프트에서 함수는 일급객체(first class) 로 다뤄집니다. 일급객체가 갖는 특징은 3가지정도 있습니다. 각각 하나씩 살펴보겠습니다.

- 변수나 상수에 할당 가능
- 함수의 파라미터값으로 전달 가능
- 반환값으로 전달 가능

### 변수나 상수에 할당 가능

`add` 라는 함수를 `someAdd` 상수에 다시 할당했습니다. 정의된 함수를 변수나 상수에 할당함으로서 새로 할당된 함수는 완전히 동일하게 기존 함수처럼 사용할 수 있습니다.

> 클로저에서 한번 다루겠지만, 변수나 상수에 할당하게되면 참조타입으로 할당됩니다.

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

let someAdd = add // 할당

someAdd(1, 2) // 3
```

### 함수를 파라미터값으로 전달 가능

함수를 다른함수의 파라미터로 전달해 줄 수 있습니다.

```swift
func b() {
    print("b called")
}

func a(_ b: () -> Void) {
    print("a called")
    b()
}

a(b)
/*
   a called
   b called
*/

```

> 자세한건 클로져에서 다룹니다

### 반환값으로 전달 가능

함수를 함수의 반환값으로 전달 가능합니다. 반환된 함수는 동일하게 사용 가능합니다. 다음 함수는 특정 숫자를 양수인지 음수인지 0인지 판별해서 숫자 유형을 출력해줍니다.

```swift
func printPositiveNumber() {
    print("positive number")
}

func printNagativeNumber() {
    print("nagative number")
}

func printZero() {
    print("zero")
}

func selectPrintNumberFunction(_ number: Int) -> () -> Void {
    if (number == 0) {
        return printZero;
    }
    return number > 0
        ? printPositiveNumber
        : printNagativeNumber
}

selectPrintNumberFunction(5)() // positive number
selectPrintNumberFunction(-1)() // nagative number
selectPrintNumberFunction(0)() // zero
```

## 함수

함수는 기본적으로 Input 과 Output 이 있습니다. Input 에 관한 파라미터 타입이나, Output 에 대한 return 타입 지정에 대해 알아봅니다.

### Input: 함수 파라미터

함수의 파라미터의 타입은 `변수: 타입` 으로 지정합니다. 파라미터 이름을 생략한 경우에도 마찬가지로 타입을 지정해줘야 합니다.

```swift
func add(a: Int, b: Int) {
    print(a, b)
}
```

```swift
func add(_ a: Int, _ b: Int) {
    print(a, b)
}
```

#### 라벨이 있는 파라미터

스위프트에서 함수 파라미터를 전달하는 방법은 두 가지가 있습니다. `label` 을 붙이는 방법과 안붙이는 방법.

스위프트에서는 함수 호출 시 기본으로 각 파라미터별로 이름을 갖습니다. 여기서 호출 시 각 자리에 맞는 라벨을 붙여줍니다.

```swift
func add(a: Int, b: Int) {
    print(a, b)
}

add(a: 1, b: 2)
```

#### 라벨이 없는 파라미터

함수 호출시 매번 라벨을 붙여주기 힘들다면 `_` 를 이용해 생략할 수 있습니다.

```swift
func add(_ a: Int, _ b: Int) {
    print(a, b)
}

add(4, 1)
```

#### 파라미터 라벨 붙여주기

파라미터의 이름으로 값을 넘겨주고 함수내부에서 이름을 별도로 갖고싶다면 파라미터 라벨을 지정해줄 수 있습니다. 여기서는 `a` 와 `b` 로 넘겨줬지만 실제로 내부에서 쓰일 때는 `x`, 와 `y`로 사용합니다.

```swift
func add(a x: Int, b y: Int) {
    print(x, y)
}

add(a: 4, b: 1)
```

#### 파라미터로 함수를 갖는 함수

파라미터로 함수가 들어온다면, 파라미터 `Type` 의 자리에 함수의 타입을 지정해줍니다.

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

// 파라미터 들어온 함수의 타입을 지정
func callAddFunction(_ add: (Int, Int) -> Int) {
    let result = add(1, 4)
    print(result)
}

callAddFunction(add)
```

#### 기본 파라미터

함수에 파라미터를 전달하지 않았을 때 함수자체가 갖는 기본 파라미터를 지정해줄 수 있습니다.

```swift
func greet(name: String = "Unknown") {
    print("Hello \(name)")
}

greet() // Hello Unknown
```

#### 집합 파라미터

`...` 키워드를 이용해 동일한 타입의 파라미터를 여러개 받을 수 있습니다. 여러개를 전달하면 배열로 다룰 수 있습니다. 주의할 점은 함수에서는 최대 1개의 집합 파라미터만 제공합니다.

```swift
func concatCharacters(characters: Character...) -> String {
    var string = ""
    for character in characters {
        string.append(character)
    }
    return string
}

print(concatCharacters(characters: "h", "e", "e", "c", "h", "e", "o", "l")) // heecheol
```

#### 인-아웃 파라미터

파라미터의 값을 직접 변경합니다. 파라미터의 타입 앞에 `inout` 키워드를 붙여서 사용합니다. 그리고 호출할 때 해당 변수 앞에 `&` 로 넣어줍니다.

```swift
func swap(a: inout Int, b: inout Int) {
    let temp = a;
    a = b
    b = temp
}

var a = 1
var b = 5
print("before: ", a, b)
swap(a: &a, b: &b)
print("after: ", a, b)
/*
    before:  1 5
    after:  5 1
*/
```

> C++ 에서 포인터 개념을 생각하면 이해하기 편할 것 같습니다.

### Output: 함수 return

함수의 return 타입임을 알려주는 키워드는 `-> Type` 입니다. 함수의 return 타입이 생략된 경우에 스위프트는 암시적으로 `-> Void` 타입임을 추론합니다.

위의 `add()` 함수의 return 타입을 명시적으로 지정한다면 다음과 같습니다.

```swift
func add(a: Int, b: Int) -> Void {
    print(a, b)
}
```

만약 함수를 return 하는 함수라면, 함수의 Return 타입으로 함수타입을 지정해줍니다. 함수안에 함수를 정의하는 것을 **중첩 함수(Nested Functions)** 라고 합니다. 함수 내에 정의되어 있으므로, 범위 밖에서는 접근할 수 없습니다.

```swift
func getAddFunction() -> (Int, Int) -> Int {
    func add(a: Int, b: Int) -> Int {
        return a + b
    }
    return add
}

let result = getAddFunction()(1, 2)
print(result) // 3
```

#### 튜플 반환

여러 값을 return 하는 경우 튜플을 반환값으로 줄 수 있습니다. 함수의 return 타입에 return 하고자 하는 튜플의 타입을 적어줍니다.

```swift
func getProfile() -> (String, String, Int) {
    return ("Kim", "HeeCheol", 26)
}

let (lastName, firstName, age) = getProfile()
print(lastName, firstName, age) // Kim HeeCheol 26
```

#### 옵셔널 튜플 반환

옵셔널 튜플은 타입 뒤에 `?` 표시가 붙습니다. 옵셔널을 반환하기 때문에 return 받은 곳에서 옵셔널을 해제하여 사용해야합니다. 아래 코드는 옵셔널 바인딩을 통해 옵셔널을 해제했습니다.

```swift
func getProfile() -> (String, String, Int)? {
    return ("Kim", "HeeCheol", 26)
}

if let (lastName, firstName, age) = getProfile() {
    print(lastName, firstName, age) // Kim HeeCheol 26
}
```

## 참고문서

- [Swift 문서](https://swift.org/)
- [The Swift Language Guide - 한국어](https://jusung.gitbook.io/the-swift-language-guide/)
