class HomePage {

    constructor(){
        fetch('http://localhost:3000/resorts')
            .then( res => res.json())
            .then( resorts => {
                this.resorts = resorts
                this.render()
            })

    }

    render(){
        document.body.innerHTML = '';
        let ul = document.createElement('ul')
        this.resorts.forEach( resort => {
            let resortCard = new ResortCard(resort)
            ul.append(resortCard.render())
        })
        document.body.append(ul)
    }

} 

class DetailPage {

    constructor(id){
        fetch('http://localhost:3000/resorts/'+id)
            .then( res => res.json())
            .then( resort => {
                this.resort = resort
                this.render()
            })
    }

    render(){
        let backButton = document.createElement('button')
        backButton.innerText = 'Back'
        backButton.addEventListener('click', () => homePage.render())
        let header = document.createElement('h1')
        let ul = document.createElement('ul') 

        this.resort.comments.forEach( comment => {
            let li = document.createElement('li')
            li.innerText = comment.message
            ul.append(li)
        })
        this.textInput = document.createElement('input')
        let submitButton = document.createElement('button')
        header.innerText = this.resort.name
        this.textInput.type = 'text'
        submitButton.innerText = "Comment"
        document.body.innerHTML = '';
        submitButton.addEventListener('click', this.handleSubmit)

        document.body.append( backButton, header, ul, this.textInput, submitButton )
    
        // OR: 
        // document.body.innerHTML = ''
        // document.body.append( 
        //     button('Back', { click: () => homePage.render() }),
        //     h1(this.resort.name),
        //     ul( ...this.resort.comments.map( (comment) => (
        //         li(comment.message)
        //     ))),
        //     this.textInput = input({ type: 'text' }),
        //     button('Comment', {click: this.handleSubmit})
        // )
    }

    handleSubmit = (e) => {
        // PATCH /resorts/id
        // body: { [resort] }
        
        this.resort.comments.push({
            user_id: 1,
            message: this.textInput.value
        })

        fetch(`http://localhost:3000/resorts/${this.resort.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: this.resort.id,
                name: this.resort.name,
                comments: this.resort.comments,
                likes: this.resort.likes
            })    
        })
       this.render()
    }

}

class ResortCard {

    constructor(resort){ 
        this.resort = resort
    }

    render(){
        let li = document.createElement('li')
        li.addEventListener('click', this.handleClick)
        li.innerText = this.resort.name
        return li
    }

    handleClick = (e) => {
        new DetailPage(this.resort.id)   
    }
}

const homePage = new HomePage