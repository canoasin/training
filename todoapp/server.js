const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var db;

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.0j7d6tt.mongodb.net/?retryWrites=true&w=majority",
  function (error, client) {
    if (error) {
      return console.log("에러");
    }
    db = client.db("todoapp");
    app.listen(8080, function () {
      console.log("HELLO");
    });
  }
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
  db.collection("post").insertOne(
    { name: "Baek", age: 28 },
    function (error, result) {
      console.log("저장완료");
    }
  );
  res.send("전송완료");
});
