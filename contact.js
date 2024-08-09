document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("subject").value;
  
    // Basic input validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    let userArr = JSON.parse(localStorage.getItem("user")) || [];
  
    let userDetail = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    userArr.push(userDetail);
    localStorage.setItem("user", JSON.stringify(userArr));
    console.log("User data saved successfully");
    alert("Successfully submitted");
    document.querySelector("form").reset();
  });
  