/* ===== Produk Module ===== */

function tambahProduk(produk) {
  const produkList = getProdukUMKM();
  produkList.push(produk);
  setProdukUMKM(produkList);
}

function hapusProduk(index) {
  const produkList = getProdukUMKM();
  produkList.splice(index, 1);
  setProdukUMKM(produkList);
}
