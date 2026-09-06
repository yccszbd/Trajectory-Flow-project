document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-target]");
  if (!button) return;

  const target = document.getElementById(button.dataset.copyTarget);
  if (!target) return;

  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(target.textContent.trim());
    button.textContent = "Copied";
  } catch (error) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = "Selected";
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1600);
});
