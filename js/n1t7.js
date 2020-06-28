const messages = ['Nu sta cu ochii in pamant, uita-te in jurul tau si motiveaza-te', 'Vei da gol in acest meci!', 'Vei fi un marcator de exceptie', 'Nu uita sa fii altruist din cand in cand.'];
const randomIndex = Math.round(Math.random()*(messages.length-1));
document.getElementById("ravase").innerHTML = messages[randomIndex];