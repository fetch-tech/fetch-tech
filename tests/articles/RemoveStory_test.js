let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["Remove Story"] = res.every(
  story => story.article_id === undefined || story.article_id === null
);
