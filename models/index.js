const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User");

// creates the relationships between the different models. allowing for the table to interact with eachother and pull 
// data from multiple tables together


//one user can make many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});
//one user can make many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//many posts can belong to one user
Post.belongsTo(User, {
  foriegnKey: "user_id",
});

//there can be many comments on a single post
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

//many comments can be made by one user
Comment.belongsTo(User, {
  foreignKey: "user_id",
}),
  
  Comment.belongsTo(Post, {
    foreignKey: "post_id",
  });

module.exports = { User, Post, Comment };