function abrirModal(imagemSrc) {
  var modal = document.getElementById('modal');
  var modalConteudo = document.getElementById('imagemModal');

  modal.style.display = 'block';
  modalConteudo.src = imagemSrc;
}

function fecharModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}
