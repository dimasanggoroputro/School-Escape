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

// kontrol start button
document.getElementById("playBtn").addEventListener("click", () => {
  sounds.bgm.play(); // mulai BGM
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";

  scene = "aula"; // pindah ke scene pertama
  drawScene();
});

let scene = "aula"; // scene awal
let step = 0; // layar hitam dulu

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch (scene) {
    case "aula":
      if (step === 0) {
        // layar gelap dulu
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawDialog(
          "Gelap. Sunyi. Hanya ada suara detak jam tua yang entah dari mana datangnya."
        );
      } else if (step === 1) {
        // baru masuk aula
        ctx.drawImage(bg.aula, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Kamu membuka mata. Atap tinggi aula sekolah terlihat retak, beberapa lampu gantung \nberayun pelan seolah ditiup angin yang gak pernah ada. Debu beterbangan, kursi-kursi \nkayu di sekelilingmu patah dan berserakan"
        );
      } else if (step === 2) {
        ctx.drawImage(bg.aula, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Suasana ini aneh. Seharusnya sekolah sudah lama tutup malam ini… \ntapi kenapa aku masih di sini? Dan lebih aneh lagi, \nkenapa pintu aula terkunci rapat dari luar"
        );
      } else if (step === 3) {
        ctx.drawImage(bg.aula, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Halo… ada orang?” suaramu bergetar, menggema ke seluruh ruangan. \nTapi tak ada jawaban. Hanya sunyi yang menjawabmu."
        );
      } else if (step === 4) {
        ctx.drawImage(bg.aula, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Lalu, samar-samar dari pojok aula yang gelap, kamu mendengar suara"
        );
      } else if (step === 5) {
        ctx.drawImage(bg.aula, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        sounds.creeks.currentTime = 0;
        sounds.creeks.play();
        drawDialog(
          "“Krrrkkk… krrrkkk…” seperti kursi yang diseret pelan. \nTapi tidak ada siapa pun di sana.\n1. Masuk ke lorong \n2. Pergi ke ruang kelas sebelah"
        );
      }
      break;

    case "lorong":
      if (step === 0) {
        ctx.drawImage(bg.lorong, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 650,
          canvas.height - 500,
          300,
          500
        );
        sounds.creeks.pause();
        drawDialog(
          "Lorong itu panjang dan sempit. Lampu neon di langit-langit \nberkedip-kedip, seakan bisa mati kapan saja. Bau lembap memenuhi udara."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.lorong, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 650,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Langkah kakimu bergema, tapi ada gema lain—suara \nlangkah kaki lain, tidak sinkron denganmu."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.lorong, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 650,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Dari kejauhan, terlihat sosok seorang murid. \nRambutnya berantakan menutupi setengah wajah. Dia berdiri diam, lalu perlahan menoleh. \nSenyumnya samar, entah ramah entah menyeramkan."
        );
      } else if (step === 3) {
        ctx.drawImage(bg.lorong, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 450,
          canvas.height - 500,
          300,
          500
        );
        ctx.drawImage(
          char.mc2,
          canvas.width - 730,
          canvas.height - 470,
          300,
          450
        );
        drawDialog(
          "“Hei… akhirnya ada orang lain juga” katanya. Suaranya datar, seperti tidak punya emosi. \n“Ikut aku. Aku tahu jalan keluar.” \n1. Ikut dia \n2. Lari sendiri ke pintu keluar"
        );
      }
      break;

    case "kelas":
      if (step === 0) {
        ctx.drawImage(bg.kelas, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        sounds.creeks.pause();
        drawDialog(
          " Kelas itu berantakan. Jendela pecah, kertas ujian berserakan di lantai, papan tulis \npenuh coretan samar: “Jangan percaya dia…"
        );
      } else if (step === 1) {
        ctx.drawImage(bg.kelas, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Angin malam masuk lewat celah jendela, membawa suara lirih seperti bisikan. \nSaat kamu mendekat ke papan tulis, terdengar “cekek… cekek…” \ndari arah jendela."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.kelas, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          char.mc,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        sounds.jump.currentTime = 0;
        sounds.jump.play();
        ctx.drawImage(char.kunti, 50, canvas.height - 550, 300, 500);
        drawDialog(
          "Sesosok tubuh muncul—hantu dengan wajah pucat dan mata kosong, \nmerangkak dari jendela masuk ke kelas.\n1.Melawan dengan kursi \n2.Lari ke ruang guru"
        );
      }
      break;

    case "ruangGuru":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        drawDialog(
          " Ruangan ini lebih gelap dari yang lain. Rak buku berdebu, \nkaca lemari retak, dan beberapa meja berantakan."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        drawDialog(
          "Hanya ada satu cahaya—lampu meja yang berkelip, \ndi sampingnya berdiri sosok tinggi dengan jas kusut."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Itu… seorang guru. Atau lebih tepatnya, arwah seorang guru. \nMatanya kosong, tatapannya kosong tapi menusuk."
        );
      } else if (step === 3) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("“Kenapa kau di sini?” suaranya berat, bergema.");
      } else if (step === 4) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          " Di sekitarnya ada beberapa meja guru. Kamu ingat, seseorang pernah berkata\n “Kunci gerbang disimpan di ruang guru.”"
        );
      } else if (step === 5) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "1.Nyalakan lampu ruangan \n2.Periksa meja dengan senter hp"
        );
      }
      break;

    case "ruangGuruSolo":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        drawDialog(
          " Ruangan ini lebih gelap dari yang lain. Rak buku berdebu, \nkaca lemari retak, dan beberapa meja berantakan."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        drawDialog(
          "Hanya ada satu cahaya—lampu meja yang berkelip, \ndi sampingnya berdiri sosok tinggi dengan jas kusut."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Itu… seorang guru. Atau lebih tepatnya, arwah seorang guru. \nMatanya kosong, tatapannya kosong tapi menusuk."
        );
      } else if (step === 3) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("“Kenapa kau di sini?” suaranya berat, bergema.");
      } else if (step === 4) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          " Di sekitarnya ada beberapa meja guru. Kamu ingat, seseorang pernah berkata\n “Kunci gerbang disimpan di ruang guru.”"
        );
      } else if (step === 5) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);

        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "1.Nyalakan lampu ruangan \n2.Periksa meja dengan senter hp"
        );
      }
      break;

    case "ruangGuru2":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("Kamu menyalakan lampu ruangan.");
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.guru,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Seketika ruangan terang. Ada sosok berdiri di pojok,\nseorang guru dengan wajah pucat dan mata merah."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.guru,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Guru itu perlahan menoleh padamu.\nSuara serak keluar dari mulutnya: 'Kamu... tidak seharusnya di sini...'"
        );
      } else if (step === 3) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.guru,
          canvas.width - 500,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Tiba-tiba langkahnya makin cepat, matanya memerah!\nDia berlari ke arahmu!"
        );
      } else if (step === 4) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.guru,
          canvas.width - 700,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("Sebelum sempat kabur, dia menerkam...");
      }
      break;

    case "ruangGuru2Solo":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("Kamu menyalakan lampu ruangan.");
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.guru,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Seketika ruangan terang. Ada sosok berdiri di pojok,\nseorang guru dengan wajah pucat dan mata merah."
        );
      } else if (step === 2) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.guru,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Guru itu perlahan menoleh padamu.\nSuara serak keluar dari mulutnya: 'Kamu... tidak seharusnya di sini...'"
        );
      } else if (step === 3) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.guru,
          canvas.width - 600,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Tiba-tiba langkahnya makin cepat, matanya memerah!\nDia berlari ke arahmu!"
        );
      } else if (step === 4) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.guru, 150, canvas.height - 500, 300, 500);
        drawDialog("Sebelum sempat kabur, dia menerkam...");
      }
      break;

    case "ruangGuru3":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("Kamu menyalakan senter hp.");
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Kamu menumukan sebuah kunci dan langsung lari untuk kabur dari sini."
        );
      }
      break;

    case "ruangGuru3Solo":
      if (step === 0) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog("Kamu menyalakan senter hp.");
      } else if (step === 1) {
        ctx.drawImage(bg.ruangGuru, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.bayangan,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Kamu menumukan sebuah kunci dan langsung lari untuk kabur dari sini."
        );
      }
      break;

    case "pintuKeluar":
      if (step === 0) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        drawDialog(
          "Kamu berhasil keluar dari ruang guru dan berhasih menumukan gerbang sekolah \nTapi di luar sana sudah ada penjaga sekolah yang menunggumu..."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”"
        );
      } else if (step === 2) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(char.mc2, 200, canvas.height - 470, 300, 450);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. Buka pintu dengna kunci yang kamu bawa"
        );
      }
      break;

    case "pintuKeluarSolo":
      if (step === 0) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        drawDialog(
          "Kamu berhasil keluar dari ruang guru dan berhasih menumukan gerbang sekolah \nTapi di luar sana sudah ada penjaga sekolah yang menunggumu..."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”"
        );
      } else if (step === 2) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. Buka pintu dengna kunci yang kamu bawa"
        );
      }
      break;

    case "pintuKeluarBedend":
      if (step === 0) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        drawDialog(
          "Kamu lari ke pintu keluar, tapi di luar sana sudah ada penjaga sekolah yang menunggumu..."
        );
      } else if (step === 1) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”"
        );
      } else if (step === 2) {
        ctx.drawImage(bg.pintuKeluar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(char.mc, 50, canvas.height - 500, 300, 500);
        ctx.drawImage(
          char.penjaga,
          canvas.width - 400,
          canvas.height - 500,
          300,
          500
        );
        drawDialog(
          "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. lari sekencang mungkin dari sini"
        );
      }
      break;

    case "BADEND":
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "green";
      ctx.font = "50px monospace";
      ctx.fillText(
        "BED ENDING",
        canvas.width / 2 - 150,
        canvas.height / 2 - 20
      );
      ctx.font = "20px monospace";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Tekan 'R' untuk mulai ulang",
        canvas.width / 2 - 170,
        canvas.height / 2 + 20
      );
      ctx.fillText(
        "atau 'H' untuk kembali ke menu utama",
        canvas.width / 2 - 170,
        canvas.height / 2 + 50
      );
      break;

    case "GAMEOVER":
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      ctx.font = "50px monospace";
      ctx.fillText("GAME OVER", canvas.width / 2 - 150, canvas.height / 2 - 20);
      ctx.font = "20px monospace";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Tekan 'R' untuk mulai ulang",
        canvas.width / 2 - 170,
        canvas.height / 2 + 20
      );
      ctx.fillText(
        "atau 'H' untuk kembali ke menu utama",
        canvas.width / 2 - 170,
        canvas.height / 2 + 50
      );
      break;

    case "WIN":
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "green";
      ctx.font = "50px monospace";
      ctx.fillText(
        "KAMU MENANG!",
        canvas.width / 2 - 180,
        canvas.height / 2 - 20
      );
      ctx.font = "20px monospace";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Tekan 'R' untuk mulai ulang",
        canvas.width / 2 - 180,
        canvas.height / 2 + 20
      );
      ctx.fillText(
        "atau 'H' untuk kembali ke menu utama",
        canvas.width / 2 - 180,
        canvas.height / 2 + 50
      );
      break;
  }
}

