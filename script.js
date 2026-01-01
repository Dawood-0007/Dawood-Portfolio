const quickForm = document.getElementById("quickForm");
const quickStatus = document.getElementById("form-status");

if (quickForm) {
  quickForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(quickForm);

    try {
      const res = await fetch(quickForm.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        quickStatus.textContent = "Thanks! I’ll get back to you soon.";
        quickForm.reset();
      } else {
        quickStatus.textContent = "Something went wrong. Try again.";
      }
    } catch {
      quickStatus.textContent = "Network error. Please try later.";
    }
  });
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const body = document.body;

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-elements a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");
  }
});
