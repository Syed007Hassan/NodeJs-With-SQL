// dependencies
const express = require("express");
const app = express();

const mysql = require('mysql2');

app.use(express.static('public'));

const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'Hppavilion15',
  database: 'TestDb'
});



app.get("/", (req, res) => {

   const fName = "Ehtesham";
   const lName = "Zafar";

   
   db.query(
    'INSERT INTO users (fName,lName) VALUES ("Hassan","Ali")',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );



});



// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
