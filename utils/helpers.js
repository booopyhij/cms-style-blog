module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/$${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
    },
  };
  // function to find the date. reusable function, but in this case is used for time posts/comments are created.