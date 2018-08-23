let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["All bookmarks have an article id"] = res.every(
  bookmark => bookmark.article_id
);
tests["All bookmarks have an article title"] = res.every(
  bookmark => bookmark.title
);
