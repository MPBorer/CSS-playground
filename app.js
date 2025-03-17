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

let val = "0"
if (val){
    console.log(!!val)
}
else{
    console.log(!!val)
}