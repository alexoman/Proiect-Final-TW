const startButon = document.getElementById('start-buton');
const nextButon = document.getElementById('urmator-buton');
const meniuIntrebariElement = document.getElementById('meniu-intrebari');
const intrebareElement = document.getElementById('intrebare');
const butonRaspunsElement = document.getElementById('buton-raspuns');

let randomIntrebare, indexCurent;

startButon.addEventListener('click', startJoc);
nextButon.addEventListener('click', () => {
  indexCurent++;
  seteazaUrmatoareIntrebare();
});

function startJoc() {
  startButon.classList.add('ascunde');
  randomIntrebare = intrebari.sort(() => Math.random() - .5);
  indexCurent = 0;
  meniuIntrebariElement.classList.remove('ascunde');
  seteazaUrmatoareIntrebare();
}

function seteazaUrmatoareIntrebare() {
  resetareStare();
  arataIntrebare(randomIntrebare[indexCurent]);
}

function arataIntrebare(intrebare) {
  intrebareElement.innerText = intrebare.intrebare;
  intrebare.raspunsuri.forEach(raspuns => {
    const buton = document.createElement('button');
    buton.innerText = raspuns.text;
    buton.classList.add('buton');
    if (raspuns.correct) {
      buton.dataset.correct = raspuns.correct;
    }
    buton.addEventListener('click', selecteazaRaspns);
    butonRaspunsElement.appendChild(buton);
  })
}

function resetareStare() {
  clearStatusClass(document.body);
  nextButon.classList.add('ascunde');
  while (butonRaspunsElement.firstChild) {
    butonRaspunsElement.removeChild(butonRaspunsElement.firstChild);
  }
}

function selecteazaRaspns(rasp) {
  const butonSelectat = rasp.target;
  const correct = butonSelectat.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(butonRaspunsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (randomIntrebare.length > indexCurent + 1) {
    nextButon.classList.remove('ascunde');
  } else {
    startButon.innerText = 'Restart';
    startButon.classList.remove('ascunde');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const intrebari = [
  {
    intrebare: 'In ce an s-a infiintat Barcelona?',
    raspunsuri: [
      { text: '1904', correct: false },
      { text: '1899', correct: true }
    ]
  },
  {
    intrebare: 'Cate trofee de Champions League a castigat Barcelona',
    raspunsuri: [
      { text: '3', correct: false },
      { text: '0', correct: false },
      { text: '6', correct: false },
      { text: '5', correct: true }
    ]
  },
  {
    intrebare: 'Ce numar are Messi pe tricou',
    raspunsuri: [
      { text: '7', correct: false },
      { text: '10', correct: true },
      { text: '6', correct: false },
      { text: '9', correct: false }
    ]
  },
  {
    intrebare: 'Cel mai important antrenor al Barcelonei este:',
    raspunsuri: [
      { text: 'Luis Enrique', correct: false },
      { text: 'Guardiola', correct: true }
    ]
  }
];