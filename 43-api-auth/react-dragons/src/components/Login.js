import React from 'react'

export default class Login extends React.Component {

    state = {
      name: '',
      password: ''
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password
        })
      })
        .then( res => res.json())
        .then( user => {
          localStorage.setItem('token', user.auth_token)
          this.props.history.push('/dragons')
        })
    }
  
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
   render(){
     return (
       <form>
         <label>Name</label>
         <input onChange={this.handleChange} name="name" type="text" />
         <label>Password</label>
         <input onChange={this.handleChange} name="password" type="text" />
         <input type="submit" onClick={this.handleSubmit} />
       </form>
     )
   }
  }
  