document.getElementById("donation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const upiLink = `upi://pay?pa=amjadsyed824@okhdfcbank&pn=Darul Uloom Noorul Islam&am=${amount}&cu=INR`;

  alert("Thank you " + name + "! Redirecting to UPI App...");
  window.location.href = upiLink;
});
