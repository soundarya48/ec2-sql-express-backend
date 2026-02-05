const express = require('express');
const app = express();

app.use(express.json());

const collegeRoutes = require('./route/collegeroute');  
app.use('/colleges', collegeRoutes);  
  

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});