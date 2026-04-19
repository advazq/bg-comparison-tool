// Gestor de eventos
const inputChevron = document.querySelectorAll(".input-chevron");
const eventManager = {
  handleEvent: function (ev) {
    if (ev.type === "click") {
      ev.currentTarget.classList.toggle("rotate-chevron");

      // Busco la lista correspondiente al chevron clicado por el usuario y hago toggle a la clase
      const clickedChevron = ev.currentTarget;
      const boardgameListParent = clickedChevron.closest(".boardgame-finder");
      const selectedBoardgameList = boardgameListParent.querySelector(".bg-list");
      selectedBoardgameList.classList.toggle("hidden");
    }
  },
};

inputChevron.forEach((element) => element.addEventListener("click", eventManager));
