# React

## React의 기술적인 특징

### 1. 컴포넌트를 기반으로 UI를 표현한다

- 중복코드 정리
- 수정의 용이

### 2. 화면 업데이트 구현이 쉽다

- 업데이트 : 상용자의 행동(클릭, 드래그)에 따라 웹페이지가 스스로 모습을 바꿔 상호작용하는 것
- React는 선언형 프로그래밍으로 작성한다
  - 선언형 프로그래밍 : 과정은 생략하고 목적만 간결히 명시하는 방식 reactjs
  - 명령형 프로그래밍 : 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식 javascript
- React는 컴포넌트 단위로 개발하게 되는데 각각의 컴포넌트는 state라는 컴포넌트의 상태를 설정하는 변수가 있으며 이를 변조하여 UI를 변경시킬 수 있다.

### 3. 화면 업데이트가 빠르게 처리된다

#### 브라우저의 렌더링 과정 (Critical Rendering Path)

```
HTML -> DOM   -> Render Tree -> Layout -> Painting
CSS  -> CSSOM ->
```

- DOM (Document Object Model) : 요소들의 위치, 배치, 모양에 관한 모든 정보
- CSSOM (CSS Object Model) : 요소들의 스타일과 관련된 모든 정보
- Render tree : 웹 페이지의 청사진
- Layout : 요소의 배치를 잡는 작업
- Painting : 실제로 화면에 그려내는 과정

#### 화면의 업데이트

- JavaScript가 DOM을 수정하면 업데이트가 발생.
- HTML -> DOM -> Render Tree -> Layout -> Painting 를 다시 작업
- Layout (reflow), Painting (repaint) 은 꽤나 오래걸리는 과정이다. 반복적인 작업 시 과부하가 심하게 걸림.

```html
<!-- Super BAD Practice: DOM을 3000번 수정 -->
<script>
  function onClick() {
    const $ul = document.getElementById("ul");
    for (let i = 0; i < 3000; i++) {
      $ul.innerHTML += `<li>${i}</li>`;
    }
  }
</script>
<body>
  <button onclick="onClick()">리스트 추가하기</button>
  <ul id="ul"></ul>
</body>
```

```html
<!-- Good Practice: DOM을 한 번만 수정 -->
<script>
  function onClick() {
    const $ul = document.getElementById("ul");
    let list = "";

    for (let i = 0; i < 3000; i++) {
      list += `<li>${i}</li>`;
    }
    $ul.innerHTML = list;
  }
</script>
<body>
  <button onclick="onClick()">리스트 추가하기</button>
  <ul id="ul"></ul>
</body>
```

- 이론은 알지만.. 서비스가 커질수록 적용하기가 쉽지 않다..
- so React가 자동으로 해주게 둠. (Feat. Virtural DOM)

#### Virtual DOM

- DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다
- React는 업데이트가 발새앟면 실제 DOM을 수정하기 전에 이 가상 복제판 DOM에 먼저 반영해본다.
