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

// 화살표 함수와 async 함수
/*
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
*/

// for문과 async/await을 같이 써서 프로미스를 순차적으로 실행

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
   for await (promise of [promise1, promise2]) {
      console.log(promise);
   }
})();

// .then 을붙이기

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
