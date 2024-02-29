const key1Sound = new Audio('sound/audioKick.m4a')
const key1 = document.querySelector('.key1')

const key2Sound = new Audio('sound/charge.mp3')
const key2 = document.querySelector('.key2')

const key3Sound = new Audio('sound/laser.mp3')
const key3 = document.querySelector('.key3')

const key4Sound = new Audio('sound/tick.mp3')
const key4 = document.querySelector('.key4')

const key5Sound = new Audio('sound/railmachinery.mp3')
const key5 = document.querySelector('.key5')

key1.addEventListener('click', (event) =>{
    event.preventDefault();
    key1Sound.play()
    console.log("tocou")
})

key2.addEventListener('click', (event) =>{
    event.preventDefault();
    key2Sound.play()
    console.log("tocou")
})

key3.addEventListener('click', (event) =>{
    event.preventDefault();
    key3Sound.play()
    console.log("tocou")
})

key4.addEventListener('click', (event) =>{
    event.preventDefault();
    key4Sound.play()
    console.log("tocou")
})
key5.addEventListener('click', (event) =>{
    event.preventDefault();
    key5Sound.play()
    console.log("tocou")
})

