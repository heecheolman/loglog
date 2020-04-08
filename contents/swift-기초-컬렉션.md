---
path: /post/swift-기초-컬렉션
title: Swift 기초 - 컬렉션
author: 김희철
date: '2020-03-22 20:59:11'
tags:
  - swift
draft: false
---

```toc
```

Swift 에서는 콜렉션 타입으로 세가지가 있습니다. 

![Collection-Swift](./images/swift-collection.png)

## Array

같은 데이터타입을 순차적으로 나열한 방식입니다. 

### 배열의 초기화

배열을 초기화할 때 `Array<Type>()` 을 이용해 초기화할 수 있고 축약형으로 `[Type]()` 으로 초기화할 수 있습니다.

```swift
var nameList: [String] = [String]()
var nameList2: Array<String> = Array<String>() 
```

### repeating 과 count 를 이용한 배열 생성

Array 의 repeating 메서드와 count 메서드를 이용해 배열을 초기화합니다.

```swift
var nameList = Array(repeating: "", count: 5)
print(nameList)
// ["", "", "", "", ""]
```

### 리터럴로 생성

값을 직접 넣는 방식으로 배열을 생성할 수 있습니다.

```swift
var list: [String] = ["a", "b", "c", "d"]
```


### 배열의 합성

같은 타입으로 정의된 배열끼리 `+` 연산자를 통해 합쳐진 새로운 배열을 얻어낼 수 있습니다.

```swift
var list1 = Array(repeating: 1, count: 4)
var list2 = Array(repeating: 2, count: 4)
print(list1 + list2)
// [1, 1, 1, 1, 2, 2, 2, 2]
```

### 배열의 길이 확인 

`.count` 를 이용해 배열의 길이를 확인할 수 있습니다.

```swift
var list: [String] = ["a", "b", "c"]
print(list.count) // 3
```

### 배열이 비어있는지 확인

`.isEmpty` 는 배열이 비어있는지 `Bool` 값으로 return 해줍니다.

```swift
var list: [String] = ["a", "b", "c"]
print(list.isEmpty) // false
```  

### 배열에 요소 추가하기

`.apeend(value)` 를 이용해 추가하는 방법과 `+=` 복합연산자를 이용해 추가하는 방법입니다.

```swift
var list: [String] = []
list.append("a")
list += ["b"]

print(list) // ["a", "b"]
```

### 배열의 요소에 접근

C++, Java, Javascript 처럼 배열의 `index` 로 접근하는 방식이 있습니다.

```swift
var list: [String] = ["a", "b", "c"]
print(list[0]) // a
```

특정 위치나 범위를 지정해 접근할 수도 있습니다. `list` 의 0번째부터 2번째까지 `"z"` 로 치환합니다.

```swift
var list: [String] = ["a", "b", "c", "d", "e", "f"]
list[0...2] = ["z"]
print(list) // ["z", "d", "e", "f"]
```

### 배열의 특정 위치에 추가, 삭제

`.insert(_newElement, at: Int)` 메서드를 이용해 추가하는 방법입니다.

```swift
var list: [String] = ["a", "b", "c", "d", "e", "f"]
list.insert("startA", at: 0)
print(list) // ["startA", "a", "b", "c", "d", "e", "f"]
```

`.remove(at: Int)` 메서드를 이용해 특정위치의 원소를 제거합니다.

```swift
var list: [String] = ["a", "b", "c", "d", "e", "f"]
list.remove(at: 0)
print(list) // ["b", "c", "d", "e", "f"]
```

`.removeLast()` 와 `.popLast()` 는 마지막 원소를 제거후 return 합니다. 다른점이라하면 `.popLast()` 는 옵셔널타입을 return 해줍니다.
`removeLast()` 는 빈 배열에서 호출하게되면 런타임 에러를 뱉게됩니다. `popLast()` 는 빈배열에서 호출 시 `nil` 값을 얻게됩니다. 상황에따라 적절하게 사용해야 할 것 같습니다.

```swift
    var list: [String] = []
/* 런타임에러 발생
    var lastElement = list.removeLast()
    print(lastElement)
*/
    var lastEle = list.popLast()
    print(lastEle) // nil
``` 

### 배열의 순회

`for in` 구문을 이용해 배열을 순회할 수 있습니다. 배열의 `index` 가 필요한경우 `.enumerated()` 메서드를 이용해 순회합니다.

```swift 
var list = ["a", "b", "c", "d"]
for (index, item) in list.enumerated() {
    print("index: \(index), item: \(item)")
}
/*
    index: 0, item: a
    index: 1, item: b
    index: 2, item: c
    index: 3, item: d
*/
```

## Set

