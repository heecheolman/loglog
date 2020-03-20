---
path: /post/swift기초-변수와-상수-타입1
title: Swift기초 - 변수와 상수, 타입 첫번째
author: 김희철
date: '2020-03-20 21:12:32'
tags:
  - swift
draft: false
---

```toc
```

## 변수
 
변수는 변경 가능한(Mutable) 값을 할당합니다. Swift 에서는 `var` 키워드를 통해 변수를 생성합니다. 변수는 초기화 이후에도 다른 값을 할당 할 수 있습니다.
 
```swift
var name = "heecheolman"
print(name) // heecheolman
name = "hello heecheolman"
print(name) // hello heecheolman
```
 
## 상수

상수는 변경 불가능한(Immutable) 한 값입니다. `let` 키워드를 통해 상수를 생성합니다. 상수는 선언과 동시에 초기화를 진행해야 합니다. 선언 이후 재할당은 허용하지 않습니다.

```swift
let name = "heecheolman"
name = "hello" 
// 에러: 변경 불가능한 값이어서 재할당 할 수 없습니다.
```

```swift
let name
name = "heecheolman"
// 에러: 선언 이후에 초기화는 허용하지 않습니다.
```

## 타입

Swift 는 타입안정성을 갖습니다. 모든 상수나 변수에 대한 타입은 컴파일시에 결정되므로 다른 타입의 값을 넣을 수 없습니다. Swift 에서 변수 및 상수에 타입을 지정하는 방법입니다.

```swift
var 변수명: 타입 = 값
let 변수명: 타입 = 값

/* ex)

var name: String = "HeeCheolMan"
let firstName: String = "Kim"

*/
``` 

### Bool

`true` 혹은 `false` 값을 갖을 수 있는 타입입니다. 타입을 지정해주지 않고 `true`, `false` 값을 할당하면 자동으로 Bool 타입으로 결정됩니다.

```swift
var isActive: Bool = false
isActive = !isActive // false -> true
```

### Numeric

숫자 리터럴에 대한 타입이고, 대표적으로 Int 타입이 존재합니다.

#### Int

Int 타입을 지정해주면 32비트 플랫폼에서 Int 의 크기는 Int32와 같고, 64비트 플래폼에서 Int 의 크기는 Int64와 같습니다. Int 형은 음수값도 갖을 수 있습니다.

```swift
var min = Int.min
var max = Int.max
print(min, max) // -9223372036854775808 9223372036854775807
// 참고: 64비트 플랫폼
```

> 그 외에도 Int8, Int16 가 존재합니다. 각각 2의 8제곱, 2의 16제곱 만큼의 크기를 갖습니다. 특별히 메모리 크기를 고려하는 상황이 아니라면 Int 형으로 사용하는 것이 낫습니다.


#### UInt

Unsigned Int 의 약자로 부호가 없는 0과 양수만을 갖는 타입입니다. UInt도 Int와 마찬가지로 비트수를 명시하지 않는이상 플랫폼에 따라 UInt32 와 UInt64로 자동으로 결정됩니다.

0과 양수만을 갖는 타입이므로 Int 형에서 음수만큼 가졌던 크기만큼 양수에 더해줘서 max값이 증가합니다.

```swift
var min = UInt.min
var max = UInt.max
print(min, max) // 0 18446744073709551615
```

#### Float, Double

부동소수점에 대한 소수단위의 타입입니다. 부동소수점에 대한 값을 할당할 경우 명시적으로 Float을 지정하지 않는 이상 자동으로 Double 타입에 할당됩니다.

```swift
var value = 0.12
var value2: Float = 0.12

print(type(of: value)) // Double
print(type(of: value2)) // Float
```

### Character

하나의 문자에 대한 타입입니다. `""` 큰 따옴표로 묶어 표현합니다. 특수문자를 유니코드로 표현할 수도 있습니다.

```swift
var char: Character = "c"
var emoji: Character = "🙊"
var unicode: Character = "\u{1F929}"
print(char, emoji, unicode) // c 🙊 🤩
```

*자소가 분리된 한글의 개별 유니코드들을 나열하면 하나의 Character 로 취급합니다.*
```swift
let precomposed: Character = "\u{D55C}"                  // 한
let decomposed: Character = "\u{1112}\u{1161}\u{11AB}"   // ᄒ, ᅡ, ᆫ
print(precomposed, decomposed) // 한 한

```

### String

