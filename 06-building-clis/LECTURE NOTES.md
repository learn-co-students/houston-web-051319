# Building CLI Applications


### Resources
* <https://github.com/Joshua-Miles/building-clis-lecture-exercises>


### Learning Goals

* Employ single responsibility methods to abstract repetitive code 
* Use macros and implicit self to write more consice code
* Use Bundler to Manage Project Dependencies 
* Use TTY Prompt to build Command Line Interfaces


### Activation
* 



### Learning Goal 1: Employ single responsibility methods to abstract repetitive code

##### Timestamp: 0:05

##### Demonstrate

- How to abstract code
- Writing single responsiblity methods
- We want to be DRY

##### Vocabulary

- Abstraction
- Single responsibility methods
- DRY

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3]

##### Cue

- So this is one way we can make our code easier to read and to follow in any programming language, lastly let's look at some ways to use some Ruby specific tools for improving our code readability



### Learning Goal 2: Use macros and implicit self to write more consice code

##### Timestamp: 0:20

##### Demonstrate

- Using implicit self to **read**
  - Show why we can't use it to set
- Re-writing getters and setters using macros

##### Vocabulary

- Implicit Self
- Macros
  - `attr_reader`
  - `attr_writer`
  - `attr_accessor`

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [4-6]



### Learning Goal 3: Use Bundler to Manage Project Dependencies 

##### Timestamp: _

##### Demonstrate

- 

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment:* 



### Learning Goal 4: Use TTY Prompt to build Command Line Interfaces

##### Timestamp: _

##### Demonstrate

```ruby
ability = prompt.select('Ability', Ability.all.map do | ability |
    {
        value: ability,
        name: ability.label
    }
end)
```



##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment:* 

##### Cue

- 



### Conclusion 

* 