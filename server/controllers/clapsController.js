const ArticleClap = (req, res, next) => {
  const { article, userId, number, initialNumber } = req.body;
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
        if (initialNumber === 0) {
          db.claps
            .insert({
              user_id: userId,
              article_id: article_id,
              number: number
            })
            .then(clap => {
              res.status(200).send({ claps: clap });
            });
        } else {
          db.findAndUpdate_user_clap([number, userId, article_id]).then(
            respose => {
              //   console.log("yeey");
            }
          );
        }
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
            db.claps
              .insert({
                user_id: userId,
                article_id: article_id,
                number: number
              })
              .then(clap => {
                res.status(200).send({ claps: clap });
              });
          }
        });
    }
  });
};

UserArticleClap = (req, res, next) => {
  const { articleId, userId } = req.params;
  const db = req.app.get("db");
  db.findUserArticleClap([userId, articleId]).then(response => {
    res.send({ userClaps: response });
  });
};

getArticleClaps = (req, res, next) => {
  const { articleId } = req.params;
  const db = req.app.get("db");
  db.sumArticleClaps([articleId]).then(response => {
    res.send({ claps: response });
  });
};

module.exports = {
  ArticleClap,
  UserArticleClap,
  getArticleClaps
};
