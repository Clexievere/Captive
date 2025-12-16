document.addEventListener("DOMContentLoaded", function () {
  const yr = document.getElementById("yr");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }

  const form = document.querySelector("form");
  const studentIdInput = document.getElementById("Student_ID");
  const notice = document.getElementById("notice");

  if (!form || !studentIdInput || !notice) return;

  const studentIdPattern = /^\d{2}-UR-\d{4}$/;

  form.addEventListener("submit", function (e) {
    // Remove e.preventDefault() so it can submit on valid input
    const value = studentIdInput.value.trim();

    if (!studentIdPattern.test(value)) {
      e.preventDefault(); // Only prevent on invalid
      notice.style.display = "block";
      notice.textContent = "Username is incorrect.";
      studentIdInput.focus();
    } else {
      notice.style.display = "none";
      // Form will now submit naturally to save.php
    }
  });
});