/****** LOCAL SERVER ******/
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");

const { getUser, strat, logout } = require("./controllers/auth_controller");
const controllers = require("./controller");
const users_controller = require("./controllers/users_controller");
const commentsController = require("./controllers/commentsController");
const twitter_controller = require("./controllers/twitter_controller");
const clapsController = require("./controllers/clapsController");
const bookmarksController = require("./controllers/bookmarksController");
const storiesController = require("./controllers/storiesController");
const genStories = require("./controllers/genStories");
const searchTwit = require("./controllers/searchTwit");

// Sets up express server
const app = express();

app.use(json());
app.use(cors());

// Allows local server to utilize SQL commands within db folder
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// Allows application to be utilized by multiple users
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 7
    }
  })
);

/****** AUTH0 ******/

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  const db = app.get("db");

  db.get_user([user.id])
    .then(response => {
      if (!response[0]) {
        db.users
          .insert({
            user_id: user.id,
            username: user.displayName,
            profile_pic: user.picture
          })
          .then(res => {
            return done(null, res);
          });
      } else return done(null, response[0]);
    })
    .catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);

app.get(
  "/login",
  passport.authenticate("auth0", {
    // successRedirect: "/",
    successRedirect: `http://localhost:3000/`,
    // successRedirect: "/#/",
    failureRedirect: "/login"
  })
);

app.get("/logout", logout);

/****** AUTH0 ******/

/****** NEWS ARTICLE API ******/

app.get("/api/home/articles", controllers.homePageArticles);
app.get("/api/home/articles/dev", controllers.devPageArticles);
app.get(
  "/api/home/articles/entertainment",
  controllers.entertainmentPageArticles
);
app.get("/api/home/articles/search/:searchTerm", controllers.searchArticles);

/****** NEWS ARTICLE API ******/

/****** Comments API ******/

app.post("/api/comments/articles", commentsController.createComment);
app.get(
  "/api/comments/commentArticles/:articleId",
  commentsController.getComments
);

app.post("/api/commentArticles/comment/", commentsController.getArticleComment);
app.post(
  "/api/commentArticles/comment/comment",
  commentsController.commentComment
);

app.get(
  "/api/commentArticles/comment/comment/:comentId",
  commentsController.getCommentComment
);

/****** Comments API ******/

/****************claps Api*********************/
app.post("/api/clapArticle/clap", clapsController.ArticleClap);
app.get(
  "/api/userArticleClap/:articleId/:userId",
  clapsController.UserArticleClap
);
app.get("/api/articleClaps/:articleId", clapsController.getArticleClaps);
/****************claps Api*********************/

/************************Bookmars*********************/
app.post("/api/articles/bookmarks", bookmarksController.addBookmark);
app.get(
  "/api/articles/bookmartStatus/:articleId/:userId",
  bookmarksController.checkArticleStatus
);
app.post(
  "/api/articles/articleExistence",
  bookmarksController.checkArticleExistence
);
app.post(
  "/api/articles/removeBookmark/:articleId/:userId",
  bookmarksController.removeBookmark
);
/************************Bookmars*********************/

/************************Stories*********************/
app.post("/api/articles/stories", storiesController.addStories);
app.get(
  "/api/articles/storyStatus/:articleId/:userId",
  storiesController.checkArticleStatus
);
app.post(
  "/api/articles/articleExistence",
  storiesController.checkArticleExistence
);
app.post(
  "/api/articles/removeStory/:articleId/:userId",
  storiesController.removeStory
);

app.post("/api/stories/genStories", genStories.getGenStories);
/************************Stories*********************/

/**********************************Search****************************************/
app.get("/api/search/general/:item", controllers.searchArticles);
app.get("/api/search/twitter/:item", searchTwit.searchTwitter);

/**********************************Search****************************************/

/****** USERS ENDPOINTS ******/

// Gets list of the articles the user has clapped on and provides number of claps for that article
app.post("/api/users/claps", users_controller.getUserClaps);

// Gets list of user's bookmarked articles
app.post("/api/users/bookmarks", users_controller.getUserBookmarks);

// Gets list of user's comments
app.get("/api/users/comments", users_controller.getUserComments);

// Gets user's follower count
app.post("/api/users/followers", users_controller.getUserFollowers);

// Gets user's following count
app.post("/api/users/following", users_controller.getUserFollowing);

// Gets user's stories
app.get("/api/users/stories", users_controller.getUserStories);
app.post("/api/user/coverImage", users_controller.postCoverImage);
app.post("/api/user/profileImage", users_controller.postProfileImage);
app.post("/api/user", users_controller.getUserInfo);
app.post("/api/user/follow", users_controller.followUser);

/****** USER ENDPOINTS ******/

/******* GIF API ENDPOINTS ********/
app.get("/api/gifs/tech", controllers.giphyGifs);
app.get("/api/gifs/tech2", controllers.giphyGifs2);
app.get("/api/gifs/tech3", controllers.giphyGifs3);
app.get("/api/gifs/tech4", controllers.giphyGifs4);

/****** TWITTER ******/
app.get("/api/tweet", twitter_controller.searchTrendingTweets);
/****** TWITTER ******/

// Runs the server on localhost:3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
