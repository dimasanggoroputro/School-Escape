let scene = "aula";
let step = 0;

function nextStep() {
  if (step < scenes[scene].length - 1) {
    step++;
  }
  drawScene(scene, step);
}

function handleChoice(key) {
  const stepData = scenes[scene][step];

  if (stepData.choices && stepData.choices[key]) {
    scene = stepData.choices[key];
    step = 0;
  } else if (stepData.next) {
    scene = stepData.next; // langsung pindah scene berikutnya
    step = 0;
  } else {
    step++;
  }

  drawScene(scene, step);
}

function showGameOver() {
  document.getElementById("gameCanvas").style.display = "none";
  document.getElementById("gameOverScreen").style.display = "flex";
}

function hideGameOver() {
  document.getElementById("gameCanvas").style.display = "block";
  document.getElementById("gameOverScreen").style.display = "none";
}
