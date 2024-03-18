 const App = require("../model/app.model")

 exports.findAll= (req,res)=>{
    App.find()
    .than((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            user:err.user ||"some error occured  while retriving apps",
        });
    });
 };