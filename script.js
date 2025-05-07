// Função para ampliar a imagem no modal
function ampliarImagem(src) {
    document.getElementById("imagemAmpliada").src = src;
  }
  
  // Função para abrir modal informativo
  function abrirModal(titulo, descricao) {
    document.getElementById("tituloModal").innerText = titulo;
    document.getElementById("conteudoModal").innerText = descricao;
    var modal = new bootstrap.Modal(document.getElementById("modalInfo"));
    modal.show();
  }
  
  // Mensagem do botão "Saiba mais"
  function mostrarMensagem() {
    alert("Em breve, mais informações sobre os modelos disponíveis!");
  }
  
  // Exibir botão de "voltar ao topo" ao rolar a página
  window.onscroll = () => {
    const btn = document.getElementById("btnTopo");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };
  
  // Rolagem suave ao clicar no botão "voltar ao topo"
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnTopo");
    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  