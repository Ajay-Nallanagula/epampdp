const express = require('express')
const router = express.Router()

//This should come from mongodb
let users = [{ userId: 1, name: 'user1' }, { userId: 2, name: 'user2' }]

const onGetUsers = (req, res) => {
    res.send(users)
}
const onCreateUsers = (req, res) => {
    const { name } = req.body
    users = [...users, { name, userId: users.length + 1 }]
    res.send(users)
}

const onUpdateUsers = (req, res) => {
    const { userId } = req.params
    const userIndex = users.findIndex(item => item.userId.toString() === userId)
    if (userIndex < 0) {
        return res.send('User Not found!!')
    }
    users[userIndex] = { ...users[userIndex], ...req.body }
    res.send(users)
}

const onDeleteUsers = (req, res) => {
    const { userId } = req.params
    const filteredUsers = users.filter(item => item.userId.toString() !== userId)
    res.send(filteredUsers)
}

router.get('/', onGetUsers)
router.post('/', onCreateUsers)
router.put('/:userId', onUpdateUsers)
router.delete('/:userId', onDeleteUsers)

module.exports = router