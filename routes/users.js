var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/ahmed', function (req, res, next) {
  res.send('this is ahmed');
});

router.get ('/fahed', (req,res)=>{
  res.send("i'm fahed")
})

router.get ('/raed', (req,res)=>{
  res.send("i'm raed")
})

module.exports = router;
