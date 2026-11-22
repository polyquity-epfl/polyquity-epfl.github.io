document.getElementById("navbar-toggle").addEventListener("click", function () {
  const isExpanded =
    this.getAttribute("aria-expanded") === "true" ? true : false;
  this.setAttribute("aria-expanded", (!isExpanded).toString());
});

// past events: poster grid or list, remembered per visitor
(function () {
  const past = document.querySelector(".events.past");
  const toggle = document.querySelector(".layout-toggle");
  if (!past || !toggle) return;

  function apply(layout) {
    past.classList.toggle("as-list", layout === "list");
    for (const button of toggle.querySelectorAll("button")) {
      button.setAttribute("aria-pressed", (button.dataset.layout === layout).toString());
    }
  }

  let saved = null;
  try {
    saved = localStorage.getItem("events-layout");
  } catch (e) {}
  apply(saved === "list" ? "list" : "grid");
  toggle.hidden = false;

  toggle.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;
    apply(button.dataset.layout);
    try {
      localStorage.setItem("events-layout", button.dataset.layout);
    } catch (e) {}
  });
})();
