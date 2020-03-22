---
path: /post/swift-기초-타입2
title: Swift 기초 - 타입 두번째
author: 김희철
date: '2020-03-21 16:19:33'
tags:
  - swift
draft: true
---

```toc
```

## TypeAlias

사용자가 특정 타입에 대해 타입 alias 를 지정해줄 수 있습니다. 

```swift
typealias Code = UInt16
print(Code.min, Code.max)
// 0 65535
```

## Tuple

여러가지의 타입을 묶어 하나로 그룹화합니다. 요소에 접근하는 방법은 색인으로 접근할 수 있고, 이름을 지정해 접근할 수도 있습니다.

```swift
let httpError: (statusCode: Int, statusMessage: String) = (statusCode: 404, statusMessage: "Not Found Page")

print(httpError.statusCode, httpError.0) // 404 404
print(httpError.statusMessage, httpError.1) // Not Found Page Not Found Page
```

### 튜플 분해

튜플은 필요한 값들만 분해할 수 있습니다. `_` 를 이용해 필요없는 값들은 무시할 수 있습니다.
 
```swift
let httpError: (statusCode: Int, statusMessage: String) = (statusCode: 404, statusMessage: "Not Found Page")
let (_, httpMessage) = httpError

print(httpMessage) // Not Found Page
```

### 튜플 치환

튜플을 이용해 두 값을 치환하는 방법입니다. y와 x를 각각 x와 y에 다시 할당하는 코드입니다. 
 
```swift
var x = 5
var y = 10

(x, y) = (y, x)

print(x, y) // 10, 5
```

> 튜플이 일종의 타입처럼 취급되지만 데이터구조가 복잡하거나 영구적으로 사용할 경우에는 class 또는 struct 로 모델링하는 것이 바람직합니다.

## Optional

스위프트에서는 기본적으로 모든 타입들에 대해 non-optional 이며, 값이 항상 존재해야합니다. 하지만 값이 없을 수도 있다는 것을 스위프트에서 Optional 로 나타냅니다.

Optional 임을 나타내는 표현은 타입뒤에 `?` 물음표를 붙여서 표현합니다.

```swift
var name: String? = "name"
```

 
### nil

스위프트에서 값이 없다는 것에 대한 값이 `nil` 입니다. 옵셔널타입으로 변수를 지정하고, 초기화를 하지 않으면 컴파일러는 해당 변수 또는 상수를 `nil` 로 초기화를 합니다.

아래의 코드는 두번째 줄에서 컴파일 에러를 뱉습니다. 값이 없을 수 있다는 것을 컴파일러에게 알려줘야하기 때문에 옵셔널을 붙여줘야합니다. 

```swift
var name: String = "heecheol"
name = nil // error
```

```swift
var name: String? = "heecheol"
name = nil // ok
```

### 옵셔널 값 얻어내기

옵셔널로 지정된 변수라면 '값이 없을 수도 있다' 라는 전제가 있기 때문에 `Wrap(감싼)` 된 상태로 할당됩니다.
`Wrap(감싼)` 상태의 값을 접근하려하면 `if 문과 강제로 Unwrapping 방법` 또는 `Optional Binding` 을 이용해 값을 얻어내야합니다.

#### If Statements and Forced Unwrapping 

`if` 문과 키워드 `!` 를 이용해 `Wrap` 상태인 옵셔널을 해제시켜줘 값을 얻어냅니다. `if` 문을 이용하는 이유는 런타임시 에러가 날 수 있기 때문에 사용합니다. 

```swift
var name? = "heecheol"
print(name) // Optional("heecheol")
if name != nil {
    print(name!) // heecheol
}
```

#### Optional Binding

Optional Binding 은 if 문과 let 을 이용한 구문입니다. 

```swift
if let 상수명 = 옵셔널 {
    // ...
}
```

