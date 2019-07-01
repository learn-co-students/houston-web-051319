class PlayableCharacter extends Character {

    constructor(x, y){
        super(x, y, 'green-character')
        document.addEventListener('keydown', (event) => {
        
            if(event.repeat){
                return
            }
        
            if(event.key == "ArrowUp"){
                this.walkUp()
            }
        
            if(event.key == "ArrowDown"){
                this.walkDown()
            }
        
            if(event.key == "ArrowRight"){
                this.walkRight()
            }
        
            if(event.key == "ArrowLeft"){
                this.walkLeft()
            }
        
        
        })
        
        document.addEventListener('keyup', () => {
            this.stop()
        })
    }

}   