const express = require('express');
const router1 = express.Router();
const Task = require("../models/alien")

    
router1.get("/", async(req, res) => {
    // console.log('get request')
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.send("Error  " + err);
  }
});

router1.post('/', async(req,res)=>{
    // console.log(req.body)
const task = new Task({

    text : req.body.text,
    day :  req.body.day, 
    reminder :   req.body.reminder
})
try{

    const a1 = await task.save();
    
    res.json(a1)

}catch(err){

    res.send('Error '+ err);
}
});

router1.delete('/:_id', async(req, res) => {
// console.log(req.url);
try {
 await Task.deleteOne({_id : req.params._id});
  console.log(res.send());
} catch (err) {
  res.send("Error  " + err);
}
});


router1.put('/:_id',async(req,res)=>{
  
  const id = req.params._id;

try{

  const task = await Task.findById(id);

  const nReminder = !task.reminder;

 await Task.updateOne({_id : id},{reminder : nReminder});
}
catch (err){
  console.log("Error.."+ err);
}


})






module.exports = router1;