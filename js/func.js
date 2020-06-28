function FunctieReadMore() {
    var puncte = document.getElementById("puncte");
    var mai_mult_text = document.getElementById("mai_mult");
    var text_buton = document.getElementById("buton");

    if (puncte.style.display === "none") {
    puncte.style.display = "inline";
    text_buton.innerHTML = "Citeste mai mult"; 
    mai_mult_text.style.display = "none";
    } else {
    puncte.style.display = "none";
    text_buton.innerHTML = "Citeste mai putin"; 
    mai_mult_text.style.display = "inline";
    }
}
function FunctieReadMore1(){
var puncte=document.getElementById("puncte1");
var mai_mult_text=document.getElementById("mai_mult1");
var text_buton=document.getElementById("buton1");

if( puncte.style.display=== "none"){
    puncte.style.display= "inline";
    text_buton.innerHTML= " Citeste mai mult ";
    mai_mult_text.style.display= "none";
} else {
    puncte.style.display= "none";
    text_buton.innerHTML="Citeste mai putin";
    mai_mult_text.style.display= "inline";
}
}
function FunctieReadMore2()
{
var puncte=document.getElementById("puncte2");
var mai_mult_text=document.getElementById("mai_mult2");
var text_buton=document.getElementById("buton2");

if(puncte.style.display === "none")
{
    puncte.style.display = "inline";
    text_buton.innerHTML=" Citeste mai mult ";
    mai_mult_text.style.display=" none ";
}
else
{
    puncte.style.display="none";
    text_buton.innerHTML=" Citeste mai putin ";
    mai_mult_text.style.display=" inline ";
}
}
function Trans()
{
var x=document.getElementById("Stad");
var l=x.innerHTML.length;

var newText="";
for(var a=0;a<l;a++)
{
var letter = x.innerHTML.charAt(a);
newText += letter.fontcolor(getColor());
}
x.innerHTML=newText;
}

function getColor()
{
var colorString="";
for(var i=0;i<6;i++)
{
var num = Math.floor(Math.random()*17);
hexNum = num.toString(16);
colorString += hexNum;
}
return colorString;
}
function Spatiere() {
document.getElementById("Stad").style.letterSpacing = "5px";
}
function CreareButon()
{
var myNodelist = document.querySelectorAll('.lista li');
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}
}
function Inchide()
{
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}
}
function Bifat()
{
var list = document.querySelector('.lista');
console.log(list);
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}
}, false);
}
function ElementNou() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("Trebuie sa scrii ceva!");
} else {
document.getElementById("listaa").appendChild(li);
}
document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}
}
function ApasareButon()
{
var x = document.getElementById("navigation_bar");
if (x.className === "navigation_bar") {
x.className += " responsive";
} else {
x.className = "navigation_bar";
}
}
//var idVar = setInterval(() => {
//timer()
//}, 1000);
//var myVar = setInterval(setColor, 3000);
//function timer() {
//var dateVar = new Date();
//var time = dateVar.toLocaleTimeString();
//document.getElementById("Ora").innerHTML = time;
//};
function Alerta() {
setTimeout(function(){ alert("Ati apasat pe butonul care schimba intre light mode si dark mode si invers"); }, 3000);
}

function setColor() {
var x = document.getElementById("Ora");
x.style.color = x.style.color == "white" ? "yellow" : "white";
}

function CountDown()
{
var counter = 300;
var newGame = setInterval(function(){
console.log(counter);
counter--
if (counter === 0) {
alert("Ati stat timp de 5 minute pe site, inseamna ca v-am captivat");
clearInterval(newGame);
}
}, 1000);
}

var myWindow;

function openWin() {
myWindow = window.open("https://en.wikipedia.org/wiki/Camp_Nou", "_blank", "width=500, height=500");
}

function closeWin() {
myWindow.close();
}
function mouseOver(){
document.getElementById("Stad").style.color = "Gray";
}
function mouseOut() {
document.getElementById("Stad").style.color = "white";
}
function Bifeaza()
{
const linkul=document.getElementById('Facebook');
const buton=document.getElementById('cb');
linkul.addEventListener('click', function(e){
if(!buton.checked)
e.preventDefault();
});
}
var slideIndex=1;
function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}
