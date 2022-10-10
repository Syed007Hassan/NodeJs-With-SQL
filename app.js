// dependencies
const express = require("express");
const app = express();
const con = require("./database.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  let sql = "SELECT * FROM USERS";

  con.query(
    'INSERT INTO USERS (fName,lName) VALUES ("Luka","Modric")',
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
con.query(
  'INSERT INTO USERS (fName,lName) VALUES ("ANAS",BAQAI')',
  (err,result)=>{
  if(err){
    console.log(err);
  }
}
);
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);

  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connected!");
  });
});
