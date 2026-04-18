// Gestor de eventos
const inputChevron = document.querySelectorAll(".input-chevron");
const boardgameSelector = document.querySelectorAll(".bg-list");

const eventManager = {
  handleEvent: function (ev) {
    if (ev.type === "click") {
      ev.currentTarget.classList.toggle("rotate-chevron");
      ev.boardgameSelector.classList.toggle("hidden");
    }
  },
};

inputChevron.forEach((element) => element.addEventListener("click", eventManager));
