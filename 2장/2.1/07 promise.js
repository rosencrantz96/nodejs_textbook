// promise

const condition = true; // true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject) => {
   if (condition) {
      resolve('성공');
   } else {
      reject('실패');
   }
});
// 다른 코드가 들어갈 수 있음
promise
   .then(message => {
      console.log(message); // 성공(resolve)한 경우 실행
   })
   .catch(error => {
      console.error(error); // 실패(reject)한 경우 실행
   })
   .finally(() => {
      // 끝나고 무조건 실행
      console.log('무조건');
   });

promise
   .then(message => {
      return new Promise((resolve, reject) => {
         resolve(message);
      });
   })
   .then(message2 => {
      console.log(message2);
      return new Promise((resolve, reject) => {
         resolve(message2);
      });
   })
   .then(message3 => {
      console.log(message3);
   })
   .catch(error => {
      console.error(error);
   });

// 콜백을 프로미스로 바꾸기

// 자주 쓰는 콜백 패턴
function findAndSaveUser(Users) {
   Users.findOne({}, (err, user) => {
      // 첫 번째 콜백
      if (err) {
         return console.error(err);
      }
      user.name = 'zero';
      user.save(err => {
         // 두 번째 콜백
         if (err) {
            return console.error(err);
         }
         Users.findOne({ gender: 'm' }, (err, user) => {
            // 세 번째 콜백
            // 생략
         });
      });
   });
}

// 프로미스로 변환
function findAndSaveUser(Users) {
   Users.findOne({})
      .then(user => {
         user.name = 'zero';
         return user.save();
      })
      .then(user => {
         return Users.findOne({ gender: 'm' });
      })
      .then(user => {
         // 생략
      })
      .catch(err => {
         console.error(err);
      });
}

// 프로미스 여러 개를 한 번에 실행하기
/* const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
   .then(result => {
      console.log(result); // ['성공1', '성공2'];
   })
   .catch(error => {
      console.error(error);
   });
*/

// 프로미스 중 어떤 프로미스가 reject 되었는지 알아보기
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
   .then(result => {
      console.log(result);
      /*   [
          { status: 'fulfilled', value: '성공1' },
          { status: 'rejected', reason: '실패2' },
          { status: 'fulfilled', value: '성공3' },
          
        ]
        */
   })
   .catch(error => {
      console.error(error);
   });

// 프로미스에 catch 메서드를 붙이는 것을 권장
try {
   Promise.reject('에러');
} catch (e) {
   console.error(e); // UnhandledPromiseRejection: This error originated either by throwing inside...
}

Promise.reject('에러').catch(() => {
   // catch메서드를 붙이면 에러가 발생하지 않는다
});
