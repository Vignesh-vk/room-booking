const router=require('express').Router();
  const bookingModel = require('../schema/bookingschema')
  
  router.post('/',async(req,res)=>{
    // return res.status(200).json({
    //     msg: "Success",
    //   });  
    const confirmBooking = new bookingModel({
          name:req.body.name,
          email:req.body.email,
          phone:req.body.phone,
          checkin:req.body.checkin,
          checkout:req.body.checkout
      });
      try{
          var data=await confirmBooking.save();
          res.json({data})
      }
      catch(error){
          console.log(error);
      }
  })
  
module.exports=router