//quiz 

let quizst = document.getElementById("quizstrt");
let quizbtn1 = document.getElementById("quizbtn1");
let quizbtn2 = document.getElementById("quizbtn2");
let quizbtn3 = document.getElementById("quizbtn3");
let quizbtn4 = document.getElementById("quizbtn4");

let backbtn1 = document.getElementById("backbtn1");
let backbtn2 = document.getElementById("backbtn2");
let backbtn3 = document.getElementById("backbtn3");
let backbtn4 = document.getElementById("backbtn4");

let qest1 = document.getElementById("qest1");
let qest2 = document.getElementById("qest2");
let qest3 = document.getElementById("qest3");
let qest4 = document.getElementById("qest4");
let qest5 = document.getElementById("qest5");

let mchoi1 = document.getElementById("mchoi1");
let mchoi2 = document.getElementById("mchoi2");
let mchoi3 = document.getElementById("mchoi3");
let mchoi4 = document.getElementById("mchoi4");

let mchoi1q2 = document.getElementById("mchoi1q2");
let mchoi2q2 = document.getElementById("mchoi2q2");
let mchoi3q2 = document.getElementById("mchoi3q2");
let mchoi4q2 = document.getElementById("mchoi4q2");

let mchoi1q3 = document.getElementById("mchoi1q3");
let mchoi2q3 = document.getElementById("mchoi2q3");
let mchoi3q3 = document.getElementById("mchoi3q3");
let mchoi4q3 = document.getElementById("mchoi4q3");

let mchoi1q4 = document.getElementById("mchoi1q4");
let mchoi2q4 = document.getElementById("mchoi2q4");
let mchoi3q4 = document.getElementById("mchoi3q4");
let mchoi4q4 = document.getElementById("mchoi4q4");

let mchoi1q5 = document.getElementById("mchoi1q5");
let mchoi2q5 = document.getElementById("mchoi2q5");
let mchoi3q5 = document.getElementById("mchoi3q5");
let mchoi4q5 = document.getElementById("mchoi4q5");

let sub = document.getElementById("sub");
let subbtn = document.getElementById("subbtn");
let divfin = document.getElementById("divfin");
let final = document.getElementById("final");
let subimg = document.getElementById("subimg");




let check1 = false,subvar = true;

quizbtn1.addEventListener("click", next);
quizbtn2.addEventListener("click", next2);
quizbtn3.addEventListener("click", next3);
quizbtn4.addEventListener("click", next4);
backbtn1.addEventListener("click", go);
backbtn3.addEventListener("click", next2);
backbtn4.addEventListener("click", next3);
backbtn2.addEventListener("click", next);
quizst.addEventListener("click", go);
subbtn.addEventListener("click", submit);

function go(){
    quizst.style.display = "none";
    qest1.style.display = "block";
    qest2.style.display = "none";

}
function next(){
    qest1.style.display = "none";
    qest3.style.display = "none";
    qest2.style.display = "block";
}
function next2(){
    qest2.style.display = "none";
    qest4.style.display = "none";
    qest3.style.display = "block";
}
function next3(){
    qest3.style.display = "none";
    qest5.style.display = "none";
    qest4.style.display = "block";
}
function next4(){
    qest4.style.display = "none";
    qest5.style.display = "block";
}
requestAnimationFrame(loop);

function loop(){
    if ( (mchoi1.checked || mchoi2.checked || mchoi3.checked ||mchoi4.checked)&&
     (mchoi1q2.checked || mchoi2q2.checked || mchoi3q2.checked ||mchoi4q2.checked)&&
    (mchoi1q3.checked || mchoi2q3.checked || mchoi3q3.checked ||mchoi4q3.checked)&&
    (mchoi1q4.checked || mchoi2q4.checked || mchoi3q4.checked ||mchoi4q4.checked)&&
    (mchoi1q5.checked || mchoi2q5.checked || mchoi3q5.checked ||mchoi4q5.checked)&&
    subvar){
        check1 = true;
    }
    if (check1){
    sub.style.display = "block";}else{
    sub.style.display = "none";}

    requestAnimationFrame(loop);
}
function submit(){
    qest1.style.display = "none";
    qest3.style.display = "none";
    qest2.style.display = "none";
    qest4.style.display = "none";
    qest5.style.display = "none";
    divfin.style.display = "block";
    subvar = false;
    check1 = false;
    let mark = 0;
    let res;
    if (mchoi3.checked){
        mark++
    }
    if (mchoi2q2.checked){
        mark++
    }
    if (mchoi4q3.checked){
        mark++
    }
    if (mchoi3q4.checked){
        mark++
    }
    if (mchoi2q5.checked){
        mark++
    }
    if (mark === 5){
        res = "Good Job!";
        subimg.src = "img/yes.gif";
    } else if (mark === 0){
        res = "Your a Discrace.";
        subimg.src = "img/no.gif";
    } else {
        res = "Try Harder.";
        subimg.src = "img/yareyare.gif";
    }
    final.innerHTML = mark+"/5 "+res;
}