class Character {

    constructor(x, y, imgPath){

        this.ASSET_ROOT = `./assets/${imgPath}`

        this.element = document.createElement('img')
        this.element.style.width = '75px'
        this.element.style.position = 'absolute'

        this.element.src = `${this.ASSET_ROOT}/static.gif`
        this.direction = null
        this.speed = 5

        this.element.style.left = x + 'px'
        this.element.style.bottom = y + 'px'
        document.body.append(this.element)

        Character.all.push(this)


        setInterval( () => {

            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)

            if(this.direction == 'right'){
                this.element.style.left = `${left+this.speed}px`
            }

            if(this.direction == 'left'){
                this.element.style.left = `${left-this.speed}px`
            }

            if(this.direction == 'up'){
                this.element.style.bottom = `${bottom+this.speed}px`
            }

            if(this.direction == 'down'){
                this.element.style.bottom = `${bottom-this.speed}px`
            }

            
        }, 20)
    } 

    static destroyAll(){
        // this === Character
        Character.all.forEach( character => character.element.remove() )
    }


    walkRight(){
        this.element.src = `${this.ASSET_ROOT}/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.element.src = `${this.ASSET_ROOT}/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.element.src = `${this.ASSET_ROOT}/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.element.src = `${this.ASSET_ROOT}/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.element.src = `${this.ASSET_ROOT}/static.gif`
        this.direction = null
    }


    static all = []

}