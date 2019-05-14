# Object Orientation

### Resources

- Kahoot Quiz: https://create.kahoot.it/share/object-orientation/a4751afc-8cf4-4303-ab48-527943a3381c
- Lecture Exercises: <https://github.com/Joshua-Miles/object-orientation-lecture-exercises>

### Learning Goals

- Explain the difference between objects and classes and their roles in making code more reuseable

- Use the `initialize` method to define variables inside of a class 

- Use getter and setter methods to create object properties

- Use the  `self` keyword to access methods within an object

- Explain the  difference between class and instance variables and properties 


### Activation

What if we want to manage more than one hero?

##### Deliverables

- Refactor the logic for our hero "Steve Rogers" so that we can apply it to a new hero, "Thor"
- Implement a "coolest_ability" method, which finds the coolest ability in a heros coolest abilities array.
- Implement a method we can call to get the hero with the most abilities



### Learning Goal 1: Explain the difference between objects and classes and their roles in making code more reuseable

##### Timestamp: 0:10

##### Demonstrate

- 

##### Vocabulary

- Class
- Object

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-4] 

##### Cue

- 



### Learning Goal 2: Use the `initialize` method to define variables inside of a class

##### Timestamp: 0:20

##### Demonstrate

- 

##### Vocabulary

- Instantiate
- Initialize
- Instance variable

##### Questions 

##### Check for Understanding

- *Self Assessment 1:* 

##### Cue

- 



### Learning Goal 3: Use getter and setter methods to create object properties

##### Timestamp: 0:35

##### Demonstrate

- 

##### Vocabulary

- Property
- Instance Method
- Getter 
- Setter

##### Questions 

##### Check for Understanding

- *Self Assessment 2:* 

##### Cue

- 



> Break min: 0:55



### Learning Goal 4: Use the  `self` keyword to access methods within an object

##### Timestamp: 0:65

##### Demonstrate

- 

##### Vocabulary

- `self` keyword

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [5-7] 

##### Cue

- 



### Learning Goal 5: Explain the  difference between class and instance variables and properties 

##### Timestamp: 0:75

##### Demonstrate

- 

##### Vocabulary

- Class Variables
- Class methods

##### Questions 

##### Check for Understanding

- *Think-Pair-Share:*

1. Categorize each of the following things as either a class method or an instance method by replacing each `->` with a `#` for instance methods and a `.` for class methods
2. When you're finished, get with a partner and compare your conclusions. Discuss any differences between your answers and how you arrived at the conclusions you did.

| Name                  | Desc.                                                  |
| --------------------- | ------------------------------------------------------ |
| `Square -> area`      | Returns the area of a square                           |
| `Square -> overlap `  | Returns the area of the overlap of two or more squares |
| `Square -> width`     | Returns the width of a square                          |
| `Square -> totalArea` | Returns the total area of all squares                  |
| `Square -> largest`   | Returns the largest instance of a square               |
| `Square -> height`    | Returns the height of a square                         |



### Conclusion 

- What if we wanted to give each ability a label?





### Reference

```ruby
require 'pry'

class Hero 

    @@all = []

    def initialize(first_name, last_name, abilities) 
        @first_name = first_name
        @last_name = last_name
        @abilities = abilities
        @@all << self
    end

   	def first_name
        @first_name
    end

    def first_name=(value)
        @first_name = value
    end

    def last_name
        @last_name
    end

    def last_name=(value)
        @last_name = value
    end

    def full_name
        @first_name + ' ' + @last_name
    end

   attr_reader :abilities

    def coolest_ability
        coolest_level_found = -Float::INFINITY
        coolest_ability_found = nil
        @abilities.each do | ability |
            if ability[:coolness] > coolest_level_found 
                coolest_level_found = ability[:coolness]
                coolest_ability_found = ability
            end
        end
        coolest_ability_found
    end

    def self.with_most_abilities
        current_highest_ability_count = @@all[0].abilities.length
        current_highest_ability_hero = @@all[0]
        @@all.each do | hero |
            if hero.abilities.length > current_highest_ability_count
                current_highest_ability_count = hero.abilities.length
                current_highest_ability_hero = hero
            end
        end
        current_highest_ability_hero
    end
end

steve = Hero.new('Steve', 'Rodgers', [
    {
        coolness: 5,
        name: 'Super Strength'
    },
    {
        coolness: 10,
        name: 'Gravity Defying Shield'
    }
])



thor = Hero.new('Thor', 'Odinson', [
    {
        name: 'Lightening',
        coolness: 10
    }
])

Hero.with_most_abilities
binding.pry
# steve.coolest_ability
0
```

