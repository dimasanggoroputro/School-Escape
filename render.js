const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set ukuran canvas fix 16:9
function resizeCanvas() {
  const maxWidth = window.innerWidth * 0.8;
  const maxHeight = window.innerHeight * 0.8;

  // jaga ratio 16:9
  let width = maxWidth;
  let height = (width / 16) * 9;

  if (height > maxHeight) {
    height = maxHeight;
    width = (height / 9) * 16;
  }

  canvas.width = width;
  canvas.height = height;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// bikin dialog box dan text
function drawDialog(text) {
  const dialogBoxHeight = 150;
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(
    0,
    canvas.height - dialogBoxHeight,
    canvas.width,
    dialogBoxHeight
  );
  ctx.fillStyle = "white";
  ctx.font = "17px monospace";
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    ctx.fillText(line, 30, canvas.height - dialogBoxHeight + 40 + i * 30);
  });
}

// berhentiin semua sfx (kecuali bgm)
function stopAllSfx() {
  for (let key in sounds) {
    if (sounds[key] && !sounds[key].loop) {
      sounds[key].pause(); // berhentiin suara
      sounds[key].currentTime = 0; // balikin ke awal
    }
  }
}

// berhentikan bgm
function stopBgm() {
  if (sounds.bgm) {
    sounds.bgm.pause();
    sounds.bgm.currentTime = 0;
  }
}

// reset semua playedSfx di scenes biar bisa diputar ulang
function resetSfxFlags() {
  for (let sceneName in scenes) {
    scenes[sceneName].forEach((step) => {
      if (step.playedSfx) {
        step.playedSfx = false;
      }
    });
  }
}

// bikin scene
function drawScene(sceneName, step) {
  const stepData = scenes[sceneName]?.[step];
  if (!stepData) {
    console.warn("Step data tidak ditemukan:", sceneName, step);
    return;
  }

  // Kalau game over
  if (stepData.isGameOver) {
    showEndScreen("gameover");
    return;
  }

  // Kalau win
  if (stepData.isWin) {
    showEndScreen("win");
    return;
  }

  // Kalau bad end
  if (stepData.isBadend) {
    showEndScreen("badend");
    return;
  }

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // di bagian drawScene()
  if (stepData.bg) {
    if (bg[stepData.bg]) {
      ctx.drawImage(bg[stepData.bg], 0, 0, canvas.width, canvas.height);
    } else if (stepData.bg === "black") {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  // char
  if (stepData.chars) {
    stepData.chars.forEach((c, i) => {
      if (typeof c === "string") {
        // versi lama (cuma string → auto posisikan default)
        ctx.drawImage(char[c], 100 + i * 200, canvas.height - 450, 250, 430);
      } else {
        // versi baru (object dengan posisi & ukuran custom)
        ctx.drawImage(char[c.name], c.x, c.y, c.w, c.h);
      }
    });
  }

  // sfx
  stopAllSfx();
  if (stepData.sfx && !stepData.playedSfx) {
    sounds[stepData.sfx].currentTime = 0;
    sounds[stepData.sfx].play();
    stepData.playedSfx = true;
  }

  // text
  drawDialog(stepData.text);
}

// bikin end screen (game over / win)
function showEndScreen(type) {
  const endScreen = document.getElementById("endScreen");
  const endTitle = document.getElementById("endTitle");

  document.getElementById("gameCanvas").style.display = "none";
  endScreen.style.display = "flex";

  if (type === "gameover") {
    endTitle.textContent = "GAME OVER";
    endTitle.style.color = "red";
  } else if (type === "win") {
    endTitle.textContent = "YOU WIN!";
    endTitle.style.color = "lime";
  } else if (type === "badend") {
    endTitle.textContent = "BAD ENDING";
    endTitle.style.color = "yellow";
  }
}

// sembunyiin end screen
function hideEndScreen() {
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";
}
