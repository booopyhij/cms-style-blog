
// function for handling comments
async function commentHandler(event) {
    // prevents the browser default
    event.preventDefault();
  
    //get the text from comment body textarea
    const comment_content = document
      .querySelector('textarea[name="comment-body"]')
      .value.trim();
    //convert url to string and split by backslash to get post id
    const post_id = wind.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    if (comment_content) {
      const response = await fetch("/api/comments", {
        method: "post",
        body: JSON.stringify({
          post_id,
          comment_content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        //reload page if comment sadded
        document.location.reload();
      } else {
        console.log(response.statusText);
      }
    }
  }
  
  //event listener on comment submit button and call the function
  document
    .querySelector(".comment-form")
    .addEventListener("submit", commentHandler);