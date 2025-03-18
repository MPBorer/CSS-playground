// document.querySelector(`.title`).innerHTML = `FES`

// document.getElementById(`title`).innerHTML = `FES`

// function changeTitleToGreen(){
//       document.querySelector(`.title`).style.color = `green`
// }

function toggleDarkMode() {
  document.querySelector(`body`).classList.toggle(`dark-theme`);
}



//---------------------------------------------------
let celsius = 10;
let farenheight = celsius * 1.8 + 32;

console.log(farenheight);
//-------------------------------------------
let cash = 45;
let price = 40;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid more than enough here is your ${difference} change`);
} else if (cash === price) {
  console.log(`you paid enough here is your receipt`);
} else {
  console.log(`you still owe ${difference * -1}`);
}
//-----------------------------------------
let val = "0";
if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}
//---------------------------------------
let hot = false;

hot ? console.log(`weather is hot outside`) : console.log(`weather is cold`);
//---------------------------------------
let subscribed = true;
let loggedIn = true;

let str = subscribed && loggedIn ? `show the video` : `hid the video`;
console.log(str);
//------------------------------------------
let cash1 = 50;
let price1 = 40;
let isStoreOpen = true;

let str1 =
  cash1 > price1 && isStoreOpen ? `give receipt` : `do not give receipt`;
console.log(str1);
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//---------------------loops--------------LOOPS------------------
// let count = 1;
// while (count <= 100){
//  console.log(count)
//     count = count + 1
// }

for (let i = 0; i < 3; ++i) {
  console.log(i);
}

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`Frontend`);
  } else if (i % 5 === 0) {
    console.log(`Simplified`);
  } else {
    console.log(i);
  }
}

let str2 = `Frontend Simplified`;
for (let i = 0; i <= str2.length; ++i) {
  console.log(str2[i]);
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//-------------------------FUNCTIONS-----------------------------------------

function welcomePersonToFes(name) {
  console.log(`welcome to Frontend Simplified, ${name}`);
}
welcomePersonToFes(`Mike`);
welcomePersonToFes(`David`);
welcomePersonToFes(`Mitri`);
welcomePersonToFes(`Zen`);

function fn() {
  console.log(`My Function`);
}
fn();

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(sumOfTwoNumbers(10, 10));

function convertCelciusToFarenheit(celcius) {
  return celcius * 1.8 + 32;
}
console.log(convertCelciusToFarenheit(0));
console.log(convertCelciusToFarenheit(10));
console.log(convertCelciusToFarenheit(30));

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//---------------------------ARRAYS----------------------------------------------

let arr = [20, 30, 40, 50, 100];

console.log(arr[0]);
console.log(arr[arr.length - 1]);

//-----ARR.PUSH--adds new item onto the array----------------------------
arr.push(200);

console.log(arr);
//===========================
//=======================================================================
// //----ARR.FILTER-----Filters trhough the ARRAY--------------------------
//======================================================================
let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    return true;
  }
});
console.log(newArr);
//------Above and Below are the same------------------------
let newArr1 = arr.filter((element) => element < 50);
console.log(newArr1);

//====================================
//====================================
// FILTER OUT FAIL GRADES----------
//--------Long answer-----------------------
const grades = [`A+`, `A`, `Fail`];
let goodGrades = grades.filter((element) => {
  if (element !== `Fail`) {
    return true;
  }
});
console.log(goodGrades);

//--------Short Answer----------------------

let goodGrades1 = grades.filter((element) => element !== `Fail`);
console.log(goodGrades1);

//-----W/O using ARRAY.FILTER--------------
//Create a new empty array called `goodGrades`
let goodGrades2 = [];

for (let i = 0; i < grades.length; ++i) {
  //add the current element onto `goodGrades` onmly if
  //the current element is not equal to fail
  if (grades[i] !== `Fail`) {
    goodGrades2.push(grades[i]);
  }
}
//Console log `goodGrades`
console.log(goodGrades2);

//=============ARR.MAP======Changes array
//-----------------------
let arr1 = [1, 4, 9, 16];

let newArray = arr1.map((element) => `doggy`);
console.log(newArray);

//========================
//========================
//turn dollars into cents--
let dollars = [1, 5, 10, 3];
//--------Solutions---------------------

//----------short ----------------------
let cents = dollars.map((element) => element * 100);
console.log(cents);

//----------longer-----------------------
let cents1 = dollars.map((element) => {
  console.log(element);
  return element * 100;
});
console.log(cents1);

//=======================================
//====WITHOUT USIN MAP Method
//----------for loop---------------------
let pennies = [];

for (let i = 0; i < dollars.length; ++i) {
  pennies.push(dollars[i] * 100);
}
console.log(pennies);

//-----------------------------------------------------------------------------------
//===================================================================================
//                       OBJECTS
//===================================================================================
//-----------------------------------------------------------------------------------

// let userName = `Mike`
// let userLastName = `Borer`
// let userDiscord = `MikeyB`
// let UserSubnscriptionStatus = `vip`
//---------SAME AS----------
let users = [
  {
    username: `Mike`,
    email: `mpborer@gmail.com`,
    password: `test123`,
    UserSubnscriptionStatus: `vip`,
    discord: `MikeyB`,
    lessonsCompleted: [0, 1],
  },
  {
    username: `mitri`,
    email: `mitri@gmail.com`,
    password: `test123`,
    UserSubnscriptionStatus: `vip`,
    discord: `mitri123`,
    lessonsCompleted: [0, 1],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log(`log the user in the details are correct`);
      } else {
        console.log(`password is incorrect, try again`);
      }
      return;
    }
  }
  console.log(`could not find a email that matches`);
}
login(`mpborer@gmail.com`, `test123`);

/**create a register function that accepts:
 * -username
 * -email
 * -password
 * -subscriptionStatus
 * -discord
 * -lessonsCompleted
 *
 * inside register function :
 * 1-create a user object
 * 2-push this user object onto the `users` array
 */

function register(
  username,
  email,
  password,
  subscriptionStatus,
  discord,
  lessonsComplpeted
) {
  let user ={
      username: username,
      email: email,
      password: password,
      subscriptionStatus: subscriptionStatus,
      discord: discord,
      lessonsComplpeted: lessonsComplpeted
  }
  users.push(user)
}
register({
    username: `zen`, 
    email: `zen@gmail.com`, 
    password: `test123`, 
    subscriptionStatus: `vip`, 
    discord: `zen12`, 
    lessonsCompleted: [0, 1, 2, 3]});
console.log(users)
//----------------------------------------------------------------
//================================================================
//================================================================
//--------------Short Form----------------------------------------
function register1(user1){
    users.push(user1)
}
register({
    username: `zen`, 
    email: `zen@gmail.com`, 
    password: `test123`, 
    subscriptionStatus: `vip`, 
    discord: `zen12`, 
    lessonsCompleted: [0, 1, 2, 3]})
    console.log(users)

//==================================================================================
//==================================================================================
//----------------------------------------------------------------------------------
//--------------------------DOM Document Object Model-------------------------------
//---two ways to accesing elements
//====1======
console.log(document.querySelector(`.title`))
//====2======
//----when using gety element by id you must be calling a ID
console.log(document.getElementById(`title`))

document.querySelector(`#title`).innerHTML = `Frontend-Simplified `
//---to add onto the html without changing it add the plus (+) to make it += `change`
document.querySelector(`#title`).innerHTML += `Frontend-Simplified `

document.querySelector(``) 
// is how to access any element you want within the Dom
//===========================================
document.querySelector(``).innerHTML
//  is how to change the HTML of any elemetn in DOM

//=======How to change css ================
document.querySelector(`.title`).style.color = `red`