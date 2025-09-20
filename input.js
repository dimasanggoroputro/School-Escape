document.addEventListener("keydown", (e) => {
  if (e.key === "1" || e.key === "2") {
    handleChoice(e.key);
  }

  const endScreen = document.getElementById("endScreen");

  if (endScreen.style.display === "flex") {
    if (e.key.toLowerCase() === "r") {
      stopAllSfx();
      stopBgm();
      sounds.bgm.play(); // mulai BGM
      scene = "aula"; // mulai ulang
      step = 0;
      hideEndScreen();
      resetSfxFlags();
      drawScene(scene, step);
    }
    if (e.key.toLowerCase() === "h") {
      hideEndScreen();
      document.getElementById("homeScreen").style.display = "block";
      document.getElementById("gameCanvas").style.display = "none";
      resetSfxFlags();
      stopBgm();
    }
  }
});

document.addEventListener("click", () => {
  const stepData = scenes[scene][step];

  // Kalau ada pilihan, jangan auto next (biar player pilih manual)
  if (stepData.choices) return;

  // Kalau step terakhir dan ada next → pindah scene
  if (step >= scenes[scene].length - 1) {
    if (stepData.next) {
      scene = stepData.next;
      step = 0;
    }
  } else {
    // Kalau belum step terakhir → lanjut step
    step++;
  }

  drawScene(scene, step);
});
