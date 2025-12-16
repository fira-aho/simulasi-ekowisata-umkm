/* ===== Main Controller ===== */

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

/* Halaman Kelola Produk */
if (document.getElementById("produkForm")) {
  const form = document.getElementById("produkForm");
  const tabelProduk = document.getElementById("tabelProduk");

  function renderTabelProduk() {
    const produkList = getProdukUMKM();
    tabelProduk.innerHTML = "";

    produkList.forEach((produk, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${produk.nama}</td>
        <td>${produk.kategori}</td>
        <td>${produk.harga}</td>
        <td>${produk.deskripsi}</td>
        <td><button onclick="hapusProduk(${index})">Hapus</button></td>
      `;
      tabelProduk.appendChild(row);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const produkBaru = {
      nama: namaProduk.value,
      kategori: kategoriProduk.value,
      harga: parseInt(hargaProduk.value),
      deskripsi: deskripsiProduk.value
    };

    tambahProduk(produkBaru);
    form.reset();
    renderTabelProduk();
  });

  renderTabelProduk();
}

/* Halaman Simulasi */
if (document.getElementById("simulasiForm")) {
  document.getElementById("simulasiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const input = {
      jumlahPengunjung: parseInt(jumlahPengunjung.value),
      hargaTiket: parseInt(hargaTiket.value),
      danaSponsor: parseInt(danaSponsor.value),
      biayaOperasional: parseInt(biayaOperasional.value)
    };

    const hasil = hitungSimulasi(input);

    document.getElementById("hasilSimulasi").innerHTML = `
      <p><strong>Pendapatan Tiket:</strong> ${formatRupiah(hasil.pendapatanTiket)}</p>
      <p><strong>Dana Sponsor:</strong> ${formatRupiah(input.danaSponsor)}</p>
      <p><strong>Total Pendapatan:</strong> ${formatRupiah(hasil.totalPendapatan)}</p>
      <p><strong>Biaya Operasional:</strong> ${formatRupiah(hasil.biayaOperasional)}</p>
      <p><strong>Estimasi Omzet UMKM:</strong> ${formatRupiah(hasil.totalOmzetUMKM)}</p>
    `;
  });
}
