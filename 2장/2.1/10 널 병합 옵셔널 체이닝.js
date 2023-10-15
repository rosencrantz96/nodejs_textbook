// 널 병합 연산자
/*
const a = 0;
const b = a || 3; // || 연산자는 falsy 값이면 뒤로 넘어간다
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어간다
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f); // 0;

const g = undefined;
const h = g ?? 3;
console.log(h); // 3
*/

// 옵셔널 체이닝

const a = {};
a.b; // a가 객체이므로 문제 없음

const c = null;
try {
   c.d;
} catch (e) {
   console.error(e); // TypeError: Cannot read properties of null (reading 'd')
}
c?.d; // 문제 없음

try {
   c.f();
} catch (e) {
   console.error(e); // TypeError: Cannot read properties of null (reading 'f')
}
c?.f(); // 문제 없음

try {
   c[0];
} catch (e) {
   console.error(e); // TypeError: Cannot read properties of null (reading '0')
}
c?.[0]; // 문제 없음