Set(집합)은 순서가 없는 중복되지 않는 값들의 컬렉션입니다. 하나의 집합에는 하나의 타입만 허용됩니다. 스위프트의 `Hashable` 프로토콜을 따르고 있어야만 Set 컬렉션으로 담을 수 있습니다. 
프로토콜에 대해서는 이후에 다루도록 하겠습니다. 스위프트의 거의 모든 자료형들 (Int, Bool, String, Double) 은 `Hashable` 프르토콜을 따르고 있기 때문에 Set 으로 담아둘 수 있습니다.

### 빈 집합 생성

`Set<Type>()` 을 이용해 빈 집합을 생성할 수 있습니다. `()` 괄호 안에 `[]` 배열 표현식을 넣어서도 가능합니다. 그리고 타입을 Set 으로 지정을 해줬다면 `Set<Type>` 키워드를 생략해 선언할 수 있습니다. 

```swift
var stringSet: Set<String> = Set<String>()
var stringSet2: Set<String> = Set<String>([])
var set: Set<String> = []
```

### 리터럴을 넣어 집합 생성

리터럴을 갖는 집합을 생성하는 방법입니다. `[value1, value2, value3, ...]` 로 생성합니다.

```swift
var set: Set<String> = Set<String>(["a", "b", "c"])
print(set) // ["a", "b", "c"]
```

### 빈 집합인지 확인

배열과 동일하게 `.isEmpty` 를 이용해 `Bool` 값을 얻어 낼 수 있습니다. 

```swift
var set: Set<String> = Set<String>(["a", "b", "c"])
print(set.isEmpty) // false
```

### 집합의 요소 추가

`.insert(_:)` 메서드를 이용해 집합의 원소를 추가합니다. 집합은 배열과 비슷해보이지만 순서가 보장되지 않을 수 있습니다.

```swift
var set: Set<String> = Set<String>()
set.insert("a")
print(set) // ["a"]
```

### 집합의 특정 요소 존재 여부

집합에 특정 원소가 존재하는지 확인하는 메서드는 `.contains(_:)` 로 확인하고 return 은 `Bool` 입니다. 

```swift
var set: Set<String> = ["a", "b", "c"]
print(set.contains("b")) // true
```

Set 에 들어있는 요소의 개수는 `.count` 를 이용해 얻어냅니다.

```swift
var set: Set<String> = ["a", "b", "c"]
print(set.count) // 3
```

### 집합의 요소 제거

`.remove(_:)` 메서드를 이용해 집합 내에 요소를 찾아 제거합니다. 이 때 return 값은 옵셔널입니다. 옵셔널 바인딩을 이용해 옵셔널을 해제합니다.

```swift
var set: Set<String> = ["a", "b", "c"]
if let getC = set.remove("c") {
    print(getC) // "c"
}
```

전체를 제거하고싶은 경우 `.removeAll()` 메서드를 이용해 제거해줍니다. return 이 `void` 타입이므로 값을 반환하지 않습니다.

```swift
var set: Set<String> = ["a", "b", "c"]
set.removeAll()
```

### 집합의 순회

Set 에서도 배열과 동일하게 `for in` 문을 이용해 순회합니다. 만약 `index` 를 이용해 순회하고 싶다면 `Set.indces` 를 이용합니다.

```swift
var set: Set<String> = ["a", "b", "c"]
for item in set {
    print(item)
}
/*
    a
    b
    c
*/

for index in set.indices {
    print(set[index])
}
/*
    a
    b
    c
*/
```

### 집합 연산

