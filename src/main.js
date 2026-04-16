// Lógica para girar chevron de input

const inputChevron = document.querySelector(".input-chevron");

const rotateChevron = () => {
  inputChevron.classList.toggle("rotate-chevron");
};

inputChevron.addEventListener("click", rotateChevron);
