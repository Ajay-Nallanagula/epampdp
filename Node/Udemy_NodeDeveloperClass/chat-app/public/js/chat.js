//you can call this method because you already refrenced socket.io.js
const socket = io()
/*
socket.on('countUpdated', (count) => {
    console.log('Count from client', count)
})
*/

/*
const btn = document.querySelector('#increment')
console.log(btn)
btn.addEventListener('click', () => {
    socket.emit('increment')
})
*/

const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

const getRandomColor = () => {
    const max = colors.length - 1
    const randomIndex = Math.floor(Math.random() * max)
    return colors[randomIndex]
}

const $btnSendLocation = document.querySelector('#btnSendLocation')

socket.on('locationMessage', (location) => {
    const locationLnk = `<a href=${location} target="_blank">MY CURRENT LOCATION</a>`
    $("#divMsgContainer").append(locationLnk)
})

socket.on('sendMessage', (msg) => {
    const randomColor = getRandomColor()
    const style = `"backGround:${randomColor};filter: brightness(70%);color:red"`
    const pElement = `<p style=${style}>${msg}</p>`
    $("#divMsgContainer").append(pElement)

})

document.querySelector('#msg-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = document.querySelector('#msgInput').value
    socket.emit('sendMessage', message)
})

$btnSendLocation.addEventListener('click', () => {
    $btnSendLocation.disabled = true
    if (!navigator.geolocation) {
        $btnSendLocation.disabled = false
        return alert('BROWSER DOES\'T SUPPORT GEO-LOCATION')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log({ position })
        const cordinates = { long: position.coords.longitude, lat: position.coords.latitude }
        socket.emit("location", cordinates, (ack) => {
            console.log(ack)
            $btnSendLocation.disabled = false
        })
    })
})

$("#btnTest").click((e) => {
    e.preventDefault()

    const randomColor = getRandomColor()
    const style = `ackGround:${randomColor};filter: brightness(70%);color:red`
    const pElement = `<p style=${style}>Hello World</p>`
    $("#divMsgContainer").append(pElement)
})
