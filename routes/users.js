var express = require('express');
var router = express.Router();
var userHelpers = require('../Helpers/userHelpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'user'});
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
