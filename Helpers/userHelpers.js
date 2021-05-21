const db = require('../config/mongodb')
const collection = require('../config/collections')
const ObjectId  = require('mongodb').ObjectId



module.exports = {

    addUser:(data)=>{
        return new Promise(async(resolve,reject)=>{

            var user = await db.get().collection(collection.USER_COLLECTION).find({uid:data.uid}).toArray()

            if(user.length===-1){
                db.get().collection(collection.USER_COLLECTION).insertOne(data).then(res=>{
                    resolve(res.ops[0])
                })

            }else{
                resolve(user[0])
            }


           
        })
    },
    addBook:(bookDetails) => {
        return new Promise((resolve,reject) => {
            db.get().collection(collection.BOOK_COLLECTION).insertOne(bookDetails).then(res=>{
                resolve("Book uploaded successfully")
            }).catch(err=>{
                resolve("Book uploading failed")
            })
        })
    },
    getNewUploadedBooks : () => {
        return new Promise(async(resolve,reject) => {
            const newUpdatedBooks = await db.get().collection(collection.BOOK_COLLECTION).aggregate([
                {
                    $project:{
                        imageURL:1
                    }
                }
            ]).sort({_id:-1}).limit(12).toArray()
            console.log(newUpdatedBooks)
            resolve(newUpdatedBooks)
        })
    },
    getMostViewedBooks : () => {
        return new Promise(async(resolve,reject) => {
            const mostViewedBooks = await db.get().collection(collection.BOOK_COLLECTION).aggregate([
                {
                    $project:{
                        imageURL:1
                    }
                }
            ]).limit(12).toArray()
            resolve(mostViewedBooks)
        })
    },
    
    getAllBook: ()=>{
        return new Promise((resolve,reject)=>{
            var data =  db.get().collection(collection.BOOK_COLLECTION).aggregate([{
                $project:{
                    imageURL:1
                }
            }]).toArray()
            
            resolve(data)
        })
    },

    getOneBook:(id)=>{
        return new Promise((resolve,reject)=>{
            var data = db.get().collection(collection.BOOK_COLLECTION).find({_id:ObjectId(id)}).toArray()
            resolve(data)
        })
    }

}