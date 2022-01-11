const mongoose = require('mongoose')

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.error('Its an error', err))

const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    date: { type: Date, default: Date.now },
    price: Number
})
const Course = mongoose.model('Course', courseSchema)

async function findAllCourses() {
    return await Course.find()
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
        .sort('name')
    //.count()
    //.select({ name: 1, author: 1, price: 1 })
    //console.log(courses)
}

async function display() {
    const courses = await findAllCourses()
    console.log(courses)
}

display()