// Load Background Images
const bg = {
  aula: new Image(),
  lorong: new Image(),
  kelas: new Image(),
  pintu_keluar: new Image(),
  ruang_guru: new Image(),
  black: null,
};
bg.aula.src = "assets/bg/aula.png";
bg.lorong.src = "assets/bg/lorong.png";
bg.kelas.src = "assets/bg/kelas.png";
bg.pintu_keluar.src = "assets/bg/pintu_keluar.png";
bg.ruang_guru.src = "assets/bg/ruang_guru.png";

// Load Character Images
const char = {
  mc: new Image(),
  mc2: new Image(),
  guru: new Image(),
  bayangan_guru: new Image(),
  kunti: new Image(),
  penjaga: new Image(),
};
char.guru.src = "assets/char/guru.png";
char.bayangan_guru.src = "assets/char/bayangan_guru.png";
char.kunti.src = "assets/char/kunti.png";
char.penjaga.src = "assets/char/penjaga.png";
char.mc.src = "assets/char/mc.png";
char.mc2.src = "assets/char/mc2.png";

// Load Sound Effects
const sounds = {
  bgm: new Audio("assets/sound/bgm.mp3"),
  creeks: new Audio("assets/sound/creeks.wav"),
  flash_light: new Audio("assets/sound/flashligth.mp3"),
  jump_scare: new Audio("assets/sound/jump.ogg"),
};
sounds.bgm.loop = true;
sounds.bgm.volume = 0.3;
sounds.creeks.volume = 0.7;
sounds.flash_light.volume = 1.0;
sounds.jump_scare.volume = 0.2;
