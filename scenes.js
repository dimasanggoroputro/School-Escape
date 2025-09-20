const scenes = {
  aula: [
    {
      bg: "black",
      chars: [],
      text: "Gelap. Sunyi. Hanya ada suara detak jam tua yang entah dari mana \ndatangnya.",
    },
    {
      bg: "aula",
      chars: ["mc"],
      text: "Kamu membuka mata. Atap tinggi aula sekolah terlihat retak, beberapa lampu gantung \nberayun pelan seolah ditiup angin yang gak pernah ada. Debu beterbangan, kursi-kursi \nkayu di sekelilingmu patah dan berserakan",
    },
    {
      bg: "aula",
      chars: ["mc"],
      text: "Suasana ini aneh. Seharusnya sekolah sudah lama tutup malam ini… \ntapi kenapa aku masih di sini? Dan lebih aneh lagi, \nkenapa pintu aula terkunci rapat dari luar",
    },
    {
      bg: "aula",
      chars: ["mc"],
      text: "“Halo… ada orang?” suaramu bergetar, menggema ke seluruh ruangan. \nTapi tak ada jawaban. Hanya sunyi yang menjawabmu.",
    },
    {
      bg: "aula",
      chars: ["mc"],
      text: "Lalu, samar-samar dari pojok aula yang gelap, kamu mendengar suara",
    },
    {
      bg: "aula",
      chars: ["mc"],
      text: "“Krrrkkk… krrrkkk…” seperti kursi yang diseret pelan. \nTapi tidak ada siapa pun di sana.\n1. Masuk ke lorong \n2. Pergi ke ruang kelas sebelah",
      sfx: "creeks",
      choices: {
        1: "lorong",
        2: "kelas",
      },
    },
  ],

  lorong: [
    {
      bg: "lorong",
      chars: [{ name: "mc", x: 400, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Lorong itu panjang dan sempit. Lampu neon di langit-langit \nberkedip-kedip, seakan bisa mati kapan saja. Bau lembap memenuhi udara.",
    },
    {
      bg: "lorong",
      chars: [{ name: "mc", x: 400, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Langkah kakimu bergema, tapi ada gema lain—suara \nlangkah kaki lain, tidak sinkron denganmu.",
    },
    {
      bg: "lorong",
      chars: [{ name: "mc", x: 300, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Dari kejauhan, terlihat sosok seorang murid. \nRambutnya berantakan menutupi setengah wajah. Dia berdiri diam, lalu perlahan menoleh. \nSenyumnya samar, entah ramah entah menyeramkan.",
    },
    {
      bg: "lorong",
      chars: [
        { name: "mc2", x: 500, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 250, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "“Hei… akhirnya ada orang lain juga” katanya. Suaranya datar, seperti tidak punya emosi. \n“Ikut aku. Aku tahu jalan keluar.” \n1. Ikut dia \n2. Lari sendiri ke pintu keluar",
      choices: {
        1: "ruangGuru",
        2: "pintuKeluar_badend",
      },
    },
  ],

  kelas: [
    {
      bg: "kelas",
      chars: [{ name: "mc", x: 300, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Kelas itu berantakan. Jendela pecah, kertas ujian berserakan di lantai, papan tulis \npenuh coretan samar: “Jangan percaya dia…",
    },

    {
      bg: "kelas",
      chars: [{ name: "mc", x: 500, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Angin malam masuk lewat celah jendela, membawa suara lirih seperti bisikan. \nSaat kamu mendekat ke papan tulis, terdengar “cekek… cekek…” \ndari arah jendela.",
    },
    {
      bg: "kelas",
      chars: ["mc", "kunti"],
      sfx: "jump_scare",
      chars: [
        { name: "kunti", x: 100, y: canvas.height - 450, w: 230, h: 410 },
        { name: "mc", x: 500, y: canvas.height - 450, w: 250, h: 430 },
      ],

      text: "Sesosok tubuh muncul—hantu dengan wajah pucat dan mata kosong, \nmerangkak dari jendela masuk ke kelas.\n1.Melawan dengan kursi \n2.Lari ke ruang guru",
      choices: {
        1: "mati",
        2: "ruangGuru_solo",
      },
    },
  ],

  ruangGuru_solo: [
    {
      bg: "ruang_guru",
      chars: [{ name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 }],
      text: "Ruang guru gelap dan berantakan. Meja-meja kayu terbalik, \nlemari arsip terbuka, kertas berserakan di mana-mana. \nLampu di langit-langit berkedip-kedip, menciptakan bayangan menari di dinding.",
    },
    {
      bg: "ruang_guru",
      chars: [{ name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 }],
      text: "Hanya ada satu cahaya—lampu meja yang berkelip, \ndi sampingnya berdiri sosok tinggi dengan jas kusut.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Itu… seorang guru. Atau lebih tepatnya, arwah seorang guru. \nMatanya kosong, tatapannya kosong tapi menusuk.",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "“Kenapa kau di sini?” suaranya berat, bergema.",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Di sekitarnya ada beberapa meja guru. Kamu ingat, seseorang pernah berkata\n“Kunci gerbang disimpan di ruang guru.”",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "1.Nyalakan lampu ruangan \n2.Periksa meja dengan senter hp",
      choices: {
        1: "ruangGuru2_solo",
        2: "ruangGuru3_solo",
      },
    },
  ],

  ruangGuru: [
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Ruang guru gelap dan berantakan. Meja-meja kayu terbalik, \nlemari arsip terbuka, kertas berserakan di mana-mana. \nLampu di langit-langit berkedip-kedip, menciptakan bayangan menari di dinding.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Hanya ada satu cahaya—lampu meja yang berkelip, \ndi sampingnya berdiri sosok tinggi dengan jas kusut.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Itu… seorang guru. Atau lebih tepatnya, arwah seorang guru. \nMatanya kosong, tatapannya kosong tapi menusuk.",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "“Kenapa kau di sini?” suaranya berat, bergema.",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Di sekitarnya ada beberapa meja guru. Kamu ingat, seseorang pernah berkata\n“Kunci gerbang disimpan di ruang guru.”",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "1.Nyalakan lampu ruangan \n2.Periksa meja dengan senter hp",
      choices: {
        1: "ruangGuru2",
        2: "ruangGuru3",
      },
    },
  ],

  ruangGuru2: [
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      sfx: "flash_light",
      text: "Kamu menyalakan lampu ruangan.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Seketika ruangan terang. Ada sosok berdiri di pojok,\nseorang guru dengan wajah pucat dan mata merah.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Guru itu perlahan menoleh padamu.\nSuara serak keluar dari mulutnya: 'Kamu... tidak seharusnya di sini...'",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "guru",
          x: 450,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Tiba-tiba langkahnya makin cepat, matanya memerah!\nDia berlari ke arahmu!",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "guru",
          x: 250,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Sebelum sempat kabur, dia menerkam...",
      sfx: "jump_scare",
      next: "mati",
    },
  ],

  ruangGuru2_solo: [
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      sfx: "flash_light",
      text: "Kamu menyalakan lampu ruangan.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Seketika ruangan terang. Ada sosok berdiri di pojok,\nseorang guru dengan wajah pucat dan mata merah.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Guru itu perlahan menoleh padamu.\nSuara serak keluar dari mulutnya: 'Kamu... tidak seharusnya di sini...'",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "guru",
          x: 450,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Tiba-tiba langkahnya makin cepat, matanya memerah!\nDia berlari ke arahmu!",
    },

    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        {
          name: "guru",
          x: 250,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Sebelum sempat kabur, dia menerkam...",
      sfx: "jump_scare",
      next: "mati",
    },
  ],

  ruangGuru3: [
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      sfx: "flash_light",
      text: "Kamu menyalakan senter hp.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Kamu menumukan sebuah kunci dan langsung lari untuk kabur dari sini.",
      next: "pintuKeluar",
    },
  ],

  ruangGuru3_solo: [
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      sfx: "flash_light",
      text: "Kamu menyalakan senter hp.",
    },
    {
      bg: "ruang_guru",
      chars: [
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        {
          name: "bayangan_guru",
          x: 500,
          y: canvas.height - 440,
          w: 200,
          h: 400,
        },
      ],
      text: "Kamu menumukan sebuah kunci dan langsung lari untuk kabur dari sini.",
      next: "pintuKeluar_solo",
    },
  ],

  pintuKeluar_solo: [
    {
      bg: "pintu_keluar",
      chars: [{ name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Kamu berhasil keluar dari ruang guru dan berhasih menumukan gerbang sekolah \nTapi di luar sana sudah ada penjaga sekolah yang menunggumu...",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 },
        { name: "penjaga", x: 600, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 },
        { name: "penjaga", x: 400, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. Buka pintu dengna kunci yang kamu bawa",
      choices: {
        1: "mati",
        2: "win",
      },
    },
  ],

  pintuKeluar: [
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Kamu berhasil keluar dari ruang guru dan berhasih menumukan gerbang sekolah \nTapi di luar sana sudah ada penjaga sekolah yang menunggumu...",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        ,
        { name: "penjaga", x: 600, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc2", x: 200, y: canvas.height - 447, w: 230, h: 410 },
        { name: "mc", x: 50, y: canvas.height - 450, w: 250, h: 430 },
        ,
        { name: "penjaga", x: 400, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. Buka pintu dengna kunci yang kamu bawa",
      choices: {
        1: "mati",
        2: "win",
      },
    },
  ],

  pintuKeluar_badend: [
    {
      bg: "pintu_keluar",
      chars: [{ name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 }],
      text: "Kamu berhasil keluar dari ruang guru dan berhasih menumukan gerbang sekolah \nTapi di luar sana sudah ada penjaga sekolah yang menunggumu...",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 },
        { name: "penjaga", x: 600, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Penjaga itu menatapmu dengan mata tajam. \n“Kenapa kamu masih di sini? Sekolah sudah tutup!”",
    },
    {
      bg: "pintu_keluar",
      chars: [
        { name: "mc", x: 200, y: canvas.height - 450, w: 250, h: 430 },
        { name: "penjaga", x: 400, y: canvas.height - 450, w: 250, h: 430 },
      ],
      text: "Sebelum sempat menjelaskan, dia langsung mendekat...\n1. Cari benda untuk melawan \n2. lari sekencang mungkin dari sini",
      choices: {
        1: "mati",
        2: "badend",
      },
    },
  ],

  mati: [
    {
      bg: "black",
      chars: [],
      isGameOver: true,
    },
  ],

  win: [
    {
      bg: "black",
      chars: [],
      isWin: true,
    },
  ],

  badend: [
    {
      bg: "black",
      chars: [],
      isBadend: true,
    },
  ],
};
