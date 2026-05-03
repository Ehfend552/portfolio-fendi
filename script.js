// 1. BIKIN TOMBOL "Hubungi Saya" BISA SCROLL KE KONTAK
function scrollKeKontak() {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
  });
}

// 2. PASANG EVENT KE TOMBOLNYA
document.addEventListener("DOMContentLoaded", function () {
  // Cari tombol "Hubungi Saya" di section hero
  const tombolHubungi = document.querySelector(".hero button");

  // Kalo tombolnya ketemu, kasih fungsi pas di-klik
  if (tombolHubungi) {
    tombolHubungi.addEventListener("click", scrollKeKontak);
  }

  // 3. EFEK KETIK-KETIK OTOMATIS DI BAGIAN JABATAN
  const jabatan = document.querySelector(".hero p");
  const teksAsli = jabatan.textContent;
  const listJabatan = [
    "Web Developer & Ngoding Enjoyer",
    "UI/UX Enthusiast",
    "Tukang Ngopi Profesional",
    "Calon Sultan Digital",
  ];

  let indexJabatan = 0;
  let indexHuruf = 0;
  let lagiNgetik = true;

  function efekKetik() {
    const jabatanSekarang = listJabatan[indexJabatan];

    if (lagiNgetik) {
      jabatan.textContent = jabatanSekarang.slice(0, indexHuruf + 1);
      indexHuruf++;

      if (indexHuruf === jabatanSekarang.length) {
        lagiNgetik = false;
        setTimeout(efekKetik, 2000); // Diam 2 detik pas selesai
        return;
      }
    } else {
      jabatan.textContent = jabatanSekarang.slice(0, indexHuruf - 1);
      indexHuruf--;

      if (indexHuruf === 0) {
        lagiNgetik = true;
        indexJabatan = (indexJabatan + 1) % listJabatan.length;
      }
    }

    setTimeout(efekKetik, lagiNgetik ? 100 : 50); // Ngetik vs hapus
  }

  // Jalanin efek ketiknya
  setTimeout(efekKetik, 1000);
  // 5. FORM KONTAK LANGSUNG KE WA TUAN
  const formPesan = document.getElementById("formPesan");

  if (formPesan) {
    formPesan.addEventListener("submit", function (e) {
      e.preventDefault(); // Biar ga refresh halaman

      // Ambil data dari form
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const pesan = document.getElementById("pesan").value;

      // NO WA TUAN NIH 085718509645
      const noWA = "6285718509645"; // Format 62 bukan 08

      // Template pesan yang bakal muncul di WA
      const teksWA = `Halo TUAN FENDI! 👋%0A%0ASaya ${nama}%0AEmail: ${email}%0A%0APesan: ${pesan}%0A%0ADikirim dari Portfolio TUAN`;

      // Buka WA TUAN + pesannya udah keisi
      const linkWA = `https://wa.me/${noWA}?text=${teksWA}`;
      window.open(linkWA, "_blank");

      // Reset form abis kirim
      formPesan.reset();
      alert("Sip TUAN! WA TUAN kebuka, tinggal pencet Send 😎");
    });
  }
});

// TYPING EFFECT
const texts = [
  "Web Developer & Ngoding Enjoyer",
  "Sultan Tajurhalang 👑",
  "Bikin Web 2 Juta++",
  "Available for Hire!",
];

let count = 0,
  index = 0;

function type() {
  if (count === texts.length) count = 0;
  let currentText = texts[count];
  let letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
}
type();
