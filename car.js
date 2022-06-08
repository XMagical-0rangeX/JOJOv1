//jojo car
let mainchardiv = document.getElementById("maindiv");
let suppchardiv = document.getElementById("suppdiv");
let antagchardiv = document.getElementById("antagdiv");
let antagmaindiv = document.getElementById("antagmaindiv");
let antagsuppdiv = document.getElementById("antagsuppdiv");
let mainbtn = document.getElementById("main");
let suppbtn = document.getElementById("support");
let antagbtn = document.getElementById("antag");
let antagmainbtn = document.getElementById("antagmain");
let antagsuppbtn = document.getElementById("antagsupp");


mainbtn.addEventListener("click", revmain);
suppbtn.addEventListener("click", revsupp);
antagbtn.addEventListener("click", revantag);
antagmainbtn.addEventListener("click", revantagM);
antagsuppbtn.addEventListener("click", revantagS);


function revmain(){
    mainchardiv.style.display = "block";
    suppchardiv.style.display = "none";
    antagchardiv.style.display = "none";
}
function revsupp(){
    mainchardiv.style.display = "none";
    suppchardiv.style.display = "block";
    antagchardiv.style.display = "none";
}
function revantag(){
    mainchardiv.style.display = "none";
    suppchardiv.style.display = "none";
    antagsuppdiv.style.display = "none";
    antagmaindiv.style.display = "none";
    antagchardiv.style.display = "block";
}
function revantagM(){
    antagmaindiv.style.display = "block";
    antagsuppdiv.style.display = "none";
}
function revantagS(){
    antagmaindiv.style.display = "none";
    antagsuppdiv.style.display = "block";
}