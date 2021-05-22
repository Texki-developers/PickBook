const db = require('../config/mongodb')
const collection = require('../config/collections')
const ObjectId = require('mongodb').ObjectId
const { response } = require('express')



module.exports = {

    addUser:(data)=>{
        return new Promise(async(resolve,reject)=>{
            var user = await db.get().collection(collection.USER_COLLECTION).find({uid:data.uid}).toArray()
            // console.log(user.length);

            if(user.length===0){
                db.get().collection(collection.USER_COLLECTION).insertOne(data).then(res=>{
                    resolve(res.ops[0])
                })

            } else {
                resolve(user[0])
            }



        })
    },
    addBook: (bookDetails) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.BOOK_COLLECTION).insertOne(bookDetails).then(res => {
                resolve("Book uploaded successfully")
            }).catch(err => {
                resolve("Book uploading failed")
            })
        })
    },
    getNewUploadedBooks: () => {
        return new Promise(async (resolve, reject) => {
            const newUpdatedBooks = await db.get().collection(collection.BOOK_COLLECTION).aggregate([
                {
                    $project: {
                        imageURL: 1
                    }
                }
            ]).sort({_id:-1}).limit(12).toArray()
            // console.log(newUpdatedBooks)
            resolve(newUpdatedBooks)
        })
    },
    getMostViewedBooks: () => {
        return new Promise(async (resolve, reject) => {
            const mostViewedBooks = await db.get().collection(collection.BOOK_COLLECTION).aggregate([
                {
                    $project: {
                        imageURL: 1
                    }
                }
            ]).limit(12).toArray()
            resolve(mostViewedBooks)
        })
    },

    getAllBook: () => {
        return new Promise(async (resolve, reject) => {
            var data = await db.get().collection(collection.BOOK_COLLECTION).aggregate([{
                $project: {
                    imageURL: 1
                }
            }]).toArray()

            resolve(data)
        })
    },

    getOneBook: (id) => {
        return new Promise((resolve, reject) => {
            var data = db.get().collection(collection.BOOK_COLLECTION).find({ _id: ObjectId(id) }).toArray()
            resolve(data)
        })
    },

    addReview: (review) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.REVIEW_COLLECTION).insertOne(review)
                .then(() => {
                    resolve("Review Added!!")
                }).catch(err => {
                    console.log(err);
                    resolve("Something went wrong!")
                })
        })
    },

    getReviews: (bookId) => {
        return new Promise(async (resolve, reject) => {
            console.log(bookId);
            const reviews = await db.get().collection(collection.REVIEW_COLLECTION).aggregate([
                {
                    $match:{bookId:bookId}
                },
                {
                    $lookup: {
                        from: collection.USER_COLLECTION,
                        localField: 'reviewer',
                        foreignField: 'uid',
                        as: 'userData'
                      }
                },
                {
                    $project:{
                        userData:{photo:1,name:1},
                        reviewer:1,
                        review:1
                      }
                }
            ]).toArray()
            resolve(reviews);
        })
    },

    filterdata:(data)=>{
        return new Promise(async(resolve,reject)=>{
            var details = await db.get().collection(collection.BOOK_COLLECTION).aggregate([
                {
                    $match:data
                },{
                    $project:{
                        imageURL:1
                    }
                }
            ]).toArray()
            resolve(details)
        })
    }


}