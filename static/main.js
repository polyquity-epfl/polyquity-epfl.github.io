document.getElementById("navbar-toggle").addEventListener("click", function () {
  const isExpanded =
    this.getAttribute("aria-expanded") === "true" ? true : false;
  this.setAttribute("aria-expanded", (!isExpanded).toString());
});
