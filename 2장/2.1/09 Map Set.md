ES2015에는 새로운 자료구조들이 추가되었다

그 중 자주 쓰이는 것은 Map과 Set

Map은 객체와 유사하고 Set은 배열과 유사하다

## Map

```javascript
const m = new Map();

m.set('a', 'b'); // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값을 키로 사용 가능
const d = {};
m.set(d, 'e'); // 객체도 된다

m.get(d); //get(키)로 속성값 조회
console.log(m.get(d)); // e

m.size; // size로 속성 개수 조회
console.log(m.size); // 3

for (const [k, v] of m) {
   // 반복문에 바로 넣어 사용 가능
   console.log(k, v); // 'a', 'b', 3, 'c', {}, 'e
} // 속성 간의 순서도 보장된다

m.forEach((v, k) => {
   // forEach도 사용 가능
   console.log(k, v); // 결과는 위와 동일
});

m.has(d); // has(키)로 속성 존재 여부를 확인한다
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성을 삭제
m.clear(); // clear()로 전부 제거
console.log(m.size); // 0
```

-  속성 간의 순서를 보장하고 반복문을 사용할 수 있다
-  속성명으로 문자열이 아닌 값도 사용 가능하고 `size` 메서드를 통해 속성의 수를 쉽게 알 수 있다는 점에서 일반 객체와 다르다

## Set

```javascript
const s = new Set();
s.add(false); // add(요소)로 Set에 추가
s.add(1);
s.add('1');
s.add(1); // 중복이므로 무시됨
s.add(2);

console.log(s.size); // 중복이 제거되어 4

s.has(1); // has(요소)로 요소 존재 여부를 확인
console.log(s.has(1)); // true

for (const a of s) {
   console.log(a); // false 1 '1' 2
}

s.forEach(a => {
   console.log(a); // false 1 '1' 2
});

s.delete(2); // delete(요소)로 요소를 제거한다
s.clear(); // clear()로 전부 제거
```

-  **중복을 허용하지 않는다**
   -  따라서 배열 자료구조를 사용하고 싶으나 중복은 허용하고 싶지 않을 때 Set을 대신 사용
   -  또는 기존 배열에서 중복을 제거하고 싶을 때도 Set을 사용한다

```javascript
const arr = [1, 3, 2, 7, 2, 6, 3, 5];

const s2 = new Set(arr);
const result = Array.from(s2);
console.log(result); // 1, 3, 2, 7, 6, 5
```

new Set(배열)을 하는 순간 배열의 중복된 요소들이 제거된다

Set을 배열로 되돌리려면 `Array.from(Set)`을 하면 된다
