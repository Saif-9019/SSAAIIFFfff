document.getElementById("donation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  // const amount = document.getElementById("amount").value; // ab amount ki zarurat nahi
  const upiLink = `upi://pay?pa=amjadsyed824@okhdfcbank&pn=Darul Uloom Noorul Islam&cu=INR`;

  alert("Thank you " + name + "! Redirecting to UPI...");

  // Redirect to UPI link
  window.location.href = upiLink;
});
<script>
  document.getElementById("whatsappSendBtn").addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending via WhatsApp.");
      return;
    }

    var phoneNumber = "919999999999"; // ← Yahan apna WhatsApp number daalein
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + 
      encodeURIComponent("Assalamu Alaikum,\nName: " + name + 
                         "\nEmail: " + email + 
                         "\nMessage: " + message);

    window.open(whatsappURL, "_blank");
  });
</script>
