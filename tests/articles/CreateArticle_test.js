let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["All Articles have an article id"] = res.every(
  article => article.article_id
);
tests["All articles have an article title"] = res.every(
    article => article.title
);
