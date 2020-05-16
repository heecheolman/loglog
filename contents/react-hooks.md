---
path: /post/react-hooks
title: React Hooks
author: 김희철
date: "2020-05-03 21:54:35"
tags:
  - react
draft: false
---

```toc

```

## 소개

React Hooks 는 React 16.8 버전에 새로 도입된 기능입니다. Hook 은 어떤 일련의 과정중에 일어나는 시점을 말하는데 React Hooks 는 클래스 컴포넌트에서 사용되던 LifeCycle API 를 대체할 수 있습니다.

> 기존의 클래스 컴포넌트를 함수형 컴포넌트와 React Hooks 로 대체해야하는 것을 뜻하진 않습니다. [React 는 클래스 컴포넌트를 없앨 계획은 없다](https://ko.reactjs.org/docs/hooks-intro.html#no-breaking-changes)고 밝혔습니다.

## React Hooks 를 꼭 사용해야하나요?

함수형 컴포넌트의 React Hooks 는 클래스 컴포넌트를 대체할 수 있지만 필수가 아니고 선택적으로 적용할 수 있습니다. 선택적인 이유는 기존의 클래스컴포넌트에서 사용하던 props, render 등의 개념들을 바꿔서 적용하는것이 아니기 때문입니다.

## 무엇이 달라졌나요?

클래스 컴포넌트에서는 컴포넌트의 재사용성에 대한 불편함이 있었습니다.

리액트는 컴포넌트에 재사용 가능한 로직을 붙이는 방법을 제공하지 않아 render props 나 HOC(Higher Order Component) 등 여러가지 패턴이 등장했지만 클래스 컴포넌트의 LifeCycle 에서는 데이터를 가져(fetch)오거나 구독(subscribe) 하는 등과 같은 행동과 관련된 로직들이 여전히 존재했고 이는 컴포넌트에 여러 의존성이 섞여있어 코드도 복잡해지며 테스트도 어려웠습니다.

그래서 React Hooks 는 클래스 컴포넌트에서 사용했던 LifeCycle 메서드에 초점을 두지 않고 **로직의 재사용성에 초점을 두었습니다.**

> render props 패턴과 HOC 패턴은 다음에 다루도록 합니다.

## 주요 Hooks

주로 사용되는 hooks 를 살펴보겠습니다.

- useState
- useEffect
- useCallback
- useMemo

### useState

```jsx
const [state, setState] = useState(InitialState)
```

useState 는 상태를 유지하는 값과 상태를 업데이트하는 함수를 반환합니다. useState 의 인자로 최초 렌더링시 적용할 상태를 넘겨줄 수 있습니다.

setState 는 비동기적으로 작동합니다. 일종의 '요청' 과 같다고 보면 되는데 만약 이전의 상태를 기반으로 업데이트를 하고 싶다면 setState 의 인자로 콜백함수를 등록하면됩니다.

> setState 는 새로운 state 를 받아서 컴포넌트 리렌더링 큐에 등록하기 때문에 동기적일 것이라고 보장할 수 없습니다.

```jsx
/* 이전 값을 prevState 로 받고 nextState 를 return */

setState(prevState => {
  // ...
  return nextState
})
```

초기 상태값에 대해 비용이 많이드는 작업이 있다면 최초 렌더링시에만 실행되게 useState 의 첫번째 인자로 콜백함수를 넘겨줄 수 있습니다.

```jsx
const [state, setState] = useState(() => { ... })
```

#### 기본 예제 코드

```jsx
import { useState } from "react"

const SomeComponent = () => {
  const [text, setText] = useState("")
  return <input value={text} onChange={e => setText(e.target.value)} />
}

export default SomeComponent
```

### useEffect

```jsx
import React from "react"

useEffect(didUpdate)
```

useEffect는 클래스 컴포넌트에서 사용하던 `componentDidMount`, `componentDidUpdate`, `componentWillUnMount` 을 합쳐놓았습니다. Effect(변형, 구독, 타이머 등) 를 발생시키기 때문에 함수의 본문안에서 실행하지 않고 전달한 함수를 이용해 업데이트합니다.

기본적으로 useEffect 는 **모든 렌더링이 끝난 이후에 실행됩니다.**

> 정확히는 [브라우저의 렌더링](https://d2.naver.com/helloworld/59361)에서 Layout 단계와 Painting 단계가 끝난 이후에 발생합니다.

```jsx
/**
  SomeComponent 가 렌더링 된 이후 useEffect 가 실행됩니다.

  render
  useEffect
*/
import React, { useEffect } from "react"

const SomeComponent = () => {
  useEffect(() => {
    console.log("useEffect")
  })
  console.log("render")
  return <div>render</div>
}

export default SomeComponent
```

useEffect는 두 번째 인자로 의존성을 갖는 값을 배열로 넣어줄 수 있습니다. 빈 배열을 준다면 기본(모든 렌더링이 끝난 이후 한 번)으로 적용되고, effect 가 종속되어 있는 값들을 넣게되면 그 값들이 변경될 때마다 effect 가 실행됩니다.

만약, effect 가 실행될 때 의존되는 값들이 배열로 오지 않는다면 effect가 실행될 때 의존되는 값들은 초기에 할당 된 값들을 가지고 있을 거에요.

```jsx
useEffect(() => {
  console.log("useEffect")
}, [dep1, dep2])
// dep1, dep2 중 하나라도 값이 변경된다면 effect 실행
```

### useMemo

useMemo 는 이전에 계산했던 값을 메모리에 저장해두고 다시 사용하는 '메모이제이션' 기법을 사용합니다. 특정 값이 변경됐을 때 계산을 다시 해야한다면 두번째 인자로 값들을 넘겨줄 수 있습니다.

```jsx
const momoizedValue = useMemo(
  () => {
    // 계산
    return value
  },
  [
    /* deps */
  ]
)
```

### useCallback

useCallback 은 '메모이제이션' 된 콜백을 반환합니다. 컴포넌트의 props 나 state 가 변경됐을 때 리렌더링 되기 마련인데, 그때마다 함수를 다시 생성하는게 아니라 메모해놓고 메모된 함수를 사용합니다. 두번째 인자로는 메모이제이션된 콜백에서 사용할 값(의존성)들을 넣어줍니다. 그렇게되면 값이 변경될 때 useCallback 은 새로운 콜백을 반환할 겁니다.

```jsx
const memoizedCallback = useCallback(() => {
  // ...
}, [deps])
```

## 참고문서

- [React - Hooks API Reference](https://ko.reactjs.org/docs/hooks-reference.html)
