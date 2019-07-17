# State and Components



### Learning Goals

- Listening for events by passing event handlers as props
- Define and change state within a component using `setState`
- Identify controlled and uncontrolled components



### Vocabulary

* Event Listeners
  * functions which are invoked when an event fires
* Synthetic Events
  * the event objects that react uses to increase performance. They are broken down after the event fires.
* `state`
  * data (usually an object) that a component "owns" and can change
* `setState`
  * a function which replaces state with a new object and rerenders the component
* Uncontrolled component 
  * a component which manages it's own state
* Controlled component
  * a component whose data is managed by a parent





### Example 1

```jsx
class UserForm extends React.Component {

	handleSubmit = e => {
		alert(e.name.value)
    }
    
    render(){
        return (
        	<form onSubmit={this.handleSubmit}>
                <div>
                	<label>Name</label>
                    <input name="name" type="text"/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
```



### Example 2

```jsx
class UserForm extends React.Component {
    
    state = {
        user: { 
            name: '' 
        }
    }
    
	handleChange = e => {
		this.setState({ user: { name: e.target.value } })
    }
    
    handleSubmit = e => {
		alert(this.user.name)
    }

    render(){
        return (
        	<form onSubmit={this.handleSubmit}>
                <div>
                	<label>Name</label>
                    <input type="text" onChange={this.handleChange} />
                </div>
                 <button>Submit</button>
            </form>
        )
    }
}
```

