# Inverse Dataflow


### Learning Goals
- Changing state in a parent component
- Declaratively updating state


### Component Hierarchy
* App
    * children
        * Header 
        * DragonList
            * state: 
                * dragons
            * children
                * DragonCard [] 
                    * props
                        * name
                        * description
                        * image
                * DragonForm
                    * state
                        * dragonName
                        * dragonImage


### Vocabulary
* Component hierarchy
    * The tree of components (who renders who)
* Parent Component
    * The component that renders _this_ component
* Inverse dataflow
    * Sending data back up the component tree through callbacks
 
