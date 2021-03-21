const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const task1 = new Task({
//     description: 'task 3 description',
//     isCompleted: true
// })
// task1.save().then(() => console.log(task1)).catch((err) => console.log(err))