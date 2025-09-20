resizeCanvas();
drawScene(scene, step);

// kontrol start button
document.getElementById("playBtn").addEventListener("click", () => {
  sounds.bgm.play(); // mulai BGM
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";

  scene = "aula"; // pindah ke scene pertama
  step = 0;
  drawScene();
});
