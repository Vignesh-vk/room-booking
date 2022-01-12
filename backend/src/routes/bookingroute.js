const Room = require('../schema/bookingschema');
const express =require('express');
const router = express.Router();

//getAll
router.get('/',async (req, res) => {
    try {
      const rooms = await Room.find({});
      res.json(rooms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  })

//getSingleRoom
router.get('/:_id',async (req, res) => {
    try {
      const room = await Room.findById(req.params._id);
      res.json(room);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  })

  // router.get('/confirm',async (req, res) => {
  //   try {
  //     const room = await Room.findById(req.params._id);
  //     res.json(room);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Server Error" });
  //   }
  // })

  
module.exports=router