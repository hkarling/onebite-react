# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## State로 상태 관리하기

- State

  - 현재 가지고 있는 형태나 모양을 정의
  - 변화할 수 있는 동적인 값
  - 각 component들은 각각의 State를 가질 수 있다
  - State를 갖는 React component는 이에 따라 다른 UI를 렌더링할 수 있다 - 상태변화 자동으로 감지
    - Re-reder, Re-redering
  - 하나의 component에 여러 state를 가질 수 있다

- State의 사용 이유

  - state를 사용하지 않고 javascript 변수를 사용하는 경우 re-redering이 일어나지 않는다

- Component rerendering 조건
  1. State 변경 시
  2. props 변경 시
  3. 부모 component가 리렌더링 시

## useRef 사용하기

- useRef
  - 새로운 Reference 객체를 생성하는 기능
  - 컴포넌트 내부의 변수 사용
  - useState와는 달리 어떠한 경우에도 리렌더링을 유발하지 않음
  - 컴포넌트 내부의 요소들을 조작
- 사용이유
  - 단순 pure 자바스크립트로 선언된 변수들은 컴포넌트 내부 함수들에 사용되는 변수의 경우 리렌더링 되면서 초기화 될 수 있다
  - 컴포넌트 바깥에서는 변수 선언을 해서는 컴포넌트 간의 간섭이 있을 수 있어 이를 방지

### 참고

[https://one-step-js.hyobb.com/2e6337b2-0a55-4488-908c-1d08baa20d23]

## React Hooks

- React Hooks
  - 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드 모음
  - 2017년도 이전에는 function component는 UI 렌더링만 할 수 있었음
  - class component는 모든 기능을 사용할 수 있지만 문법이 복잡함
  - useState, useRef 등도 hook의 일종임
  - react hooks는 use라는 접두사가 붙게 된다
  - 함수 컴포넌트 내부에서망 호출됨
  - 조건문, 반복문 내부에서는 호출되지 않음
  - 커스텀 hook도 만들 수 있다
