const db = require('../config/mongodb')
const collection = require('../config/collections')
const ObjectId = require('mongodb').ObjectId
const { response } = require('express')
const collections = require('../config/collections')



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

    getReviewsCount : (bookId) => {
        return new Promise(async(resolve,reject) =>{
            const reviewCount = await db.get().collection(collection.REVIEW_COLLECTION).count({bookId:bookId})
            resolve(reviewCount)
        })
    },

    likeReview : (reviewDetials) => {
        return new Promise(async(resolve,reject) => {
            const likeData = {
                commentId : reviewDetials.commentId,
                userId: reviewDetials.userId
            }

            const isLiked = await db.get().collection(collection.REVIEW_LIKES_COLLECTION).findOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
            const isDisLiked = await db.get().collection(collection.REVIEW_DISLIKES_COLLECTION).findOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})

            if(reviewDetials.condition === "like"){
                if(isLiked){

                    db.get().collection(collection.REVIEW_LIKES_COLLECTION)
                    .removeOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                    .then(() =>{
                        resolve(true)
                    })
            
                
                }else if(isDisLiked){
                    db.get().collection(collection.REVIEW_DISLIKES_COLLECTION).removeOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                    .then(()=>{
                        db.get().collection(collection.REVIEW_LIKES_COLLECTION).insertOne(likeData).then((data) => {
                            resolve("liked and remove dislike")
                        })
                    })
                }
                else{
                    db.get().collection(collection.REVIEW_LIKES_COLLECTION).insertOne(likeData).then(() => {
                        resolve(true)
                    })
                }
            }else{
                if(isDisLiked){
                    db.get().collection(collection.REVIEW_DISLIKES_COLLECTION)
                    .removeOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                    .then(() =>{
                        resolve(true)
                    })
                }else if(isLiked){
                    db.get().collection(collection.REVIEW_LIKES_COLLECTION)
                    .removeOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                    .then(() =>{
                        db.get().collection(collection.REVIEW_DISLIKES_COLLECTION).insertOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                        .then(()=>{
                            resolve(true)
                        })
                    })
                }else{
                    db.get().collection(collection.REVIEW_DISLIKES_COLLECTION).insertOne({userId:reviewDetials.userId,commentId:reviewDetials.commentId})
                        .then(()=>{
                            resolve(true)
                        })
                }
            }
        })
    },
    getLikeAndDislikeCount : (commentId) => {
        return new Promise(async(resolve,reject) =>{
            const likesCount = await db.get().collection(collection.REVIEW_LIKES_COLLECTION).count({commentId:commentId});
            const disLikesCount = await db.get().collection(collection.REVIEW_DISLIKES_COLLECTION).count({commentId:commentId});
            resolve({likesCount,disLikesCount});
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





