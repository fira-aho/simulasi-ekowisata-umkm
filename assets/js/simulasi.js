/* ===== Simulasi Module ===== */

function hitungSimulasi(input) {
  const pendapatanTiket = input.jumlahPengunjung * input.hargaTiket;
  const totalPendapatan = pendapatanTiket + input.danaSponsor;

  const produkList = getProdukUMKM();
  let totalOmzetUMKM = 0;

  produkList.forEach(produk => {
    const estimasiTerjual = Math.floor(input.jumlahPengunjung * 0.3);
    totalOmzetUMKM += estimasiTerjual * produk.harga;
  });

  return {
    pendapatanTiket,
    totalPendapatan,
    biayaOperasional: input.biayaOperasional,
    totalOmzetUMKM
  };
}
