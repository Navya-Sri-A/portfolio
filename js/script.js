// Event handler for contact form
document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting the form.");
      return;
    }
    console.log({ name, email, message });
    alert("Message sent! You'll hear back soon.");
    form.reset();
  });
});
