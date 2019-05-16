# Many to Many Relationships


### Resources
* Kahoot Quiz: https://create.kahoot.it/share/many-to-many-relationships/ca9d834c-36f3-4720-80b8-58cf20e9c359
* 


### Learning Goals

* Recognize how many to many relationships can be split into two one to many relationships
* Use `select` and `map` to implement an effective many to many relationship
* Employ single responsibility methods to abstract repetiscious code
* Use macros and implicit self to write more consice code



### Activation

* Review of our Hero class
* Can one ability be possessed by multiple heroes?



### Learning Goal 1: Recognize how many to many relationships can be split into two one to many relationships

##### Timestamp: 0:05

##### Demonstrate
* Are rare. Lets look at some examples.
  * Give me some examples:
  * Most of the time what we percieve as a many-to-many relationships can be better defined as two one-to-many relationships
* Are difficult to reason about
  - Even if a many-to-many relationship can't be logically broken down into two one-to-many relationships, we have to pretend that it can, and create an arbitrary name for our joining entity: **HeroAbility**

##### Vocabulary
* Join class

##### Questions 

##### Check for Understanding
* *Think-Pair-Share:* Find the Join Class

  * For each of the following domains, identify a join class which could be used to define the relationship between the two other classes

  * When you're finished, get with a partner and compare your conclusions. Discuss any differences between your answers and how you arrived at the conclusions you did.

* SchoolClass and Student

* Driver and Car

* Voter and Politician

* Customer and Store

* Reviewer and Restaurant

##### Cue
* Now that we know how to recoginze one to many relationships, let's build one out



### Learning Goal 2: Use `select` and `map` to implement an effective many to many relationship

##### Timestamp: 0:35

##### Demonstrate

- Re-Build the relationship between Ability and Hero as a Many to Many Relationship
  - How do I define a new object type?
  - When will the initialize method be called?
  - What properties should my initialize method take?
    - How many properties will it have?
  - How can I add accessibility to those properties?
  - How can we implement the relationship methods ( heroes and abilities )?

##### Questions 

##### Check for Understanding

- *Self Assessment*

##### Cue

- Now we have a working relationship, we're going to spend a little time refactoring this code to make it less verbose, less intimidating



> Break (0:55)



### Learning Goal 3: Employ single responsibility methods to abstract repetiscious code 

##### Timestamp: 0:60

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



### Learning Goal 4: Use macros and implicit self to write more consice code

##### Timestamp: 0:75

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



### Conclusion 
* You've seen everything on the code challenge

