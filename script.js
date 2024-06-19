const sub = document.querySelector(".absolute");
const Li1 = document.getElementById("anim-1");

Li1.addEventListener("click", () => {
  console.log(sub);
  sub.classList.toggle("block");
});
console.log(Li1);

const img = new Image();
img.src = "./assets/images/avatar-ali.png";
let image = "./assets/images/avatar-ali.png";
console.log(image);
// zz.innerHTML = `   <img src="${img.src} "  />`;
const animals = ["ant", "bison", "camel", "duck", "elephant"];

const range = document.querySelector("#range");
const h1 = document.querySelector("h1");
var rangeInput = document.querySelector("input");

rangeInput.addEventListener("input", (e) => {
  h1.innerHTML = `<h1>${animals.slice(0, e.target.value)} </h1>`;

  console.log(e.target.value);
  console.log(animals);
  console.log(animals.slice(0, e.target.value));
});

animals.slice(0, 2);

// class Rectangle {
//   constructor(hauteur, largeur) {
//     this.hauteur = hauteur;
//     this.largeur = largeur;
//   }
// }
class animaux {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur + "m";
    this.largeur = largeur + "m";
  }
}
let garfield = new animaux(412, 200);

try {
  ope();
  document.body.style.background = "gray";
} catch (e) {
  // throw il y a un probleme
  console.log(e);
} finally {
  // meme si y a l erreur tfc
  document.body.style.background = "gray";
}

const tableau = ["1n", "n", "12", "12", "1277"];

let tab = { ...tableau };
tableau.splice(0, 1, "ajoute");

console.log(tab);
// console.log(tableau.splice(0, 1, "ajoute"));
console.log(tableau);
let bouleen;
// function change(bouleen) {
//   if (bouleen == true) {
//     bouleen = false;
//     h1.style.background = "green";
//   } else {
//     bouleen = true;
//     h1.style.background = "red";
//   }
//   return bouleen;
// }

h1.addEventListener("click", () => {
  if (bouleen == true) {
    bouleen = false;
    h1.style.background = "green";
  } else {
    bouleen = true;
    h1.style.background = "red";
  }
});
