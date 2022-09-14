
let start = document.getElementById('start');
var a1 = "qazwsxedcrfvtgbyhnujmiklop";
var b1 = "ZAQWSXCDERFVBGTYHNMJUIKLOP";
var c11 = "1234567890";
var d = "!@#$%^&*()_+=-[]{}';:><,.?/\|`~ ";
var all = "";
var vl = 0;


function abc() {
all = "";
var check = 0;
vl = 0;

if(document.getElementById('cka').checked){

all += a1
check++;
vl = 0

vl = vl + 26;


window.open("game.html","_self");

localStorage.setItem('vl', vl);
localStorage.setItem('all', all);

}
if(document.getElementById('ckB').checked){

all += b1
check++;

vl = vl + 26;

localStorage.setItem('all', all);
window.open("game.html","_self")

localStorage.setItem('vl', vl);
}
if(document.getElementById('ck1').checked){

all += c11
check++;
localStorage.setItem('all', all);
window.open("game.html","_self")
vl += 10;
localStorage.setItem('vl', vl);

}
if(document.getElementById('ck').checked){

all += d
check++;
localStorage.setItem('all', all);
window.open("game.html","_self")
vl += 31;
localStorage.setItem('vl', vl);

}
if(check < 1){
  localStorage.setItem('vl', vl);
  alert("you haven't chosen the charset yet");
}

}
var idk = document.getElementById('input')
function inp(len=1) {
  var random_string = new Array();

  all = localStorage.getItem('all')
  vl = localStorage.getItem('vl');
var last = 0;


for(let i =0; i<len; i++){

let idk45 = Math.floor(Math.random() * vl);



random_string.push(all.charAt(idk45));

}
random_string = random_string.join("");

idk.value = random_string;
}
var corc = 0;
var uncorc = 0;
document.addEventListener('keypress', (event) => {
  var cor = document.getElementById('cor');
  var uncor = document.getElementById('uncor');
var same = event.key;

if (idk.value == same ) {
inp();
corc++;
cor.value = corc;
  }
  else {
    uncorc++;
    uncor.value =uncorc;
  }
})
