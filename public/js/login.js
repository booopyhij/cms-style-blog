// functions for handling login
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //collecting username and password from login screen
    const username = document.querySelector("#user-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  // post request for login user data
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        //if successfully logged in redirect to whatever page we want
        document.location.replace("/");
      } else {
        alert("Username or Password incorrect. Please try again.");
      }
    }
  };
  
  //whatever we name our login form and button will go here and run the form handler functions
  // document
  //   .querySelector(".auth-link[data-bs-target='#loginModal']")
  //   .addEventListener("click", () => {
  //     const template = document.getElementById("login-template").innerHTML;
  //     const compiledTemplate = Handlebars.compile(template);
  //     const modalBody = document.querySelector("#loginModal .modal-body");
  //     modalBody.innerHTML = compiledTemplate();
  //   });
  
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);