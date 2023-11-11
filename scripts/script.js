// codigo para card-modal

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

// codigo para card-formulario
function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpf;
}

function validarCPF(cpf) {
  var regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  return regex.test(cpf);
}

document.getElementById('input-cpf').addEventListener('input', function () {
  var cpfInput = this.value;
  cpfInput = cpfInput.replace(/\D/g, '');
  this.value = formatarCPF(cpfInput);
  if (validarCPF(cpfInput)) {
    this.classList.remove('cpf-invalido');
  } else {
    this.classList.add('cpf-invalido');
  }
});

function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, '');
  if (telefone.length > 2) {
    telefone = '(' + telefone.substring(0, 2) + ')' + telefone.substring(2);
  }
  if (telefone.length > 7) {
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
  }
  return telefone;
}

function validarTelefone(telefone) {
  var regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(telefone);
}

document
  .getElementById('input-telefone')
  .addEventListener('input', function () {
    var telefoneInput = this.value;
    telefoneInput = telefoneInput.replace(/\D/g, '');
    this.value = formatarTelefone(telefoneInput);
    if (validarTelefone(telefoneInput)) {
      this.classList.remove('telefone-invalido');
    } else {
      this.classList.add('telefone-invalido');
    }
  });

// codigo para card-zoom
document.addEventListener('DOMContentLoaded', function () {
  const img = document.getElementById('imagem-zoom');

  setTimeout(function () {
    img.style.transform = 'scale(1.5)';
  }, 100);
});

// codigo para mostrar telefone
function mostrarTelefone(elemento) {
  elemento.innerHTML = '(11) 99999-9999';
  elemento.style.textDecoration = 'none';
  elemento.style.marginLeft = '75px';
  elemento.style.color = '#fE6613';
  elemento.style.fontWeight = '500';
  elemento.style.cursor = 'auto';
  console.log('O usuario solicitou o numero do telefone');
}

// codigo para fazer o download da imagem
document
  .getElementById('button-download')
  .addEventListener('click', function () {
    var caminhoDaImagem = document.getElementById('imagem-com-rotulo').src;
    var linkTemporario = document.createElement('a');
    linkTemporario.href = caminhoDaImagem;
    linkTemporario.download = 'nome_da_imagem.jpg';
    document.body.appendChild(linkTemporario);
    linkTemporario.click();
    document.body.removeChild(linkTemporario);
  });
