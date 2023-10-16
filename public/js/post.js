// function for creating a post
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector().value;
    const post_content = document.querySelector().value;
  
    // post request for a post with front end JS
    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify({
        title,
        post_content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
        console.log(response.statusText);
    }
  }
  //add event listener for submit button on creating new post then run function
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);


    //function for editing a post
    async function editFormHandler(event) {
        event.preventDefault();
      
        const title = document.querySelector().value;
        const post_content = document.querySelector().value;
        const id = [];
      // front end JS fetch request from the backend for a post by id for updates
        const response = await fetch(`/api/posts/${id}`, {
          method: "put",
          body: JSON.stringify({
            title,
            post_content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          console.log(response.statusText);
        }
      }
      
      //listen for submit button and run edit function
      document
        .querySelector(".edit-form")
        .addEventListener("submit", editFormHandler);



       
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = [];
//front end fetch request for post by id for deleting a post
  const response = await fetch(`/api/posts/${id}`, {
    method: "delete",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if post deleted redirect back to dashboard
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log(response.statusText);
  }
}
//listen for click on delete button and run delete function
document.querySelector().addEventListener("click", deleteFormHandler);