// bikin dialog box di bawah layar
function drawDialog(text) {
  const boxHeight = 150;
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, canvas.height - boxHeight, canvas.width, boxHeight);

  ctx.fillStyle = "white";
  ctx.font = "20px monospace";

  const lines = text.split("\n");
  lines.forEach((line, i) => {
    ctx.fillText(line, 30, canvas.height - boxHeight + 40 + i * 30);
  });
}

// kontrol pilihan
// ini listener keyboard lo, jangan diubah
document.addEventListener("keydown", (e) => {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "r" ||
    e.key === "R" ||
    e.key === "h" ||
    e.key === "H"
  ) {
    handleInput(e.key);
    drawScene();
  }
});
// listener tambahan buat mouse
document.addEventListener("click", () => {
  handleInput("Enter"); // klik kiri = anggap pencet Enter
  drawScene();
});

function handleInput(key) {
  if (scene === "aula") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      step = 4;
    } else if (step === 4) {
      step = 5;
    } else if (step === 5) {
      if (key === "1") {
        scene = "lorong";
        step = 0;
      } else if (key === "2") {
        scene = "kelas";
        step = 0;
      }
    }
  } else if (scene === "lorong") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      if (key === "1") {
        scene = "ruangGuru";
        step = 0;
      } else if (key === "2") {
        scene = "pintuKeluarBedend";
        step = 0;
      }
    }
  } else if (scene === "kelas") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      if (key === "1") {
        scene = "GAMEOVER";
        step = 0;
      } else if (key === "2") {
        scene = "ruangGuruSolo";
        step = 0;
      }
    }
  } else if (scene === "ruangGuru") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      step = 4;
    } else if (step === 4) {
      step = 5;
    } else if (step === 5) {
      if (key === "1") {
        scene = "ruangGuru2";
        step = 0;
      } else if (key === "2") {
        scene = "ruangGuru3";
        step = 0;
      }
    }
  } else if (scene === "ruangGuruSolo") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      step = 4;
    } else if (step === 4) {
      step = 5;
    } else if (step === 5) {
      if (key === "1") {
        scene = "ruangGuru2Solo";
        step = 0;
      } else if (key === "2") {
        scene = "ruangGuru3Solo";
        step = 0;
      }
    }
  } else if (scene === "ruangGuru2") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      step = 4;
    } else if (step === 4) {
      scene = "GAMEOVER";
      step = 0;
    }
  } else if (scene === "ruangGuru2Solo") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      step = 3;
    } else if (step === 3) {
      step = 4;
    } else if (step === 4) {
      scene = "GAMEOVER";
      step = 0;
    }
  } else if (scene === "ruangGuru3") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      scene = "pintuKeluar";
      step = 0;
    }
  } else if (scene === "ruangGuru3Solo") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      scene = "pintuKeluarSolo";
      step = 0;
    }
  } else if (scene === "pintuKeluar") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      if (key === "1") {
        scene = "GAMEOVER";
        step = 0;
      } else if (key === "2") {
        scene = "WIN";
        step = 0;
      }
    }
  } else if (scene === "pintuKeluarSolo") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      if (key === "1") {
        scene = "GAMEOVER";
        step = 0;
      } else if (key === "2") {
        scene = "WIN";
        step = 0;
      }
    }
  } else if (scene === "pintuKeluarBedend") {
    if (step === 0) {
      step = 1;
    } else if (step === 1) {
      step = 2;
    } else if (step === 2) {
      if (key === "1") {
        scene = "GAMEOVER";
        step = 0;
      } else if (key === "2") {
        scene = "BADEND";
        step = 0;
      }
    }
  } else if (scene === "BADEND") {
    if (key === "r" || key === "R") {
      scene = "aula";
      step = 0;
    } else if (key === "h" || key === "H") {
      document.getElementById("gameCanvas").style.display = "none";
      document.getElementById("homeScreen").style.display = "block";
      sounds.bgm.pause();
      sounds.bgm.currentTime = 0;
      scene = "aula";
      step = 0;
    }
  } else if (scene === "GAMEOVER") {
    if (key === "r" || key === "R") {
      scene = "aula";
      step = 0;
    } else if (key === "h" || key === "H") {
      document.getElementById("gameCanvas").style.display = "none";
      document.getElementById("homeScreen").style.display = "block";
      sounds.bgm.pause();
      sounds.bgm.currentTime = 0;
      scene = "aula";
      step = 0;
    }
  } else if (scene === "WIN") {
    if (key === "r" || key === "R") {
      scene = "aula";
      step = 0;
    } else if (key === "h" || key === "E") {
      document.getElementById("gameCanvas").style.display = "none";
      document.getElementById("homeScreen").style.display = "block";
      sounds.bgm.pause();
      sounds.bgm.currentTime = 0;
      scene = "aula";
      step = 0;
    }
  }
}

// pertama kali tampil
drawScene();
