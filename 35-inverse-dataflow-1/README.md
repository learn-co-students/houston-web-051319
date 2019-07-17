# State and Components



### Learning Goals

- Listening for events by passing event handlers as props
- Define and change state within a component using `setState`
- Identify controlled and uncontrolled components


# Inverse Dataflow

### Learning Goals
- Changing state in a parent component
- Declaratively updating state

### Vocabulary
* Component hierarchy
    * The tree of components (who renders who)
* Parent Component
    * The component that renders _this_ component
* Inverse dataflow
    * Sending data back up the component tree through callbacks

### Component Hierarchy

* App
    * state
        * cars[]
    * children
        * CarList
            * props: 
                * cars[] 
            * children
                * CarCard
                    * props 
                        * car
        * EditCar
            * state
                * car

* App
    * handleSubmit
    * state
        * dragons[]
    * children
        * DragonCard []
            * props
                * dragonName
                * dragonImage
            * children
                * Title
                    * props
                        * name
        * DragonForm
            * props
                * handleSubmit
            * state
                * newDragonImage
                * newDragonName

### Vocabulary

- Event Listeners
  - functions which are invoked when an event fires
- Synthetic Events
  - the event objects that react uses to increase performance. They are broken down after the event fires.
- `state`
  - data (usually an object) that a component "owns" and can change
- `setState`
  - a function which replaces state with a new object and rerenders the component
- Uncontrolled component 
  - a component which manages it's own state
- Controlled component
  - a component whose data is managed by a parent



