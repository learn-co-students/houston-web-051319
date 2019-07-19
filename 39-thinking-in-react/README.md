# Thinking in React


### Learning Goals
- Strategically place state
- Plan the structure/mutations of state
- Plan inverse dataflow

### Steps
1. Planned a component hierarcy
2. Built a static version
3. Build a data hierarchy

### Deliverables
- User will be able to:
    - See a list of comic books
    - Live search comic books
    - Add a new comic book
    - Delete comic books
    - Edit comic books


## Vocabulary
- Presentational Components
    - Only receive props (from container components)
    - Concerned with how things look
- Container Components
    - manage state
    - render presentational components
    - Concerned with how things function

## Component Hierarchy

* App
    * state
    * props
    * children
        * SearchBar
        * ComicBookCollection
            * children
                * ComicBookCard [] 
                    * ComicBookForm
                * ComicBookForm



