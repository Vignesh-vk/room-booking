const express = require("express");
const router = express.Router();
const Room = require("../schema/roomschema")
const mongoose = require("mongoose");
router.get("/getallrooms", async (req, res) => {
   
     try {
          const rooms = await Room.find()
     res.send(rooms)
     } catch (error) {
          return res.status(400).json({ message: 'something went wrong' });
     }

});

router.get("/room/:type", async(req, res) => {
     console.log(req.body);
     try {
          const delroom = await Room.find({type:req.params.type})
          res.json(delroom)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});

router.get("/book/:_id", async(req, res) => {
     console.log(req.body);
     try {
          const room = await Room.findById(req.params._id)
          res.json(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});


router.get("/detail/:_id", async(req, res) => {
     console.log(req.body);
     try {
          const room = await Room.findById(req.params._id)
          res.json(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});

// router.get("/getallrooms", async(req, res) => {
//      console.log(req.body);
//      try {
//           const rooms = await Room.find({})
//           res.send(rooms)
//      } catch (error) {
//           return res.status(400).json({ message: error });
//      }
// });

// router.post("/addroom", async(req, res) => {
//   const { room , 
//      rentperday, maxcount ,description ,phonenumber ,type ,image1 ,image2 ,image3} = req.body

//      const newroom = new Room({
//           name : room,
//           rentperday, 
//           maxcount , description , phonenumber , type , imageurls:[image1 , image2 ,image3] , currentbookings:[]
//      })
//      try {
//           await newroom.save()
//           res.send('New Room Added Successfully')
//      } catch (error) {
//           return res.status(400).json({ error });
//      }
// });


module.exports = router