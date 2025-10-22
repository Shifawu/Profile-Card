<<<<<<< HEAD
// Time updater (formatted)
const t = document.getElementById("profile-time");
function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  if (t) t.textContent = formatted;
}
setInterval(updateTime, 1000);
updateTime();

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", () => {
  const isActive = mobileNav.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isActive);
});

// Close mobile nav on link click
mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById("cname");
  const email = document.getElementById("cemail");
  const subject = document.getElementById("csubject");
  const msg = document.getElementById("cmessage");
  const err = (id, text) => (document.getElementById(id).textContent = text);
  const success = document.getElementById("contact-success");
  err("err-name", "");
  err("err-email", "");
  err("err-subject", "");
  err("err-message", "");
  success.textContent = "";
  if (!name.value.trim()) {
    err("err-name", "Full name is required.");
    valid = false;
  }
  if (!email.value.trim()) {
    err("err-email", "Email is required.");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    err("err-email", "Enter a valid email.");
    valid = false;
  }
  if (!subject.value.trim()) {
    err("err-subject", "Subject is required.");
    valid = false;
  }
  if (msg.value.trim().length < 10) {
    err("err-message", "Message must be at least 10 characters.");
    valid = false;
  }
  if (valid) {
    success.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  }
});
=======
const dateElement = document.createElement("p");
    dateElement.setAttribute("data-testid", "test-user-time");
    dateElement.textContent = Date.now();
    document.querySelector(".date-section").appendChild(dateElement);
>>>>>>> 6d5d05b0c43cb53235bdb80c544dd418c2f3ca73
