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
                        review:1,
                        likes:1,
                        disLikes:1
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
    likeReview : (reviewDetails) =>{
        return new Promise(async(resolve,reject) =>{

            const commentId = reviewDetails.commentId
            const userId = reviewDetails.userId
            
            const isLiked = await db.get().collection(collection.REVIEW_COLLECTION).findOne(
                {
                    _id:ObjectId(commentId),
                    likes:{uid:userId}
                })
            const isDisLiked = await db.get().collection(collection.REVIEW_COLLECTION).findOne(
                {
                    _id:ObjectId(commentId),
                    disLikes:{uid:userId}
                })
            console.log("isLiked = ",isLiked);
            
            if(reviewDetails.condition === 'like'){
                if(isLiked != null){
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $pull:{
                                likes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            console.log("value pulled");
                            resolve("liked")
                        })
                }else if(isDisLiked != null){
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $pull:{
                                disLikes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                                {
                                    _id:ObjectId(commentId)
                                },
                                {
                                    $push:{
                                        likes:{uid:userId}
                                    }
                                }
                                ).then(()=>{
                                    console.log("dislike remove and like");
                                    resolve("liked")
                             })
                     })
                }else{
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $push:{
                                likes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            resolve("liked")
                     })
                }
            }else{
                if(isDisLiked != null){
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $pull:{
                                disLikes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            console.log("value dislike pulled");
                            resolve("liked")
                        })
                }else if(isLiked != null){
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $pull:{
                                likes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                                {
                                    _id:ObjectId(commentId)
                                },
                                {
                                    $push:{
                                        disLikes:{uid:userId}
                                    }
                                }
                                ).then(()=>{
                                    console.log("like remove and dislike");
                                    resolve("liked")
                             })
                     })
                }else{
                    db.get().collection(collection.REVIEW_COLLECTION).updateOne(
                        {
                            _id:ObjectId(commentId)
                        },
                        {
                            $push:{
                                disLikes:{uid:userId}
                            }
                        }
                        ).then(()=>{
                            console.log("disLiked");
                            resolve("liked")
                     })
                }
            }
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
    },

    searchData: (data)=>{
        return new Promise(async(resolve,reject)=>{

            db.get().collection(collection.BOOK_COLLECTION).createIndex({
                title:"text",
                Language:"text",
                Genres:"text",
                categories:"text",
                author:"text",
                description:"text",
                longDescription:"text"
            }).then(async res=>{
                
                var details = await db.get().collection(collection.BOOK_COLLECTION).find({
                    $text:{
                        $search:data.text
                    }
                }).toArray()

                resolve(details)
            })

        })
    }

}
