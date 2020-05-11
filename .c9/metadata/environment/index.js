{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":22,"position":22,"stack":[[{"start":{"row":194,"column":0},"end":{"row":243,"column":0},"action":"remove","lines":["async function main () {","  const authClient = await authorize();","  const request = {","    // The ID of the spreadsheet to update.","    spreadsheetId: '1XjgkFfwRAMsndaHAdhiHxl16EI3y5bV2wnZHrld7zfU',  // TODO: Update placeholder value.","","    // The A1 notation of a range to search for a logical table of data.","    // Values are appended after the last row of the table.","    range: 'A2:D',  // TODO: Update placeholder value.","","    // How the input data should be interpreted.","    valueInputOption: 'raw',  // TODO: Update placeholder value.","","    // How the input data should be inserted.","    insertDataOption: 'insert_rows',  // TODO: Update placeholder value.","","    resource: {","      // TODO: Add desired properties to the request body.","    },","","    auth: authClient,","  };","","  try {","    const response = (await sheets.spreadsheets.values.append(request)).data;","    // TODO: Change code below to process the `response` object:","    console.log(JSON.stringify(response, null, 2));","  } catch (err) {","    console.error(err);","  }","}","main();","","async function authorize() {","  // TODO: Change placeholder below to generate authentication credentials. See","  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample","  //","  // Authorize using one of the following scopes:","  //   'https://www.googleapis.com/auth/drive'","  //   'https://www.googleapis.com/auth/drive.file'","  //   'https://www.googleapis.com/auth/spreadsheets'","  let authClient = null;","","  if (authClient == null) {","    throw Error('authentication failed');","  }","","  return authClient;","}",""],"id":492}],[{"start":{"row":194,"column":0},"end":{"row":205,"column":3},"action":"insert","lines":["app.get('/jokes/random', (req, res) => {","  request(","    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },","    (error, response, body) => {","      if (error || response.statusCode !== 200) {","        return res.status(500).json({ type: 'error', message: err.message });","      }","","      res.json(JSON.parse(body));","    }","  )","});"],"id":493}],[{"start":{"row":194,"column":10},"end":{"row":194,"column":22},"action":"remove","lines":["jokes/random"],"id":494},{"start":{"row":194,"column":10},"end":{"row":194,"column":11},"action":"insert","lines":["d"]},{"start":{"row":194,"column":11},"end":{"row":194,"column":12},"action":"insert","lines":["e"]},{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"insert","lines":["t"]},{"start":{"row":194,"column":13},"end":{"row":194,"column":14},"action":"insert","lines":["a"]},{"start":{"row":194,"column":14},"end":{"row":194,"column":15},"action":"insert","lines":["i"]},{"start":{"row":194,"column":15},"end":{"row":194,"column":16},"action":"insert","lines":["l"]},{"start":{"row":194,"column":16},"end":{"row":194,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":196,"column":12},"end":{"row":196,"column":65},"action":"remove","lines":["https://joke-api-strict-cors.appspot.com/jokes/random"],"id":495},{"start":{"row":196,"column":12},"end":{"row":196,"column":190},"action":"insert","lines":["https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJdZ_LIZIBskARMk-QagpmZc4&fields=name,rating,formatted_phone_number&key=AIzaSyBwAbZ3jsH8JP0qpZurpp_WSJpcBbI0rJQ"]}],[{"start":{"row":209,"column":0},"end":{"row":212,"column":3},"action":"insert","lines":["app.use((req, res, next) => {","  res.header('Access-Control-Allow-Origin', '*');","  next();","});"],"id":496}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":35},"action":"insert","lines":["const request = require('request');"],"id":497}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":[";"],"id":498}],[{"start":{"row":212,"column":3},"end":{"row":213,"column":0},"action":"insert","lines":["",""],"id":499},{"start":{"row":213,"column":0},"end":{"row":214,"column":0},"action":"insert","lines":["",""]},{"start":{"row":214,"column":0},"end":{"row":215,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":215,"column":0},"end":{"row":216,"column":60},"action":"insert","lines":["const PORT = process.env.PORT || 3000;","app.listen(PORT, () => console.log(`listening on ${PORT}`));"],"id":500}],[{"start":{"row":218,"column":0},"end":{"row":218,"column":1},"action":"insert","lines":["/"],"id":501},{"start":{"row":218,"column":1},"end":{"row":218,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":218,"column":1},"end":{"row":218,"column":2},"action":"remove","lines":["/"],"id":502},{"start":{"row":218,"column":0},"end":{"row":218,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":215,"column":0},"end":{"row":216,"column":60},"action":"remove","lines":["const PORT = process.env.PORT || 3000;","app.listen(PORT, () => console.log(`listening on ${PORT}`));"],"id":503}],[{"start":{"row":209,"column":0},"end":{"row":212,"column":3},"action":"remove","lines":["app.use((req, res, next) => {","  res.header('Access-Control-Allow-Origin', '*');","  next();","});"],"id":504},{"start":{"row":208,"column":0},"end":{"row":209,"column":0},"action":"remove","lines":["",""]},{"start":{"row":207,"column":0},"end":{"row":208,"column":0},"action":"remove","lines":["",""]},{"start":{"row":206,"column":0},"end":{"row":207,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":207,"column":0},"end":{"row":208,"column":0},"action":"remove","lines":["",""],"id":505},{"start":{"row":206,"column":0},"end":{"row":207,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":30},"action":"insert","lines":["Access-Control-Allow-Origin: *"],"id":506}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":30},"action":"remove","lines":["Access-Control-Allow-Origin: *"],"id":507}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":34},"action":"remove","lines":["const request = require('request')"],"id":508},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["]"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["]"],"id":509},{"start":{"row":0,"column":34},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":193,"column":0},"end":{"row":204,"column":3},"action":"remove","lines":["app.get('/details', (req, res) => {","  request(","    { url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJdZ_LIZIBskARMk-QagpmZc4&fields=name,rating,formatted_phone_number&key=AIzaSyBwAbZ3jsH8JP0qpZurpp_WSJpcBbI0rJQ' },","    (error, response, body) => {","      if (error || response.statusCode !== 200) {","        return res.status(500).json({ type: 'error', message: err.message });","      }","","      res.json(JSON.parse(body));","    }","  )","});"],"id":510},{"start":{"row":192,"column":0},"end":{"row":193,"column":0},"action":"remove","lines":["",""]},{"start":{"row":191,"column":0},"end":{"row":192,"column":0},"action":"remove","lines":["",""]},{"start":{"row":190,"column":0},"end":{"row":191,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":190,"column":0},"end":{"row":191,"column":0},"action":"remove","lines":["",""],"id":511},{"start":{"row":189,"column":0},"end":{"row":190,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":4,"column":34},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":512}],[{"start":{"row":5,"column":0},"end":{"row":15,"column":8},"action":"insert","lines":["let sequelize","","if(process.env.MYSQLCONNSTR_localdb) {","    let result = process.env.MYSQLCONNSTR_localdb.split(\";\")","    ","    sequelize = new Sequelize(result[0].split(\"=\")[1], result[2].split(\"=\")[1], result[3].split(\"=\")[1], {","        dialect: \"mysql\",","        host: result[1].split(\"=\")[1].split(\":\")[0],","        port: result[1].split(\"=\")[1].split(\":\")[1]","    })","} else {"],"id":513}],[{"start":{"row":20,"column":2},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":514},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":["}"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":1},"end":{"row":21,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1589222337650,"hash":"1c69853a836e49ab69721c580731d4e97be0023b"}