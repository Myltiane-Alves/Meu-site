// Obetnha o modal
const modal = document.getElementById("myModal");

// Pegue a imagem e insira-a dentro do modal - use seu texto "alt" como legenda
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.onclick = () => {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  console.log("clicando na img");
};

// Obtenha o elemento <span> que fecha o modal
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = () => {
  console.log("clicando no botão");
  modal.style.display = "none";
};
