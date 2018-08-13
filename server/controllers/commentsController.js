const createComment = (req, res, next) => {
  const { comment, article, userId } = req.body;
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
        db.comments
          .insert({
            user_id: userId,
            article_id: article_id,
            comment_text: comment
          })
          .then(comment => {
            res.status(200).send({ articleId: article_id });
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
            db.comments
              .insert({
                user_id: userId,
                article_id: article_id,
                comment_text: comment
              })
              .then(comment => {
                res.status(200).send({ articleId: article_id });
              });
          }
        });
    }
  });
};

const getArticleComment = (req, res, next) => {
  const db = req.app.get("db");
  const { url } = req.body;
  db.find_article_comment([url]).then(article => {
    res.send({ article: article });
  });
};

const getComments = (req, res, next) => {
  const { articleId } = req.params;
  const db = req.app.get("db");
  db.get_articles_comments([articleId]).then(comments => {
    res.send({ comments: comments });
  });
};

const commentComment = (req, res, next) => {
  const db = req.app.get("db");
  const { commentId, comment, userId } = req.body;
  db.comments_comments
    .insert({
      comment_id: commentId,
      comments_comment_text: comment,
      user_id: userId
    })
    .then(comment => {
      res.send({ insertedComment: comment });
    });
};

const getCommentComment = (req, res, next) => {
  const db = req.app.get("db");
  const { comentId } = req.params;
  db.get_comments_comments([comentId]).then(comments => {
    res.send({ commentsComments: comments });
  });
};

module.exports = {
  createComment,
  getComments,
  getArticleComment,
  commentComment,
  getCommentComment
};
