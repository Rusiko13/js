"use strict";

// 1
let x = 5;
while (true) {
  console.log(x);
  x++;
  if (x == 100) {
    break;
  }
}
for (let x = 5; x < 100; x++) {
  console.log(x);
}

// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let y = 0; y < array1.length; y++) {
  if (array1[y] > 0 && array1[y] < 10) {
    console.log(array1[y]);
  }
}
let array1_2 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let numbers11 of array1_2) {
  if (numbers11 > 0 && numbers11 < 10) console.log(numbers11);
}

// 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numbers12 of array2) {
  if (numbers12 == 5) {
    break;
  }
}
console.log("5 is here");
// 4
let array3 = [1, 2, 3, 4, 5];
let sumUp = 0;
for (let n = 0; n < array3.length; n++) {
  sumUp += array3[n];
}
console.log(sumUp);

//5
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let r = 0; r < array4.length; r++) {
  sum += array4[r];
}
console.log(sum / array4.length);

//6
let array5 = [1, 2, 3, 7, 6, 9];
for (let numbers1 of array5) {
  if (numbers1 == 7) {
    continue;
  }
  console.log(numbers1);
}

// 7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

// 8
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello user");
} else if (user2.name == "levani") {
  console.log("hello levan");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello ana");
}
{
  console.log("error");
}

let survey =
  user2.age < 18 && user2.studentstatus == "active"
    ? "hello user"
    : user2.name == "levani"
    ? "hello levan"
    : user2.studentstatus == "active" || user2.age < 25
    ? "hello ana"
    : "error";
    console.log(survey);
// 9
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let numbers13 of array6) {
  if (numbers13 % 2 == 0) console.log(numbers13);
}
//10
let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]
for (let check of users){
  if(check.status){
    console.log(check.username);
  }
}


// 11
let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let numbers14 of array7) {
  if (typeof numbers14 == "number" && numbers14 % 5 == 0) {
    console.log(numbers14);
  }
}

// 12
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (let numbers15 of array8) {
  // console.log(numbers15);
  for (let numbers16 of numbers15) {
    if(numbers16 > 0)
    {  console.log(numbers16);}
  
  }
  
}
