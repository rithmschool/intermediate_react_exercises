var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
});

// userSchema.pre('remove', function(next){
//     var user = this;
//
//     if (!user.isModified('password')) return next();
//
//     bcrypt.hash(user.password, 10).then(function(hashedPassword) {
//         user.password = hashedPassword
//         next();
//     }, function(err){
//         return next(err)
//     })
// });

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
