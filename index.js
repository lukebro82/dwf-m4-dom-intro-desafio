const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const UlElement = document.querySelector(".lista");
  const LiElements = UlElement.querySelectorAll("li");

  for (let i = 0; i < LiElements.length; i++) {
    UlElement.removeChild(LiElements[i]);
  }

  cosasQueAprendimos.forEach((e) => {
    const newLi = document.createElement("li");
    newLi.textContent = e.tema;
    newLi.className = e.class;
    UlElement.appendChild(newLi);
  });
}

main();