문자열에 대한 타입입니다. 큰 따옴표로 표현하며 escape 문자는 `\` 입니다. 

```swift
var string: String = "\"안녕하세요\" 라고 말했습니다."
print(string) // "안녕하세요" 라고 말했습니다.
```

#### 여러줄 문자열

문자열을 여러줄 입력하고 싶은 경우에 세 개의 큰 따옴표(`"""`) 로 묶어줍니다. 줄바꿈과 모든 공백이 표현됩니다.
만약, 줄바꿈하고 싶지 않은 행이 있다면 마지막에 `\` 문자를 붙여주면 줄바꿈을 하지 않습니다.

```swift
let sentence: String = """
안녕하세요 김희철입니다.
안
  녕
   하세\
요
"""
print(sentence)

/*
안녕하세요 김희철입니다.
안
  녕
   하세요
*/
```

#### 여러줄 + 자동 escape

여러줄의 문자열에 escape 문자를 입히지 않아도 특수문자를 그대로 표현해 줄 수 있습니다. 세 개의 큰 따옴표 양옆에 `#` 을 붙여주면됩니다.

> 여러줄이 아니라 단순 문자열에서 '#' 을 붙여도 자동으로 escape 됩니다. 
>
> `#""안녕하세요""#`  -> "안녕하세요" 

```swift
let sentence = #"""
특수문자를 escape 하지 않아도 표현됩니다 """"\\"
"""#

print(sentence)
// 특수문자를 escape 하지 않아도 표현됩니다 """"\\"
```

#### 문자열 연결

문자열끼리 연결시 `+` 연산자로 연결 가능하고, `String.append()` 메서드를 이용해 합치는것도 가능합니다.

`String.append()` 는 기존 값에 문자열을 더해줍니다. 
```swift
var firstName: String = "Kim"
let lastName: String =  "HeeCheol"

firstName.append(lastName) // firstName 에 lastName 을 이어 붙임

print(firstName) // KimHeeCheol
```

`+` 와 `+=` 연산자를 이용해 더할 수 있습니다.
```swift
var firstName: String = "Kim"
let lastName: String =  "HeeCheol"

print(firstName + lastName) // KimHeeCheol

firstName += lastName

print(firstName) // KimHeeCheol
```

#### 여러줄 문자열 연결

여러줄 문자열을 연결도 위와 동일 방법입니다. 유의해야 할 점은 여러줄 문자열의 마지막을 띄어주지 않으면 다음 문자열이 연결될 때 같은 행에 이어붙여집니다.  

```swift
var firstName: String = """
안녕하세요
heecheolman입니다.
"""
let lastName: String =  "HeeCheol"

firstName.append(lastName)

print(firstName)
/*
안녕하세요
heecheolman입니다.HeeCheol
*/
```

#### 문자열 보간(Interpolation)

문자열 내에서 표현식을 통해 값을 표현하는 방법입니다. `\(표현식)`  을 이용해 문자열 내에서 계산한 값을 표현할 수 있습니다.

```swift
print("1 + 2 = \(1 + 2)") // 1 + 2 = 3
```

모든 문자열에 대해 escape 하는 경우라면 `\#(표현식)` 을 이용합니다.
```swift
print(#""1 + 2 = \#(1 + 2)""#) // "1 + 2 = 3"
```

#### 문자 개수

문자열 또는 문자에서 길이가 얼마인지 알려면 `String.count` 를 이용합니다.
```swift
let word = "heecheol"
print(word.count) // 8
```

#### 개별 문자 접근하기

Swift 에서 문자열에 접근할 때는 정수형 Int 로 접근하는 것이 아니라 String 의 메서드 및 속성을 사용합니다. 문자열의 범위 이외를 가져오려하면 런타임에러가 발생합니다.

* `String.startIndex`: 첫번째 character 접근
* `String.endIndex`: 두번째 character 접근
* `String.index()`: 문자열의 특정 위치에 있는 문자를 가져옵니다.
  * `String.index(before:)`: 특정 위치의 이전 문자를 가져옵니다.
  * `String.index(after:)`: 특정 위치의 이후 문자를 가져옵니다.
  * `String.index(_:offsetBy:)`: 특정 위치에서 특정위치만큼 떨어져있는 문자를 가져옵니다. 

```swift
let name = "heecheolman!"

print(
    name[name.startIndex], // h
    name[name.index(before: name.endIndex)], // !
    name[name.index(after: name.startIndex)], // e
    name[name.index(name.startIndex, offsetBy: 4)] // h
)
```

모든 문자열을 순회할 때는 `String.indices` 로 순회합니다.
```swift
for index in name.indices {
    print(name[index], terminator: "-")
}
// h-e-e-c-h-e-o-l-m-a-n-!-
```

## 참고문서

* [Swift 문서](https://swift.org/)
* [yagom's Swift Basic](https://yagom.github.io/swift_basic/contents/02_data_types/)
