# One To Many Relationships


### Resources
* Kahoot Quiz: https://create.kahoot.it/share/one-to-many-relationships/5fc0c964-ae9b-4a4e-9808-d2e703629d3b
* Lecture Exercises: <https://github.com/Joshua-Miles/one-to-many-lecture-exercises>


### Learning Goals

* Categorize relationships as either one to many, many to many, or one to one
* Explain the value of having a single "source of truth" when defining relationships between objects
* Use `select` to implement an effective one to many relationship
* Use `require` to seperate code into multiple files 

### Activation

What if we wanted to add a label, which includes the name and the coolness combined in  a string?

- We are trying to add behavior to our abilities 

- They would need to be objects as well

- Every (One) Hero has many Abilities


### Learning Goal 1: Categorize relationships as either one to many, many to many, or one to one

##### Timestamp: 0:05

##### Demonstrate
* Define domain
  * Frame relationships between objects as being a common thing we want to model in our domains

* Define the types of relationships

##### Vocabulary
* Domain
* Relationships
  - One to Many
  - Many to Many
  - One to One

##### Questions 

##### Check for Understanding
* *Think-Pair-Share:*

1. For each of the following domains, define all relationships present in the form of:

    `x (has many || have one) y`

   Note that for every relationship, there are actually two to write: x has many ys, and ys belongs to an x

2. When you're finished, get with a partner and compare your conclusions. Discuss any differences between your answers and how you arrived at the conclusions you did.

* Owner and Pet
* Airplane and Ticket
* Traveler and Ticket
* Person and Mother 
* Person and Parent

##### Cue
* Now we know how to recognize a one to many relationship, we're going to try and express one in code- we're going to take the most intuitive approach first.

### Learning Goal 2: Explain the value of having a single "source of truth" when defining relationships between objects

##### Timestamp: 0:15

##### Demonstrate

- Turning Abilities into Objects (20 min)
  - How do I define a new object type?
  - When will the initialize method be called?
  - How can I add accessibility to the requested properties?
- Refactoring  our character to have a single source of truth 
  - Lets remove an ability from the Ability.all array.
    - Is the ability still in a heroes abilities array?
    - Should it be?
  - These are the types of inconsistencies and bugs we encounter if we define a relationship in multiple ways, (inside of both classes). 

##### Vocabulary

- Single Source of Truth

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3] 

##### Cue

- Let's see how we can implement this relationship without defining it in both of the classes



### Learning Goal 3: Use `select` to implement an effective one to many relationship

##### Timestamp: 0:45

##### Demonstrate

- We'll define the relationship in 3 steps:
  - Make `.all` of the abilities available
  - Create an `abilities` method for the hero 
  - Inside the method, `select`  `.all` abilities where the ability's `.hero` is equal to `self`

##### Questions 

##### Check for Understanding

- *Self Assessment*

##### Cue

- Our code is getting a little long, let's try to seperate it into multiple files



### Learning Goal 4: Use `require` to seperate code into multiple files 

##### Timestamp: 0:65

##### Demonstrate

- Refactoring 
- The error

##### Vocabulary

- `require`

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [4-6] 



### Reference

```ruby
class Ability
    attr_accessor :name, :coolness, :hero

    @@all = []
    
    def initialize(name, coolness, hero)
        self.name = name
        self.coolness = coolness
        self.hero = hero
        @@all << self
    end

    def label
        "#{name} (#{coolness})"
    end

    def self.all
        @@all
    end
end
```

