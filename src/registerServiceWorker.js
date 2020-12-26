import { Workbox } from "workbox-window"
let wb
if ("serviceWorker" in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`)
  wb.addEventListener("controlling", () => {
    window.location.reload();
  })
  wb.register();
  wb.addEventListener("load", () => {
    wb.update()
  })
  // wb.update();
} else {
  wb = null;
}

export default wb;