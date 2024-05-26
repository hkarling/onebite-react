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
