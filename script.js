// Attach a submit event to handle the login process
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Retrieve input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // For demonstration, log the values to the console
  console.log("Username:", username);
  console.log("Password:", password);
  
  // Replace the following with your own authentication logic
  if(username && password) {
    alert("Login successful!");
  } else {
    alert("Please fill in both fields.");
  }
});
