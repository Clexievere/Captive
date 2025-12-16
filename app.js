
document.addEventListener("DOMContentLoaded", function () {
  // Set footer year (only if the element exists)
  const yr = document.getElementById("yr");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }

  const form = document.querySelector("form");
  const studentIdInput = document.getElementById("Student_ID");
  const notice = document.getElementById("notice");

  // If any required element is missing, stop to avoid errors
  if (!form || !studentIdInput || !notice) return;

  const studentIdPattern = /^\d{2}-UR-\d{4}$/;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent navigation / POST to /submit

    const value = studentIdInput.value.trim();

    if (!studentIdPattern.test(value)) {
      notice.style.display = "block";
      notice.textContent = "Username is incorrect.";
      studentIdInput.focus();
    } else {
      notice.style.display = "none";
      window.location.href = "success.html";
      // valid case: do nothing or redirect later
      // window.location.href = "next.html";
    }
  });
});
