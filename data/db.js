const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"tiger",
  database:"college"
});

connection.connect((err)=>{
    if(err){
        console.log('Database connection failed', err);
        return;
    }
    console.log('Database connected successfully'); 

});

module.exports = connection;

