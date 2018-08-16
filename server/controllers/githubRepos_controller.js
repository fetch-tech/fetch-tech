// // var moment = require("moment");

// const trending = require('trending-github')(process.env.GITHUB_API)

// //const devtrends = new DevTrends


// // const todayDate = moment().format("YYYY-MM-DD");
// // const yesterdayDate = moment(todayDate)
// //   .subtract(1, "days")
// //   .format("YYYY-MM-DD");

// const developertrends = (req, res, next) => {
//     trending.v2
//       .everything({
//         from: yesterdayDate,
//       to: todayDate,
//       language: "en",
//       country: "us"
//       })
//       .then(function(response) {
//         console.log(response);
//         res.send({ devtrends: response });
//       });
//   };
//   module.exports ={
//       developertrends
//   }
//   curl -G https://api.github.com/search/repositories --data-urlencode "sort=stars" --data-urlencode "order=desc" --data-urlencode "q=language:javascript"  --data-urlencode "q=created:>`date -v-7d '+%Y-%m-%d'`"