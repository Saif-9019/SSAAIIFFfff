document.getElementById("donation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  // const amount = document.getElementById("amount").value; // ab amount ki zarurat nahi
  const upiLink = `upi://pay?pa=amjadsyed824@okhdfcbank&pn=Darul Uloom Noorul Islam&cu=INR`;

  alert("Thank you " + name + "! Redirecting to UPI...");

  // Redirect to UPI link
  window.location.href = upiLink;
});
