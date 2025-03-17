// document.querySelector(`.title`).innerHTML = `FES`

// document.getElementById(`title`).innerHTML = `FES`


// function changeTitleToGreen(){
//       document.querySelector(`.title`).style.color = `green`
// }

function toggleDarkMode(){
    document.querySelector(`body`).classList.toggle(`dark-theme`)
}

let celsius = 10;
let farenheight = celsius * 1.8 + 32;

console.log(farenheight);
//-------------------------------------------
let cash = 45;
let price = 40;
let difference = cash - price;

if (cash > price){
    console.log(`you paid more than enough here is your ${difference} change`)
}
else if (cash === price){
    console.log(`you paid enough here is your receipt`)
}
else{
    console.log(`you still owe ${difference * -1}`)
}
//-----------------------------------------
let val = "0"
if (val){
    console.log(!!val)
}
else{
    console.log(!!val)
}
//---------------------------------------
let hot = false

hot ? console.log(`weather is hot outside`) : console.log(`weather is cold`)
//---------------------------------------
let subscribed = true
let loggedIn = true

let str = subscribed && loggedIn ? (`show the video`) : (`hid the video`)
console.log(str)
//------------------------------------------
let cash1 = 50;
let price1 = 40;
let isStoreOpen = true;

let str1 = cash1 > price1 && isStoreOpen ? (`give receipt`) : (`do not give receipt`)
console.log(str1)
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//---------------------loops--------------LOOPS------------------
// let count = 1;
// while (count <= 100){
//  console.log(count)
//     count = count + 1
// }

for (let i = 0; i < 3; ++i){
     console.log(i)
}

for (let i = 1; i <= 20; ++i){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Frontend Simplified`)
    }
    else if (i % 3 === 0){
        console.log(`Frontend`)
    }
    else if (i % 5 === 0){
        console.log(`Simplified`)
    }
    else{
        console.log(i)
    }
}

let str2 = `Frontend Simplified`
for (let i = 0; i <= str2.length; ++i){
    console.log(str2[i])
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//-------------------------FUNCTIONS-----------------------------------------

function welcomePersonToFes(name){
    console.log(`welcome to Frontend Simplified, ${name}`)
}
welcomePersonToFes(`Mike`)
welcomePersonToFes(`David`)
welcomePersonToFes(`Mitri`)
welcomePersonToFes(`Zen`)


function fn(){
    console.log(`My Function`)
}
fn()

function sumOfTwoNumbers(num1, num2){
   return num1 + num2
}
console.log(sumOfTwoNumbers(10, 10))

function convertCelciusToFarenheit(celcius){
    return celcius * 1.8 + 32
}
console.log(convertCelciusToFarenheit(0))
console.log(convertCelciusToFarenheit(10))
console.log(convertCelciusToFarenheit(30))


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//---------------------------ARRAYS----------------------------------------------

let arr = [20, 30, 40, 50, 100]

console.log(arr[0])
console.log(arr[arr.length -1])

arr.push(200)

console.log(arr)

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50){
        return true;
    }
})
console.log(newArr)

//------Above and Below are same-----------------------------------------------------------
let newArr1 = arr.filter(element => element < 50)

console.log(newArr1)

