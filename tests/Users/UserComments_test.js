let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["All comments have an article id"] = res.every(
  comment => comment.article_id
);
tests["All comments have an article title"] = res.every(
  comment => comment.title
);
tests["All comments have a text body"] = res.every(
  comment => comment.comment_text
);
