// defining the server port
const PORT = 5000;

//initializing installed dependencies

const express = require("express");

require("dotenv").config();

const axios = require("axios");

const app = express();

const cors = require("cors");

app.use(cors());

// listening for port 5000
app.listen(5000, () => console.log(`server is running on PORT ${PORT}`));

// API request

/* GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=spiderman&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */

app.get("/", (req, res) => {
  res.send("hello my back");
});

app.get("/search", async (req, res, next) => {
  try {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    let words = req.query.words;

    /*  console.log(req); */

    const options = {
      method: "GET",
      url: "https://youtube.googleapis.com/youtube/v3/search" /* BASE_URL*/,
      params: {
        part: "snippet",
        q: words,
        key: `${YOUTUBE_API_KEY}`,
      },

      /*  headers: {
      Authorization: Bearer[process.env.ACCESS_TOKEN_KEY],
      Accept: application / json,
      "x-youtube-host": "youtube.googleapis.com",
      "x-youtube-api": process.env.YOUTUBE_API_KEY,
    }, */
    };
    const response = await axios.request(options);

    res.send(res.json(response.data));

    /*  axios.request(options).then((response) => {
    res.json(response.data);
  }); */
  } catch (err) {
    next(err);
  }
});