![집합연산 이미지](https://docs.swift.org/swift-book/_images/setVennDiagram_2x.png)

* `A.intersectio(B)`: A와 B 사이의 교집합
* `A.symmetricDifference(B)`: A와 B 사이의 차집합
* `A.union(B)`: A와 B 의 합집합
* `A.subtracting(b)`: A - B 집합

```swift
var aSet: Set<String> = ["a", "b", "c", "d"]
var bSet: Set<String> = ["b", "c", "d", "e"]

print(aSet.intersection(bSet)) // ["c", "d", "b"]
print(aSet.symmetricDifference(bSet)) // ["e", "a"]
print(aSet.union(bSet)) // ["c", "d", "e", "b", "a"]
print(aSet.subtracting(bSet)) // ["a"]
```

### 집합 동등 비교

![집합동등비교 이미지](https://docs.swift.org/swift-book/_images/setEulerDiagram_2x.png)

* `==`: 서로다른 집합이 같은지 확인합니다.
* `A.isSuperset(of: B)`: A가 B를 포함하는 슈퍼셋인지 여부
* `A.isSubSet(of: B)`: A가 B에 포함되는 서브셋인지 여부
* `A.isDisJoint(with: B)`: A와 B가 서로 겹치지 않는지 여부 

```swift
var aSet: Set<String> = ["a", "b", "c", "d"]
var bSet: Set<String> = ["b", "c", "d"]
var cSet: Set<String> = ["x", "y", "z"]
var dSet: Set<String> = ["x", "y", "z"]

print(cSet == dSet) // true
print(aSet.isSuperset(of: bSet)) // true
print(bSet.isSubset(of: aSet)) // true
print(bSet.isDisjoint(with: cSet)) // true
```

## Dictionary

**Key-Value** 로 갖는 컬렉션 타입으로 동일한 타입의 Value 를 저장합니다. 배열과는 다르게 순서가 없는것이 특징이고 `Key` 는 스위프트의 `Hashable` 프로토콜을 따라야합니다.
 
### 빈 사전 만들기

`empty` 는 타입을 명시적으로 지정해줬고, 축약형으로 `empty2` 처럼 선언할 수 있습니다.

```swift
var empty: Dictionary<String, Int> = [String: Int]()
var empty2 = [String: Int]()
print(empty.count, empty2.count) // 0, 0
```

### 리터럴값을 갖는 사전 만들기

`[Key1: Value1, Key2: Value2, Key3: Value3]` 형태로 리터럴을 갖는 사전으로 선언할 수 있습니다.

이후에 별도의 타입없이 `[:]` 로 할당하면 비어있는 사전으로 초기화됩니다. 

```swift
var dictionary = [
    "A": "a",
    "B": "b"
]

print(dictionary.count) // 2

dictionary = [:]
print(dictionary.count) // 0
```

### 사전의 값 접근

`사전명[Key]` 를 이용해 `Key` 에 등록된 `Value` 를 얻어낼 수 있습니다. 

등록된 `Key` 가 있다면 옵셔널 값을 return 하고 `Key` 가 없다면 `nil` 을 return 합니다. 옵셔널 바인딩을 통해 옵셔널을 해제해줍니다.

```swift
var dictionary = [
    "A": "a",
    "B": "b"
]

if let getA = dictionary["A"] {
    print(getA) // "a"
}

print(dictionary["Z"]) // nil
```

### 사전의 값 업데이트 

`사전명[Key] = Value` 로 값을 업데이트하는데 이미  `Key` 가 존재한다면 `Value` 를 새로운 값으로 업데이트하고, 
`Key` 가 존재하지 않다면 새로운 `Key` 에 `Value` 를 등록합니다.

```swift
var dictionary = [
    "A": "a",
    "B": "b"
]

dictionary["B"] = "bb"
print(dictionary) // ["B": "bb", "A": "a"]
dictionary["C"] = "c"
print(dictionary) // ["B": "bb", "C": "c", "A": "a"]
```

`.updateValue(_:forKey:)` 메서드를 이용해서 키를 업데이트하거나 설정할 수도 있습니다.
 만약 키가 이미 존재한다면 이전의 값을 return 해주고, 키가 없어서 새롭게 등록했다면 `nil` 이 return 됩니다.
 
```swift
var dictionary = [
    "A": "a",
    "B": "b"
]

if let oldValue = dictionary.updateValue("AA", forKey: "A") {
    print(oldValue) // a
    print(dictionary) // ["A": "AA", "B": "b"]
}

let oldValue2 = dictionary.updateValue("c", forKey: "C")
print(oldValue2) // nil
```

### 사전의 값 제거

등록된 `Key` 를 제거하고싶다면 `Key` 에 해당되는 값을 `nil` 로 할당해주면 사라집니다.

그리고 `removeValue(forKey:)` 메서드를 이용해 제거할 수도 있습니다. 
메서드를 이용하면 `Key` 가 존재하는 경우 이전 값을 옵셔널로 return 해주고, `Key` 가 존재하지 않으면 `nil` 을 return 합니다.

```swift
var dictionary = [
    "A": "a",
    "B": "b"
]

dictionary["A"] = nil
print(dictionary) // ["B": "b"]

if let oldValue = dictionary.removeValue(forKey: "B") {
    print(oldValue) // b
}

let oldValue2 = dictionary.removeValue(forKey: "Z")
print(oldValue2) // nil
```

### 사전 순회

`Key-Value` 로 등록된 사전을 `for in` 문을 이용해 반복할 수 있습니다. 각 항목은 Tuple 로 반환되며 `(key, value)` 로 분해할 수 있습니다.

```swift
var dictionary = [
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d"
]

for (key, value) in dictionary {
    print("key: \(key), value: \(value)")
}
/*
    key: D, value: d
    key: B, value: b
    key: C, value: c
    key: A, value: a
*/

```

사전의 `Key` 또는 `Value` 들만 별도로 순회도 가능합니다. 각각 `.keys`, `.values` 속성을 통해 접근할 수 있습니다.

```swift
var dictionary = [
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d"
]

for key in dictionary.keys {
    print(key)
}

for value in dictionary.values {
    print(value)
}
/*
    C
    B
    D
    A
    c
    b
    d
    a
*/
```

## 참고문서

* [Swift 문서](https://swift.org/)
* [The Swift Language Guide - 한국어](https://jusung.gitbook.io/the-swift-language-guide/)
