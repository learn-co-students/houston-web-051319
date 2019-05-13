# Data Structures


### Resources
* Lecture Exercise: <https://github.com/Joshua-Miles/data-structures-lecture-exercises>
* Kahoot Quiz: https://create.kahoot.it/share/iterators/bf6e6372-2eb5-411d-8f8f-53f65497d07e



### Learning Goals

* Explain the differences between Arrays and Hashs 

* Use `each` to find a specific element in an array

* Use `find` and  `select` to find specific things in an array

* Use `map` to turn an array of one thing into an array of another thing


### Activation

* Tea Steeping Exercise:
  * Find the tea that takes the longest to steep
  * You can only look at one teabag that you store in the mug, and one other teabag, at a time
  * You cannot remember **anything**
* We have to tell computers what to remember, which is why we want to structure our data- we put data into variables like you put the teabag in the mug, we group things into lists like you might have stacked the teabags, so that you can go through them one at a time.
* What type of variable would best model our stack of teabags in ruby?



### Learning Goal 1: Explain the differences between Arrays and Hashs 

##### Timestamp: 0:05

##### Demonstrate

- An array would represent the stack...
- ... But what would represent each bag?
- Using names as keys in a hash vs using an array
  - Keyword **enumerated**

##### Vocabulary

- Array
  - A data structure best suited for an unenumerated number of elements
- Hash 
  - A data structure best suited for an enumerated and named elements

##### Questions 

##### Check for Understanding

* *Think-Pair-Share:* 

1. Categorize each of the following things as being better modled by an array or a hash, or a specific combination.
2. When you're finished, get with a partner and compare your conclusions. Discuss any differences between your answers and how you arrived at the conclusions you did.

|                                                              |      |
| ------------------------------------------------------------ | ---- |
| A list of potential pet names                                |      |
| A pet with a name, age, and favorite toy                     |      |
| A list of movies titles in theaters                          |      |
| A school with a name and multiple cohorts which each have a name and start date |      |
| A super hero with a name, and alias, and a few abilities which each have a name and coolness level |      |

##### Cue

- 



### Learning Goal 2: Use `each` to inspect each thing in an array

##### Timestamp: 0:25

##### Demonstrate

- Looping through an array of abilities to print each name
- That we can name the thing between the pipes whatever

##### Vocabulary

- each
  - let's us run code for each thing inside of an array

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3] 

##### Cue

- Using each to find a specific ability
- We have a faster tool to do this...



> Break



### Learning Goal 3: Use `find` and  `select` to find specific things in an array

##### Timestamp: 0:50

##### Demonstrate
* Using find to find a specific ability by name
* What if I wanted to get all the abilities cooler than five?
* Reiterate return values

##### Vocabulary
* find
  * returns a **single thing** inside an array that matches a condition
* select
  * returns an array of things that match a condition

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [4-6] 

##### Cue
* There's one last iterator we want to discuss, which will helps us turn an array of one thing into an array of another thing



### Learning Goal 4: Use `map` to turn an array of one thing into an array of another thing

##### Timestamp: 0:65

##### Demonstrate

- Using map to turn an array of abilities into an array of ability names
- How map will take whatever we return to "replace" that element in the array

##### Vocabulary

- map
  - turns an array of one thing into an array of another thing

##### Questions 

##### Check for Understanding

- *Self Assessment:* 

1. Clone the repo

2. Open program.rb

3. Use one of the four basic iterators:

   ​    \- each

   ​    \- find

   ​    \- select

   ​    \- map

   to turn the array of numbers into an array of numbers twice as large (4, 5, 6).



### Conclusion 
* What if we wanted to reuse this code for multiple heroes?





### Resources

```ruby
hero_first_name = "Steve"

hero_last_name = "Rogers"

hero_alias = "Captain America"

hero_abilities = [ 
    {
        name: 'Super Strength',
        coolness: 5
    },
    {
        name: 'Gravity Defying Sheild',
        coolness: 10
    }
]

def hero_full_name(hero_first_name, hero_last_name)
    "#{hero_first_name} #{hero_last_name}"
end
```

