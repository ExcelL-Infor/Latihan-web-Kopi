
alert('Selamat datang di Website Profil UMKM Anda!');
const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM:', namaUMKM);

let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan:', produk);

const daftarProduk = ['Kopi Arabika', 'Kopi Robusta', 'Kopi Luwak', 'Kopi Gayo', 'Kopi Toraja'];
console.log('Daftar Produk:', daftarProduk);

for (let i = 0; i < daftarProduk.length; i++) {
  console.log(`Produk ke-${i + 1}: ${daftarProduk[i]}`);
}


document.addEventListener('DOMContentLoaded', function () {

  const header = document.querySelector('header');
  if (header) {
    const info = document.createElement('p');
    info.textContent = 'Nikmati cita rasa kopi terbaik dari nusantara ☕';
    info.style.color = 'brown';
    info.style.fontStyle = 'italic';
    header.appendChild(info);
  }


  let rating = 4;
  const hasilRating = document.getElementById('hasil-rating');
  if (hasilRating) {
    if (rating >= 4.5) {
      hasilRating.textContent = '★★★★★ Sangat Disarankan';
    } else if (rating >= 3) {
      hasilRating.textContent = '★★★ Rekomendasi Biasa';
    } else {
      hasilRating.textContent = '★ Tidak Direkomendasikan';
    }
  }


  const layanan = ['Gratis Ongkir', 'Bayar di Tempat', 'Garansi 30 Hari'];
  const layananList = document.getElementById('layanan-list');
  if (layananList) {
    layanan.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      layananList.appendChild(li);
    });
  }


  const tombol = document.getElementById('tombolPesan');
  if (tombol) {
    tombol.addEventListener('click', function () {
      alert('Terima kasih sudah mengunjungi UMKM Kopi Nusantara!');
    });
  }
});


function cekForm() {
  const nama = document.getElementById('namaProduk').value;
  const jumlah = document.getElementById('jumlah').value;

  if (nama === '' || jumlah === '') {
    alert('Semua kolom wajib diisi.');
    return false;
  }
  if (jumlah <= 0) {
    alert('Jumlah harus lebih dari 0');
    return false;
  }
  alert('Pemesanan berhasil dikirim!');
  return true;
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  const errorMsg = document.getElementById("errorMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (nama.value === "" || email.value === "" || pesan.value === "") {
      errorMsg.textContent = "Semua field harus diisi.";
    } else {
      errorMsg.textContent = "";
      alert("Pesan berhasil dikirim!");
      form.reset();
    }
  });
});
const form = document.getElementById("formKontak");
form.addEventListener("submit", function (event) {
  let valid = true;


  const nama = document.getElementById("nama");
  const errorNama = document.getElementById("errorNama");
  if (nama.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    errorNama.textContent = "";
  }

  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const emailPattern = /^[^ ]+@gmail\.com$/i;
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = "Email harus @gmail.com dan format benar.";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  const kategori = document.getElementById("kategori");
  const errorKategori = document.getElementById("errorKategori");
  if (kategori.value === "") {
    errorKategori.textContent = "Pilih salah satu kategori.";
    valid = false;
  } else {
    errorKategori.textContent = "";
  }

  const pesan = document.getElementById("pesan");
  const errorPesan = document.getElementById("errorPesan");
  if (pesan.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
    valid = false;
  } else {
    errorPesan.textContent = "";
  }
  if (!valid) {
    event.preventDefault();
  } else {
    alert("Pesan berhasil dikirim!");
    form.reset();
  }
});
document.getElementById("nama").addEventListener("blur", function () {
  const errorNama = document.getElementById("errorNama");
  if (this.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
  } else {
    errorNama.textContent = "";
  }
});
document.getElementById("pesan").addEventListener("input", function () {
  const errorPesan = document.getElementById("errorPesan");
  if (this.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
  } else {
    errorPesan.textContent = "";
  }
});
document.getElementById("langganan").addEventListener("change", function () {
  if (this.checked) {
    alert("Terima kasih telah berlangganan newsletter!");
  }
});
