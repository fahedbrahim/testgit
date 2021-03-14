var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/test",(req,res)=>{
  res.send("hello i'm test")
})

module.exports = router;
