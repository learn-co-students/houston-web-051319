document.addEventListener('DOMContentLoaded', function(){
    
    let character;
    
    fetch('http://localhost:3000/players/1')
        .then(function(response){
            return response.json()
        })
        .then(function(result){
            character = new PlayableCharacter( result.name, result.x, result.y )
        })

    fetch('http://localhost:3000/npcs')
        .then(function(response){
            return response.json()
        })
        .then(function(results){
            results.forEach(result => {
                new NonPlayableCharacter( result.name, result.x, result.y )
            })    
        })


    let speedInput = document.querySelector('.speed-input')
    speedInput.addEventListener('change', function(e){        
        character.speed = parseInt(speedInput.value)
    })


    let abilityDropDown = document.querySelector('.ability-drop-down')
    abilityDropDown.addEventListener('change', () => {
        
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


function oneOnOne(searchTerm){
    // Remove the element from the page
    let student = Character.all.find( character => character.name === searchTerm )
    student.element.remove()
    
    // Remove the element from the array
    Character.all = Character.all.filter( character => character != student )
}


let isNonPlayable = (character) => character instanceof NonPlayableCharacter
let to = (propertyName) => (character) => character[propertyName]

function stillConfused(){
    return Character.all
            .filter(isNonPlayable)
            .map( to('name') )
}

function groupReview(){
    Character.all.forEach(function(student){
        if(
            student instanceof NonPlayableCharacter 
        ){
            student.element.remove()
        }
    })
    Character.all = []
}