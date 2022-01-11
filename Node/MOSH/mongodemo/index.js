const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Mongodb fired up and running'))
    .catch((err) => console.error('Failed to connect', err))

const courseScehema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
})

//Collection creation
const Course = new mongoose.model('Course', courseScehema)
const course = new Course({
    name: 'Javascript',
    author: 'Mosh Hammedani',
    tags: ['Frontend', 'JS'],
    isPublished: true,
})

// async function saveCourse() {
//     const result = await course.save()
//     console.log(result)
// }

// saveCourse()

// async function getCourses() {
//     const courses = await Course.find()
//     console.log(courses)
// }

// getCourses()

async function getByAuthor() {
    const courses = await Course.find({ author: 'Ajay' })
        .sort('-name')
        .count()
    //.select({ name: 1, tags: 1 })
    console.log(courses)
}


getByAuthor()
