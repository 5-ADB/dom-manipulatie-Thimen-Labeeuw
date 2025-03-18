const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];

const AddBtn = document.querySelector("#AddBtn");
const InputLogin = document.querySelector("#login");
const InputLeeftijd = document.querySelector("#leeftijd");

const OuderBtn = document.querySelector("#ouderBtn");
const JongerBtn = document.querySelector("#jongerBtn");
const InputFilter = document.querySelector("#filterLeeftijd");
const Tekst = document.querySelector("#tekst");

AddBtn.addEventListener("click", addInfo);
OuderBtn.addEventListener("click", ouder);
JongerBtn.addEventListener("click", jonger);

function addInfo() {
  gebruikers.push({
    id: gebruikers.length + 1,
    login: InputLogin.value,
    leeftijd: parseInt(InputLeeftijd.value),
  });
  console.log(gebruikers);
}

function ouder() {
  Tekst.textContent = "";
  gebruikers.forEach((info) => {
    if (info.leeftijd < InputFilter.value) {
      const itemlist = document.createElement("div");
      const subtractBtn = document.createElement("btn");
      subtractBtn.textContent = "-";
      itemlist.className = "kadertje";
      itemlist.textContent = info.login;
      Tekst.appendChild(itemlist);
      Tekst.appendChild(subtractBtn);
    }
  });
}

function jonger() {
  Tekst.textContent = "";
  gebruikers.forEach((info) => {
    if (info.leeftijd < InputFilter.value) {
      const itemlist = document.createElement("div");
      const subtractBtn = document.createElement("btn");
      subtractBtn.textContent = "-";
      itemlist.className = "kadertje";
      itemlist.textContent = info.login;
      Tekst.appendChild(itemlist);
      Tekst.appendChild(subtractBtn);
    }
  });
}