옵셔널에 값이 존재한다면 괄호안에 특정 로직들을 처리할 수 있습니다. 괄호 안에서는 if 문 뒤에 `값`이 존재한다는 보장이 되는 상수를 이용할 수 있습니다. 주의할점은 값이 보장된 상수는 if 문 내에서만 사용 가능합니다.
`Forced Unwrapping` 방식과 다른점은 키워드 `!` 를 이용하지 않는다는 점입니다.

> if 문 뒤에 존재하는 상수명은 변수명이 될 수 있습니다. `if var 변수명 = 옵셔널 { ... }`

```swift
let someName: String? = "heecheol"

if let name = someName {
    print("someName 은 Optional Binding에 의해 해제됩니다. \(name)")
}
// someName 은 Optional Binding에 의해 해제됩니다. heecheol
```    

그리고 여러개의 옵셔널을 하나의 조건으로 걸어줄 수 있습니다.

```swift
let someName: String? = "heecheol"
let someAge: String? = "26"

if let name = someName, let age = someAge, someName != nil && someAge != nil {
    print("someName 은 Optional Binding에 의해 해제됩니다. \(name)")
    print("someAge 은 Optional Binding에 의해 해제됩니다. \(age)")
    print("someName 과 someAge 둘 다 nil 이 아닐 때 출력됩니다.")
}

// someName 은 Optional Binding에 의해 해제됩니다. heecheol
// someAge 은 Optional Binding에 의해 해제됩니다. 26
// someName 과 someAge 둘 다 nil 이 아닐 때 출력됩니다.
```

### 옵셔널 체이닝

옵셔널 체이닝(Optional Chaining) 은 `nil` 일 수도 있는 프로퍼티나 메서드에 질의(query) 하는 과정을 말합니다.
체이닝에 의해 하나라도 `nil` 이 반환된다면 전체의 반환값은 `nil`이 됩니다. 옵셔널 체이닝은 옵셔널 값 뒤에 물음표(?) 를 붙여서 표현합니다.

#### 프로퍼티 접근

```swift
class Parent {
    var child: Child?
}

class Child {
    var name: String = "heecheol"
}

let parent = Parent()

if parent.child?.name != nil {
    print("child 존재")
} else {
    print("child 존재하지 않음")
}

// child 존재하지 않음
```

위의 코드에서 child 는 parent 에 존재하지 않는 `nil` 값이기 때문에 `else` 문의 분기를 따라갑니다.

아래에서는 parent 인스턴스에서 child 를 할당해주고 옵셔널체이닝 하는 과정을 나타냅니다. 

```swift
class Parent {
    var child: Child?
}

class Child {
    var name: String = "heecheol"
}

let parent = Parent()
parent.child = Child()

if let childName = parent.child?.name {
    print("child 존재", childName, parent.child?.name)
} else {
    print("child 존재하지않음")
}
// child 존재 heecheol Optional("heecheol")
```

출력결과를 보면 child 의 name 프로퍼티는 옵셔널이 아님에도 불구하고 옵셔널로 묶여왔습니다. 이는 옵셔널 체이닝에 의해 옵셔널이 아니더라도 옵셔널 값을 갖습니다.
그렇기 때문에 옵셔널 바인딩을 통해 옵셔널을 해제합니다.

#### 메서드 호출

```swift
class Parent {
    var child: Child?
}

class Child {
    var name: String = "heecheol"
    
    func greet() {
        print("안녕하세요. \(self.name)입니다.")
    }
}

let parent = Parent()
//parent.child = Child()

if let childName = parent.child?.greet() {
    print("child 존재", childName, parent.child?.name)
} else {
    print("child 존재하지않음")
}
// child 존재하지않음
```

parent 의 child 프로퍼티는 인스턴스를 할당하지 않았습니다. child 가 없기때문에 `greet()` 메서드 호출에 실패합니다. `child` 를 할당했다면 메서드 호출이 됩니다.


## 참고문서

* [Swift 문서](https://swift.org/)
* [The Swift Language Guide - 한국어](https://jusung.gitbook.io/the-swift-language-guide/)
* [튜플의 고급 활용과 모범 사례 - Out of Bedlam](https://outofbedlam.github.io/swift/2016/04/02/TupleBestPractice/)
