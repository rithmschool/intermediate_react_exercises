var express = require("express");
var router = express.Router({mergeParams: true});
var db = require("../models")
var auth = require('../middleware/auth')

router.get('/', function(req,res){
  db.User.findById(req.params.id)
    .populate('todos')
    .then(function(user){
      res.status(200).send(user.todos)
    });
});

router.post('/', function(req,res,next){
  var newTodo = Object.assign({}, req.body.todo, {user_id: req.params.id})
  db.Todo.create(newTodo).then(function(todo){
    db.User.findById(req.params.id).then(function(user){
      user.todos.push(todo.id)
      user.save().then(function(user) {
        res.status(200).send(Object.assign(todo, {id: todo._id}));
      })
    })
  }, function(err){
    next(err)
  });
});

router.patch('/:todo_id', function(req,res){
  db.Todo.findByIdAndUpdate(req.params.todo_id, req.body, {new:true}).then(function(todo){
    res.status(200).send(Object.assign(todo, {id: todo._id}))
  });
});

router.delete('/:todo_id', function(req,res){
  db.Todo.findById(req.params.todo_id).then(function(todo){
    todo.remove().then(function() {
      res.status(204).send(Object.assign(todo, {id: todo._id}));
    });
  });
});

module.exports = router;
