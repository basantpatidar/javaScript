// Promises

// 1
console.log('Hello 123');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey');
  }, 2000);
});

// // 2
// promise
//   .then(data => {
//     console.log(data);
//     // 3
//     console.log('World');
//   })
//   .catch(err => {
//     console.log(err);
//   });

// async function main() {
//     try{
//         const data = await promise;
//         console.log(data);
//     } catch(err){
//         console.log(err)
//     }
// }
// main();

const arr = [10, 0, 1, 2, 3, 4];

// Reduce

const sum = arr.reduce((a, b) => a + b, 1);
console.log(sum);

// some

const isGreater = arr.some(x => x > 0);
console.log(isGreater);

// Find

const objs = [
  {
    name: 'hey',
    age: 10
  },
  {
    name: 'test',
    age: 50
  }
];

const ele = objs.find(x => x.age === 10);

console.log(ele.name);
