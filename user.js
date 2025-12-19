// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});

// Dark / Light toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

document.querySelector(".contact-box").addEventListener("submit", e => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.innerText = "تم الإرسال ✓";
});
// const reveals = document.querySelectorAll(".reveal"); // already declared above

function revealOnScroll() {
  reveals.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".course-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".course-card");

    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalLink.href = card.dataset.link;

    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
