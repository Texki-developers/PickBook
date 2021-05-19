var express = require('express');
var router = express.Router();
var userHelpers = require('../Helpers/userHelpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'user'});
});

router.post('/login',(req,res)=>{
  // console.log(req.body);
  userHelpers.addUser(req.body).then(data=>{
    res.json({data:data})
  })
})

module.exports = router;
