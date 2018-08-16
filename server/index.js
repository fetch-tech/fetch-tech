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
  // console.log(user);
  const db = app.get("db");

  db.get_user([user.id])
    .then(response => {
      // console.log(response);
      if (!response[0]) {
        db.add_user([user.id, user.displayName, user.picture])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
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

/****** USERS ENDPOINTS ******/

// Gets list of the articles the user has clapped on and provides number of claps for that article
app.get("/api/users/claps", users_controller.getUserClaps);

// Gets list of user's bookmarked articles
app.get("/api/users/bookmarks", users_controller.getUserBookmarks);

// Gets list of user's comments
app.get("/api/users/comments", users_controller.getUserComments);

// Gets user's follower count
app.get("/api/users/followers", users_controller.getUserFollowerCount);

// Gets user's following count
app.get("/api/users/following", users_controller.getUserFollowingCount);

/****** USER ENDPOINTS ******/

/******* GIF API ENDPOINTS ********/
app.get("/api/gifs/tech", controllers.giphyGifs);
app.get("/api/gifs/tech2", controllers.giphyGifs2);
app.get("/api/gifs/tech3", controllers.giphyGifs3);
app.get("/api/gifs/tech4", controllers.giphyGifs4);

/*****************gitHub API ENDPOINTS************** */
//app.get('/api/gitHub/devtrends', githubRepos_controller.developertrends);

// Runs the server on localhost:3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
