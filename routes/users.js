var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'user'});
});

router.get('/admin',(req,res)=>{
  res.json({user:'admin'})
})

module.exports = router;
