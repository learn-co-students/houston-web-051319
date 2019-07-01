document.addEventListener('DOMContentLoaded', function(){
    
    let character;
    
    fetch('http://localhost:3000/players/1')
        .then(function(response){
            return response.json()
        })
        .then(function(result){
            character = new PlayableCharacter( result.x, result.y )
        })


    let button = document.querySelector('.button')
    button.addEventListener('click', function(e){
        e.preventDefault()
        let speedInput = document.querySelector('.speed-input')
        speed = parseInt(speedInput.value)
    })

    let saveButton = document.querySelector('.save-button')
    saveButton.addEventListener('click', function(){
        // VERB: POST
        // PATH: http://localhost:3000/characterData
        // body: { x, y }
        fetch('http://localhost:3000/players/1', {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: parseInt(character.element.style.left),
                y: parseInt(character.element.style.bottom)
            })
        })
    })

})



// class Character

//     def initialize()

//     end

// end

// character = Character.new