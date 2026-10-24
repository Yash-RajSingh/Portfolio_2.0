const MIN_VISIBLE_MS = 500;
const MAX_FONT_WAIT_MS = 2500;

let markReady: () => void = () => {};
export const appReady = new Promise<void>((resolve) => (markReady = resolve));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function hidePreloader() {
  const el = document.getElementById("preloader");

  await Promise.race([document.fonts?.ready, sleep(MAX_FONT_WAIT_MS)]);
  const remaining = MIN_VISIBLE_MS - performance.now();
  if (remaining > 0) await sleep(remaining);

  if (el) {
    el.classList.add("done");
    const remove = () => el.remove();
    el.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 800);
  }
  markReady();
}
