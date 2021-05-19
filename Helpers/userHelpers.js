const db = require('../config/mongodb')
const collection = require('../config/collections')


module.exports = {

    addUser:(data)=>{
        return new Promise((resolve,reject)=>{

            db.get().collection(collection.USER_COLLECTION).insertOne(data).then(res=>{
                resolve(res.ops[0])
            })
        })
    }

}