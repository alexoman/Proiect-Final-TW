document.addEventListener("DOMContentLoaded", function(event) { 
    var titleNode=document.getElementById("nume_pag");
console.log(titleNode);
    let titleLength = titleNode.innerText.length;
 
    // pun span pt fiecare caracter
    let spanify = "";
 
    console.log([...titleNode.innerText]);
 
    [...titleNode.innerText].forEach(ch => {
        spanify += '<span class="ch">' + ch + "</span>";
    })
 
    titleNode.innerHTML = spanify;
 
    let letters = document.getElementsByClassName("ch")
    console.log(letters);
    [...letters].forEach(ltr => {
        ltr.style.opacity = "0";
    })
 
    // setez pointerii
    let i = 0, j = titleLength - 1;
 
    // interval animatie: 100ms
    let intervalAnimate = window.setInterval(animateTitle, 100);
 
    function animateTitle() {
        console.log("i:" + i + " j:" + j)
 
        if (i <= j) {
            letters[i].style.opacity = "1";
            letters[j].style.opacity = "1";
            i++;
            j--;
        }
        else {
            clearInterval(intervalAnimate)
            console.log("cleared!")
        }
    }
})


