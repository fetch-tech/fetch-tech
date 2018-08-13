let code = pm.response.code;
let res = pm.response.json();

tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["Response has a follower count"] = res.every(
  followers => followers.count
);
