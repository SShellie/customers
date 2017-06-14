// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
console.log("customers");

fetch('https://randomuser.me/api/?results=12&name,email')

.then(

function (responce) {
  if (responce.status !== 200){
   console.log("somethings wrong!" + responce.status);
   return
  }
//for (i = 0; i< data.results.length; i++){

// let users = data.results;
responce.json().then(function (data) {
console.log(data.results)

})

})
  // 'use strict';

  // Your Code Goes Here
// })();
// fetch('https://randomuser.me/api/?results=12&name,email')
