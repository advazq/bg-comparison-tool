// Gestor de eventos
const inputChevron = document.querySelectorAll(".input-chevron");
console.log(inputChevron);

const eventManager = {
  handleEvent: function (ev) {
    if (ev.type === "click") {
      ev.currentTarget.classList.toggle("rotate-chevron");
    }
  },
};

inputChevron.forEach((element) => element.addEventListener("click", eventManager));
