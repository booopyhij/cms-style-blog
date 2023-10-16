//logout function
const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    //if successfully logged out redirect wherever we want
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };
  
  //once we make a logout button this will be the event listener to start the logout function
  document.querySelector("#logout").addEventListener("click", logout);
  