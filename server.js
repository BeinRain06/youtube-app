//initializing installed dependencies
const express = require("express");

require("dotenv").config();

const axios = require("axios");

const app = express();

const cors = require("cors");

app.use(cors());

// defining the server port
const port = process.env.PORT || 5000;

// listening for port 5000
app.listen(5000, () => console.log(`server is running on ${port}`));

// API request

/* GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=spiderman&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */

app.get("/", (req, res) => {
  let words = req.query.words; // i need to write input value in frontend

  const options = {
    method: "GET",
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${words}&key=${process.env.YOUTUBE_API_KEY}`,

    Headers: {
      Authorization: Bearer[process.env.ACCESS_TOKEN_KEY],
      Accept: application / json,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});
