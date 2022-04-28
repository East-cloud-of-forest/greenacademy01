var express = require('express');
var router = express.Router();
const memos = require('../memo.json')

router.get('/', function(req, res, next) {
  res.send(memos)
});

router.get('/:id', function(req, res, next) {
  const m = memos.filter((memo)=>{
    if(memo.id == req.params.id) {
      return true
    }
  })
  res.send(m[0])
});

router.post('/', function(req, res, next) {
  memos.push({
    id : memos.length + 1,
    title : req.body.title,
    memo : req.body.memo,
    writer: ''
  })
  res.redirect('/')
});

module.exports = router;
