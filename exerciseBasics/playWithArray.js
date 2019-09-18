let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
strArr = [
  "Tony",
  "Steve",
  "Hulk",
  "Spidy",
  "Natasha",
  "Hawkaye",
  "Dr. Strange",
  "Mr. Wick"
];

const one = arr => {
  let brr = arr.push(10);
  console.log(arr);
  console.log(brr);
  brr = arr.pop();
  console.log(arr);
  console.log(brr);
  brr = arr.shift();
  console.log(arr);
  console.log(brr);
  brr = arr.unshift(10, 20);
  console.log(arr);
  console.log(brr, "--<--<-- unshift returns array length");
  brr = arr.splice(0, 2);
  console.log(arr);
  console.log(brr, "--<--<-- New array gets deleted elements");
  brr = arr.splice(7, 0, 10, 11);
  console.log(arr);
  console.log(brr);
  brr = arr.slice(0, 4);
  console.log(arr);
  console.log(
    brr,
    "--<--<-- Returns new Array with spiced array 0 to 3rd index while not including 4"
  );
  brr = arr.sort();
  console.log(arr);
  console.log(brr, "--<--<-- Returns sorted array");
  brr = arr.reverse();
  console.log(arr);
  console.log(brr, "--<--<-- Returns reversed array of elements");
};
// one(arr);

const two = () => {};
