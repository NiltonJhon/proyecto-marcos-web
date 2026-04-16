document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(
    '#nosotrosTab button[data-bs-toggle="tab"]',
  );
  let activeIndex = 0;
  const delay = 6000;

  function showTab(index) {
    const button = tabButtons[index];
    const tab = new bootstrap.Tab(button);
    tab.show();
    activeIndex = index;
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener("mouseover", () => showTab(index));
    button.addEventListener("click", () => showTab(index));
  });

  setInterval(() => {
    const nextIndex = (activeIndex + 1) % tabButtons.length;
    showTab(nextIndex);
  }, delay);
});
