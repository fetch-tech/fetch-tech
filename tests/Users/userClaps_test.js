let code = pm.response.code;
let res = pm.response.json();

// pm.test("Doesn't do much", () => {
//     pm.expect(true).to.eql(false)
// });

// tests["Doesn't do much"] = true;
tests["Receives 200 status"] = code === 200;
tests["Response is an array"] = Array.isArray(res);
tests["All products have number of claps"] = res.every(
  article => article.number
);
