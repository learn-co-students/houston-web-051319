const ASSET_ROOT = './assets/green-character'

const character = document.createElement('img')
character.style.width = '75px'
character.style.position = 'absolute'
character.style.left = '0px'
character.style.bottom = '0px'
character.src = `${ASSET_ROOT}/static.gif`



let direction = null
let speed = 5

setInterval(function(){

    const left = parseInt(character.style.left)
    const bottom = parseInt(character.style.bottom)

    if(direction == 'right'){
        character.style.left = `${left+speed}px`
    }

    if(direction == 'left'){
        character.style.left = `${left-speed}px`
    }

    if(direction == 'up'){
        character.style.bottom = `${bottom+speed}px`
    }

    if(direction == 'down'){
        character.style.bottom = `${bottom-speed}px`
    }

}, 20)


function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
    direction = 'right'
}

function walkLeft(){
    character.src = `${ASSET_ROOT}/walkleft.gif`
    direction = 'left'
}

function walkUp(){
    character.src = `${ASSET_ROOT}/walkup.gif`
    direction = 'up'
}

function walkDown(){
    character.src = `${ASSET_ROOT}/walkdown.gif`
    direction = 'down'
}

function stop(){
    character.src = `${ASSET_ROOT}/static.gif`
    direction = null
}


document.addEventListener('keydown', function(event){
    
    if(event.repeat){
        return
    }

    if(event.key == "ArrowUp"){
        walkUp()
    }

    if(event.key == "ArrowDown"){
        walkDown()
    }

    if(event.key == "ArrowRight"){
        walkRight()
    }

    if(event.key == "ArrowLeft"){
        walkLeft()
    }


})

document.addEventListener('keyup', function(){
    stop()
})

document.addEventListener('DOMContentLoaded', function(){
    document.body.append(character)
    let button = document.querySelector('.button')
    button.addEventListener('click', function(e){
        e.preventDefault()
        let speedInput = document.querySelector('.speed-input')
        speed = parseInt(speedInput.value)
    })
})
