const checkLeftBtn = document.getElementById('check-left');
const checkRightBtn = document.getElementById('check-right');
const toggleLightBtn = document.getElementById('toggle-light');
const jumpscare = document.getElementById('jumpscare');
const timeDisplay = document.getElementById('game-time');
const gameOverScreen = document.getElementById('game-over');
const restartBtn = document.getElementById('restart');

// Música de fundo
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();

// Estado do jogo
let isGameOver = false;
let isLightOn = false;
let time = 0; // Contador de tempo no formato MM:SS

// Função para atualizar o tempo
function updateTime() {
  if (isGameOver) return;
  time++;

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timeDisplay.textContent = `${minutes}:${seconds}`;

  // Jumpscare aleatório após um tempo
  if (time === Math.floor(Math.random() * 120) + 60) {
    triggerJumpscare();
  }
}

// Atualiza o tempo a cada segundo
setInterval(updateTime, 1000);

// Função para ativar o jumpscare
function triggerJumpscare() {
  jumpscare.style.display = 'flex';
  setTimeout(() => {
    endGame();
  }, 1000); // Aparece por 1 segundo antes de acabar o jogo
}

// Função para finalizar o jogo
function endGame() {
  isGameOver = true;
  jumpscare.style.display = 'none';
  gameOverScreen.style.display = 'block';
}

// Reiniciar o jogo
restartBtn.addEventListener('click', function() {
  location.reload();
});

// Controles do jogador
checkLeftBtn.addEventListener('click', function() {
  if (isGameOver) return;
  alert('Verificando a esquerda...');
});

checkRightBtn.addEventListener('click', function() {
  if (isGameOver) return;
  alert('Verificando a direita...');
});

toggleLightBtn.addEventListener('click', function() {
  if (isGameOver) return;
  isLightOn = !isLightOn;
  toggleLightBtn.textContent = isLightOn ? 'Desligar Luz' : 'Luz';
  document.body.style.backgroundColor = isLightOn ? '#f0e68c' : '#111';
});