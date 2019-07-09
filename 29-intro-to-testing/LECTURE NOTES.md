# Intro to Testing


### Resources
* https://create.kahoot.it/share/intro-to-testing/46393e30-b677-4cb9-9a1b-3e29bab0fd36
* <https://github.com/Joshua-Miles/intro-to-testing-lecture-exercises/>

### Learning Goals

* Define different software testing approaches 
* Write a unit test using Mocha and Chai
* Identify cases to 


### Activation
* Add `Character#element` for the special ability
* This works?
* Show that it broke another feature
* One purpose of automated testing is that it keeps us from breaking code that already works



### Learning Goal 1: Define different software testing approaches 

##### Timestamp: 0:15

##### Demonstrate
* Definitions

##### Vocabulary

* Alpha Testing
  * Testing an application before it reaches end users
* Beta Testing
  * Initial testing after an application reaches end users

- Development Testing (what we're talking about to day)
  - Test Driven Development
    - Writing tests that describe how your could _should_ work
  - Unit Testing
    - Test a specific thing ( or _unit_)  in your code (like a class or function) 
  - Integration Testing
    - Test how multiple units work _together_
  - Regression Testing
    - Running any test that has worked previously to ensure that a change to the code has not broken an existing feature

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3] 



### Learning Goal 2: Write a unit test using Mocha and Chai

##### Timestamp: 30

##### Demonstrate

- Testing our app with normal JS
- This is not very dry
- There are tools that abstract this for us

##### Vocabulary

- Test Suite
  - A series of tests which determine how well a piece of code is working 
- Testing Framework
  - A package which makes it easier to write tests
- `describe` & `it`
  - Functions which the testing framework can use to describe the functionality it's testing
- `expect`
  - A function used to test a condition

##### Questions 

##### Check for Understanding

- *Self Assessment (1)*  



### Learning Goal 3: Identify useful test cases that improve code quality

##### Timestamp: 1:00

##### Vocabulary

- Happy path
- Sad path
- Extreme edge cases

##### Questions 

##### Check for Understanding (1:10)

- *Think-Pair-Share (2)*



### Conclusion

- There is a difference between code that works and code that is good. The latter can be extended, understood by future developers and built upon as our software increases in complexity.
- Writing code that can be easily tested leads us to write code which has good seperation of concerns and a degree of idempotency, which will help us down the line as our code is resused.
- Segue into a discussion about unit testing in the workplace. Unit tests are not always part of a development teams process because it is often viewed by nonprogrammers as inessential. As good developers we should know and lobby for good programming practices even if we don't always have the opportunity to follow them.

