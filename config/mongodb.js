var  mongo = require('mongodb').MongoClient

var state = {db:null}


var url = 'mongodb+srv://amshenshanu:texkidev@texkidevelopers.4vbb0.mongodb.net/FreshAndCheap'

module.exports.connect = ()=>{
    const dbName = 'PickBook'

    mongo.connect(url,{useUnifiedTopology: true },(err,data)=>{
        if(err) return err
        console.log('\n Connected to database!');
        state.db = data.db(dbName)
    })
}

module.exports.get = ()=>(state.db)
