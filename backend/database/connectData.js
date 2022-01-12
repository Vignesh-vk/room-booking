const roomDatas =require('./roomData')
const roomModel = require('../src/schema/roomschema')
const mongodb = require('./Mongodb')

mongodb()

const importData = async () =>{
    try{
        await roomModel.deleteMany({});

        await roomModel.insertMany(roomDatas);

        console.log("Data Import Success");

        process.exit()
    }catch(error){
        console.error("Error with data import");
        process.exit(1);
    }
}

importData()