// const firstName = "Jonas";
// const job = "teacher";
// const age = 1992;
// const year = 2024;

// const aboutJonas = `My name is ${firstName}. And I am ${job}. I am ${
//   year - age
// } years old.`;

// document.getElementById("outPut").innerHTML = aboutJonas;

//here it starts if else statement

let age = 15;
let isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`You are old enough to dirve a car.`);
} else {
  const soYoung = age <= 18;
  const needYear = 18 - age;
  console.log(
    `You are so young to drive a car. Plese waith for a nother ${needYear} years.`
  );
}
