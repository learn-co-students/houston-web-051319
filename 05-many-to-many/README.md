# Many to Many Relationships

**Lecture Exercise:** <https://github.com/Joshua-Miles/many-to-many-lecture-exercizes>

### Learning Goals

- Recognize how many to many relationships can be split into two one to many relationships
- Use `select` and `map` to implement an effective many to many relationship
- Employ single responsibility methods to abstract repetiscious code
- Use macros and implicit self to write more consice code


## Many to Many Relationships

* Owners >-< Pets
    * Owner -< OwnershipPaper >- Pet
* Roads >-< Cities
    * Road -< RoadCity >- City
* People >-< Parents
    * Person -< Guardianship >- Parent
* Piplines >-< Platforms
    * Pipline -< PiplinePlatform >- Platform # Worst Case Scenario
    *  Pipline -< TieIn >- Platform
* School Domain
    * Students -< Enrollment >- Classes 
    * Classes  -< Position >- Teachers

### Vocabulary
* Join Class
    * A class that represents the relationship between 2 other classes


**Think-Pair-Share:** Find the Join Class

- For each of the following domains, identify a join class which could be used to define the relationship between the two other classes

- When you're finished, get with a partner and compare your conclusions. Discuss any differences between your answers and how you arrived at the conclusions you did.

- Relationships
    - Voter -< Vote >- Politician 
    - Driver and Car
    - Voter and Politician
    - Customer and Store
    - Reviewer and Restaurant



