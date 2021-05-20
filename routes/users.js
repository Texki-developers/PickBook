var express = require('express');
const { getNewUploadedBooks } = require('../Helpers/userHelpers');
var router = express.Router();
var userHelpers = require('../Helpers/userHelpers')
/* GET users listing. */
router.get('/get-home-books', function(req, res, next) {
  userHelpers.getNewUploadedBooks()
     .then(newBooks => {
        res.json({newBooks})
    })
});

router.get('/checkuser',(req,res)=>{
  if(req.session.userData){
    // console.log(req.session.user);
    res.json({status:true,data:req.session.userData})
  }else{

    res.json({status:false,data:null})
  }
})
router.post('/add-book',(req,res) => {
    console.log(req.body);
    userHelpers.addBook(req.body).then(statusMessage => {
      res.json({status:statusMessage})
    })
})


router.post('/login',(req,res)=>{
  // console.log(req.body);
  userHelpers.addUser(req.body).then(data=>{
    req.session.userData = data
    // console.log(req.session.userData);
    res.json({data:data})
  })
})

module.exports = router;
