document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
  
    if (!name) {
      alert("Name is required");
      return;
    }
  
    if (!email) {
      alert("Email is required");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (!interest) {
      alert("Please select an interest");
      return;
    }
  
    alert("Thank you for your inquiry! We will contact you soon.");
  });
  