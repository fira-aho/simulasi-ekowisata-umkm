/* ===== Local Storage Handler ===== */

function getProdukUMKM() {
  return JSON.parse(localStorage.getItem("produkUMKM")) || [];
}

function setProdukUMKM(data) {
  localStorage.setItem("produkUMKM", JSON.stringify(data));
}
