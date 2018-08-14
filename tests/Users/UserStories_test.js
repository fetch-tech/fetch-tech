let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["Response has an article_id"] = res.every(story => story.article_id);
tests["Response has an user_id"] = res.every(story => story.user_id);
