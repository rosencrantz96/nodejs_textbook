노드 7.6 버전부터 지원되는 기능으로 ES2017에서 추가되었다 <br>
노드처럼 비동기 위주로 프로그래밍을 해야 할 때 도움이 많이 된다

프로미스가 콜백 지옥을 해결하긴 했지만 여전히 코드가 장황하다!

> `async/await` 문법은 프로미스를 사용한 문법을 한 번 더 깔끔하게 줄여준다

```javascript
async function findAndSaveUser(Users) {
   let user = await Users.findOne({});
   user.name = 'zero';
   user = await user.save();
   user = await Users.findOne({ gender: 'm' });
}
```

함수 선언부를 일반 함수 대신 `async function`으로 교체한 후 프로미스 앞에 `await`를 붙였다

하지만 위의 코드는 에러를 처리하는 부분이 없으므로

```javascript
async function findAndSaveUser(Users) {
   try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
   } catch (error) {
      console.error(error);
   }
}
```

`try/catch`문으로 로직을 감싸는 것이 더 바람직하다

## 화살표 함수도 async와 함께 사용 가능

```javascript
const findAndSaveUser = async Users => {
   try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
   } catch (error) {
      console.error(error);
   }
};
```

## for문과 async/await 함께 쓰며 프로미스를 순차적으로 실행하기

노드 10버전부터 지원하는 ES2018문법

```javascript
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
   for await (promise of [promise1, promise2]) {
      console.log(promise);
   }
})();
```

`for await of`문을 사용하여 프로미스 배열을 순회하는 모습

➡️ async 함수의 반환값은 항상 Promise로 감싸진다

따라서 실행 후 then을 붙이거나 또 다른 async 함수 안에서 await를 붙여서 처리할 수 있다

```javascript
async function findAndSaveUser(Users) {
   // 생략
}

findAndSaveUser().then(() => {
   /* 생략 */
});
// 또는
async function other() {
   const result = await findAndSaveUser();
}
```
