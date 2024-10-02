// Inicializando o áudio
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();

// Modos de jogo
const classicModeButton = document.getElementById('classicMode');
const survivalModeButton = document.getElementById('survivalMode');
const challengeModeButton = document.getElementById('challengeMode');

// Checando o progresso do jogador
let classicCompleted = false;

// Redireciona para o jogo ao clicar no modo clássico
classicModeButton.addEventListener('click', function() {
  alert('Iniciando o Modo Clássico...');
  
  // Aqui você redireciona para a página do jogo
  window.location.href = 'backroomsmodoclassico.html'; // Substitua pelo nome da página do seu jogo
});

// Função para desbloquear outros modos
function unlockModes() {
  if (classicCompleted) {
    survivalModeButton.classList.remove('locked');
    survivalModeButton.classList.add('active');
    survivalModeButton.addEventListener('click', function() {
      alert('Modo Sobrevivência iniciado!');
      // Aqui você também pode redirecionar para a página do modo Sobrevivência quando for liberado
    });

    challengeModeButton.classList.remove('locked');
    challengeModeButton.classList.add('active');
    challengeModeButton.addEventListener('click', function() {
      alert('Modo Desafio iniciado!');
      // Redirecionar para a página do modo Desafio
    });
  }
}