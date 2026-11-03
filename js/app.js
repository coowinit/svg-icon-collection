"use strict";
const grid = document.getElementById("icons");
const search = document.getElementById("search");
const shown = document.getElementById("shown-count");
const tail = document.getElementById("count-tail");
const empty = document.getElementById("empty");
const toast = document.getElementById("toast");
let toastTimeout;
const downloadSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3"/></svg>';
function makeCard(item) {
  const card = document.createElement("article");
  card.className = "icon-card";
  const visual = document.createElement("div");
  visual.className = "icon-visual";
  const img = document.createElement("img");
  img.src = "icons/" + encodeURIComponent(item.file);
  img.alt = item.name;
  img.loading = "lazy";
  if (item.file.startsWith("flag-")) img.className = "flag";
  visual.appendChild(img);
  const name = document.createElement("div");
  name.className = "icon-name";
  name.textContent = item.name;
  name.title = item.name + " · " + item.file;
  const a = document.createElement("a");
  a.className = "icon-download";
  a.href = "icons/" + encodeURIComponent(item.file);
  a.download = item.file;
  a.setAttribute("aria-label", "下载 " + item.name + " SVG 文件");
  a.innerHTML = downloadSvg + "下载";
  // Native same-origin download works on GitHub Pages and when opening index.html locally.
  a.addEventListener("click", () => showToast("正在下载 " + item.file));
  card.append(visual,name,a);
  return card;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 1800);
}
function render() {
  const q = search.value.trim().toLocaleLowerCase();
  const filtered = ICONS.filter(item => (item.name + " " + item.file + " " + (item.keywords || "")).toLocaleLowerCase().includes(q));
  const fragment = document.createDocumentFragment();
  filtered.forEach(item => fragment.appendChild(makeCard(item)));
  grid.replaceChildren(fragment);
  shown.textContent = String(filtered.length);
  tail.textContent = q ? " / " + ICONS.length + " 个图标" : " 个图标";
  empty.hidden = filtered.length !== 0;
}
search.addEventListener("input", render);
document.getElementById("clear-search").addEventListener("click", () => {search.value="";render();search.focus();});
document.addEventListener("keydown", e => {if (e.key === "/" && document.activeElement !== search && !e.ctrlKey && !e.metaKey && !e.altKey) {e.preventDefault();search.focus();} if(e.key === "Escape" && document.activeElement === search){search.value="";render();search.blur();}});
render();
