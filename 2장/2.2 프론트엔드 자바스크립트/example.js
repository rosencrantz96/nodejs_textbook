{
   /* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */
}
//   <script>
// Get 요청
axios
   .get('https://www.zerocho.com/api.get')
   .then(result => {
      console.log(result);
      console.log(result.data); // {}
   })
   .catch(error => {
      console.error(error);
   });

// async/await 방식
(async () => {
   try {
      const result = await axios.get('https://www.zerocho.com/api/get');
      console.log(result);
      console.log(result.data);
   } catch (error) {
      console.error(error);
   }
})();
// Post 요청
(async () => {
   try {
      const result = await axios.post('https://zerocho.com/api/post/json', {
         name: 'zerocho',
         birth: 1994,
      });
      console.log(result);
      console.log(result.data);
   } catch (error) {
      console.error(error);
   }
})();
// formData
(async () => {
   try {
      const formData = new FormData();
      formData.append('name', 'zerocho');
      formData.append('birth', 1994);
      const result = await axios.post('https://www.zerocho.com/api/post/formdata', formData);
      console.log(result);
      console.log(result.data);
   } catch (error) {
      console.error(error);
   }
})();
// encodeURIComponent, decodeURIComponent
(async () => {
   try {
      const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
      console.log(result);
      console.log(result.data);
   } catch (error) {
      console.error(error);
   }
})();
//   </script>
