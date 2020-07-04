---
path: /post/react-함수형-컴포넌트
title: React 함수형 컴포넌트가 뭐길래?
author: 김희철
date: '2020-07-04 15:34:50'
tags:
  - react
draft: true
---

```toc

```

## 함수형 컴포넌트가 궁금하다

컴포넌트는 독립적으로 사용 가능한 단위를 말합니다. 어떤 기능을 수행하는 기능을 위한 컴포넌트, 단순히 UI 표현을 위한 컴포넌트 혹은 그 두개를 합쳐놓은 컴포넌트일 수 있습니다. 리액트에서 컴포넌트를 작성할 때 클래스(Class) 컴포넌트와 함수형(Functional) 컴포넌트로 나눌 수 있는데 [함수형 컴포넌트와 Hooks API 를 이용해 클래스 컴포넌트를 대체할 수 있다고 합니다.](https://ko.reactjs.org/docs/hooks-intro.html)

리액트는 왜 함수형 컴포넌트를 만들게 되었을까요? 클래스 컴포넌트가 왜 등장했는지 살펴보고 함수형 컴포넌트와의 차이점은 무엇이며 얻는 이점은 무엇인지 살펴보겠습니다.

> 코드 예시들은 타입스크립트를 기반으로 작성하고 있습니다.

**목표**

- 클래스 컴포넌트의 이해
- 함수형 컴포넌트의 이해

## 클래스 컴포넌트

리액트에서 컴포넌트들은 render 함수를 필수적으로 구현해야하며 props 나 state 의 변화가 있을 때 호출됩니다.

다음 Main 컴포넌트는 `textA`, `textB` 를 state 로 가지고 있으며 각 버튼은 state 를 변경하고 있습니다. changeTextA 메서드는 `textA` 의 상태를 `AA` 로 한번만 업데이트를 하고 changeTextB 메서드는 `textB` 의 상태를 계속 업데이트를 진행하는 메서드입니다. 렌더링 함수가 호출될 때마다 '렌더링' 이라는 글자를 로그로 남기는 코드입니다.

> setState 는 리액트에서 상태를 업데이트할 때 사용하는 함수이며, 비동기일 수 있는데 이는 리액트가 성능을 위해 여러 업데이트를 한번에 처리할 수 있기 때문입니다. 기존 상태를 기반으로 업데이트할 경우 setState 의 인자로 업데이트 콜백을 넘겨줘야합니다. `(state: IState, props: IProps) => IState` 와 같은 형태의 콜백으로 반환값은 State 입니다. [관련문서 - State를 올바르게 사용하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)

```tsx
import React from 'react'

interface IProps {}

interface IState {
  textA: string
  textB: string
}

class Main extends React.Component<IProps, IState> {
  state: IState

  constructor(props: IProps) {
    super(props)
    this.state = {
      textA: 'A',
      textB: 'B',
    }
  }

  changeTextA() {
    this.setState({
      textA: 'AA',
    })
  }

  changeTextB() {
    this.setState(prevState => {
      return {
        textB: prevState.textB + 'B',
      }
    })
  }

  render() {
    console.log('렌더링')
    return (
      <div>
        <h1>Main</h1>
        <h2>{this.state.textA}</h2>
        <h2>{this.state.textB}</h2>

        <div>
          <button onClick={() => this.changeTextA()}>Change A</button>
          <button onClick={() => this.changeTextB()}>Change B</button>
        </div>
      </div>
    )
  }
}

export default Main
```

### 라이프사이클을 이용한 최적화

Change A 버튼을 계속 누르다보면 의문점이 생깁니다. `textA` 는 상태가 `AA` 로 업데이트 된 이후에 값이 그대로인데 Change A 버튼을 누를때마다 render() 함수를 호출하는것을 볼 수 있습니다.

// GIF //

컴포넌트는 자신이 생성되고 파괴되기까지 일련의 라이프사이클을 갖습니다. 리액트 컴포넌트도 라이프사이클을 갖고 있는데 라이프사이클 훅들중 Props 나 State 가 변경됐을 때 렌더링을 할지 판단해주는 [shouldComponentUpdate 라이프사이클 훅](react-life-cycle#shouldcomponentupdatenextprops-nextstate)을 이용해 A 가 변경되지 않았을 때는 렌더링되지 않게 최적화를 진행합니다.

Main 코드에 다음 코드를 넣습니다.

```tsx
// ...

shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const changedTextA = this.state.textA !== nextState.textA
    const changedTextB = this.state.textB !== nextState.textB

    return changedTextA || changedTextB
  }

// ...
```

위의 코드는 첫번째 인자로 업데이트 될 props 를 받고, 두번째 인자로 업데이트 될 state 를 받습니다. 그리고 textA 와 textB 를 다음 상태의 값과 비교해 렌더링을 할지 여부를 반환해줍니다. 만약 렌더링이 필요하다면 true 를 반환해주고 렌더링이 필요하지 않다면 false 를 반환합니다.

위의 조건은 textA 의 변경점이 있거나 textB 의 변경점이 있다면 렌더링을 해주는 것을 볼 수 있습니다.

위의 코드를 넣은 상태로 Change A 버튼을 누른다면 넣기전 코드와는 다르게 render() 함수를 호출하지 않는 것을 볼 수 있습니다.

// GIF //

### 순수 컴포넌트(Pure Component)를 이용한 최적화

shouldComponentUpdate 를 이용하면 컴포넌트의 세세한 부분들까지 개발자가 비교해 렌더링 여부를 판단할 수 있다는 장점이 있지만 세세하지 않다면 조금 번거로울 수 있는 작업입니다. 리액트는 이를 위해 순수 컴포넌트(Pure Component) 를 제공합니다. [순수 컴포넌트는 props 와 state 를 이용해 얕은 비교를 하고 변화가 있다면 렌더링을 진행합니다.](https://ko.reactjs.org/docs/react-api.html#reactpurecomponent)

Main 코드에서 React.Component 를 상속받던 부분을 React.PureComponent로 다음과 같이 변경해봅니다.

```tsx
import React from 'react'

interface IProps {}

interface IState {
  textA: string
  textB: string
}

/* PureComponent 를 상속 */
class Main extends React.PureComponent<IProps, IState> {
  state: IState

  constructor(props: IProps) {
    super(props)
    this.state = {
      textA: 'A',
      textB: 'B',
    }
  }

  changeTextA() {
    this.setState({
      textA: 'AA',
    })
  }

  changeTextB() {
    this.setState(prevState => {
      return {
        textB: prevState.textB + 'B',
      }
    })
  }

  render() {
    console.log('렌더링')
    return (
      <div>
        <h1>Main</h1>
        <h2>{this.state.textA}</h2>
        <h2>{this.state.textB}</h2>

        <div>
          <button onClick={() => this.changeTextA()}>Change A</button>
          <button onClick={() => this.changeTextB()}>Change B</button>
        </div>
      </div>
    )
  }
}

export default Main
```

순수 컴포넌트로 작성된 Main 컴포넌트의 동작도 동일하게 최적화된 것을 볼 수 있습니다.

// GIF //

## 함수형 컴포넌트

함수형 컴포넌트에 들어가기 앞서 단방향 데이터 흐름에 대해 알아봅니다.
불변성, 순수함수 (a, b) => a + b 라는걸 설명하고 HOF 에 대한 간단한 개념 설명 후
함수형컴포넌트 설명

React Hooks 와 커스텀 훅
