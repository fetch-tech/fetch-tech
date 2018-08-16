const addBookmark = (req, res, next) => {
  const { article, userId } = req.body;
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt
  } = article;
  const { name } = source;
  const db = req.app.get("db");
  let article_id = null;

  db.find_article_comment([url]).then(article => {
    if (article.length > 0) {
      article_id = article[0].article_id;
      if (article_id) {
        db.bookmarks
          .insert({
            user_id: userId,
            article_id: article_id
          })
          .then(bookmark => {
            res.status(200).send({ bookmark: bookmark });
          });
      }
    } else {
      db.articles
        .insert({
          source_name: name,
          author: author,
          title: title,
          description: description,
          url: url,
          image_url: urlToImage,
          date_published: publishedAt
        })
        .then(article => {
          article_id = article.article_id;
          if (article_id) {
            db.bookmarks
              .insert({
                user_id: userId,
                article_id: article_id
              })
              .then(bookmark => {
                res.status(200).send({ bookmark: bookmark });
              });
          }
        });
    }
  });
};

const checkArticleExistence = (req, res, next) => {
  const { url } = req.body;
  const db = req.app.get("db");
  db.find_article_comment([url]).then(response => {
    res.send({ article: response });
  });
};

const checkArticleStatus = (req, res, next) => {
  const { articleId, userId } = req.params;
  const db = req.app.get("db");
  db.checkArticleBookmarkStatus([articleId, userId]).then(response => {
    res.send({ bookmark: response });
  });
};

const removeBookmark = (req, res, next) => {
  const { articleId, userId } = req.params;
  const db = req.app.get("db");
  db.deleteBookmark([articleId, userId]).then(response => {
    // console.log("success");
  });
};

module.exports = {
  addBookmark,
  checkArticleStatus,
  checkArticleExistence,
  removeBookmark
};
