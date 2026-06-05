(function () {
  const section = document.querySelector(".bucketlist");
  if (!section) return;

  const storageKey = "bucketlist-" + window.location.pathname;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  const checkboxes = section.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox, index) => {
    checkbox.disabled = false;
    checkbox.checked = Boolean(saved[index]);

    const listItem = checkbox.closest("li");
    if (listItem) {
      listItem.classList.toggle("bucketlist-done", checkbox.checked);
    }

    checkbox.addEventListener("change", () => {
      saved[index] = checkbox.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));

      if (listItem) {
        listItem.classList.toggle("bucketlist-done", checkbox.checked);
      }
    });
  });
})();
