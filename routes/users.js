var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'user'});
});

router.post('/login',(req,res)=>{
  console.log(req.body);
})

module.exports = router;
