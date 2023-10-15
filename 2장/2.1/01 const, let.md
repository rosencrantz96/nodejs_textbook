## 스코프

```javascript
if (true) {
   var x = 3;
}
console.log(x); // 3

if (true) {
   const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined
```

`x`는 정상적으로 추력되는데 `y`는 에러가 발생한다

> `var` : 함수 스코프 → if문의 블록과 관계 없이 접근할 수 있다<br>
> `const`, `let` : **블록 스코프** → 블록 밖에서는 변수에 접근할 수 없다

$*$ 블록의 범위 : if, while, for, function 등에서 볼 수 있는 중괄호 사이<br>
→ 함수 스코프 대신 블록 스코프를 사용하며 호이스팅 같은 문제 해결, 코드 관리 수월

## `const`, `let`

`const` : 한 번 값을 할당하면 다른 값을 할당할 수 없다 → 다른 값을 할당하려고 하면 에러 발생<br>
초기화 할 때 값을 할당하지 않으면 에러 발생 → `const`로 선언한 변수를 **상수**라고 부르기도 한다

```javascript
const a = 0;
a = 1;  // Uncaught TypeError: Assignment to constant variable

let b = 0;
b = 1;  // 1

const c; // Uncaught SyntaxEroor: Missing initializer in const declaration
```

자바스크립트 사용 시 한 번 초기화를 했던 변수에 다른 값을 할당하는 경우는 의외로 적다 <br>
→ 따라서 변수 선언 시 기본적으로는 `const`를 사용하고 다른 값을 할당해야 하는 상황이 생겼을 때 `let`을 사용하면 된다
