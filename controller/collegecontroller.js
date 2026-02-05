const db = require('../data/db');

exports.getData =(req,res)=>{
    db.query("select * from collegedata",(err,results)=>{
        if(err){
            return res.status(500).json({error:'Database query failed'});
        }
        res.json(results);
    });
};

exports.addData =(req,res)=>{   
    const {id,name}=req.body;
    const sql = "insert into collegedata (id,name) values (?,?)";  
    db.query(sql,[id,name],(err,results)=>{
        if(err){
            return  res.status(500).json({error:'Database insert failed'});
        }   
        res.status(201).json({
            message:'College added successfully',
            id:results.insertId
        });
});
};