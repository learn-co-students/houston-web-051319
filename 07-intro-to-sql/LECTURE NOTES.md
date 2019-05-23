# Intro to SQL


### Resources
* https://create.kahoot.it/share/intro-to-sql/69f2ce9e-3f11-4598-b671-49436c5eb6e3


### Learning Goals

* Explain the purpose and structure of a relational database
* Use CRUD Operations to manipulate data
* Use aggregate functions to analyze data



### Activation

* Personal anecdote about databases/php

* SQL 
  * A language for querying data (Structured Query Language)
* Query
  * A question
* A SQL database is a tool that helps us ask questions



### Learning Goal 1: Explain the purpose and structure of a relational database

##### Timestamp: 0:10

##### Demonstrate
* DB Browser for SQLite
* Building a schema
  * Discussing it's components as you go
* Seed data:

```sql
INSERT INTO `airlines` VALUES (10,'PRIVATE','Jet Linx');
INSERT INTO `airlines` VALUES (15,'PRIVATE','Linear Air Taxi');
INSERT INTO `airlines` VALUES (16,'PUBLIC','United Airlines');
INSERT INTO `airlines` VALUES (9,'PUBLIC','Southwest');
INSERT INTO `airlines` VALUES (8,'PUBLIC','Spirit');
```

* Review table, row, and column

##### Vocabulary
* Database
  * A tool for persisting data
  * A tool for querying data
* Schema
  * Describes the structure of your data
* Table
  * A collection of things with a common schema
* Row
  * A single thing inside the table
* Column
  * Describes what should be in a specific part of a row

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3]



### Learning Goal 2: Use CRUD Operations to manipulate data

##### Timestamp: 0:25

##### Demonstrate

- Perform each CRUD operation using SQL

##### Vocabulary

- CRUD
  - An acronym which represents the four foundational ways we interact with data:
    - Create
    - Read
    - Update
    - Delete
- INSERT
  - SQL command for adding rows to a SQL database
- SELECT
  - SQL command for getting data from a database
- UPDATE
  - SQL command for updating rows in a SQL database
- DELETE
  - SQL command for removing rows from a SQL database

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [4-6]



### Learning Goal 3: Use aggregate functions to analyze data

##### Timestamp: 0:35 - 40

##### Demonstrate

- Define Aggregate
- Two simple ways of aggregating
  - Ordering
  - Limit
- Aggregate more valuable information
  - Get total expenses
    - not super helpful
  - Get average expenses
    - not super helpful
  - Get average expenses grouped by type
    - Gives us insight

##### Vocabulary

- Aggregate
- GROUP BY
  - Seperates data into categories before applying aggregate functions
- ORDER BY
  - Sorts the data by a given column

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [7-9]



### Conclusion 

##### Timestamp: 0:50

* SQL is a great tool to turn _data_ into _information_
* What about relationships?