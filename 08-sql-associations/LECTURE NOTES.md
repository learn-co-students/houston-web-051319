# SQL Associations

### Resources

- https://create.kahoot.it/share/sql-associatons/a27257ef-1b57-4a2a-8179-2db751b6cbde



### Learning Goals

- Use Foreign Keys to Associate Rows
- Use `JOIN` to model a one to many relationship
- Use `JOIN` to model a many to many relationship



### Activation

- We defined this as a relational database
- How have we build object relationships so far?



### Learning Goal 1: Using Foreign Keys to Associate Data

##### Timestamp: _

##### Demonstrate

- We use IDs to track rows in SQL
- We can also use them to build relationships

##### Vocabulary

- Primary Key
  - The ID of a row
- Foreign Key
  - A column with the ID of another row

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3] 



### Learning Goal 2: Using `JOIN` to model a one to many relationship

##### Timestamp: _

##### Demonstrate

- Visualize *joining* two tables using markdown
- Is JOIN symmetric?
- There are different kinds of joins

##### Vocabulary

- JOIN
  - A SQL keyword used to combine 2 tables
- AS
  - A SQL keyword used to alias a table or column when selecting from it

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [4-6] 



### Learning Goal 3: Using `JOIN` to model a many to many relationship

##### Timestamp: _

##### Demonstrate

- The schema for a many to many relationship

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [7-9] 



````
SELECT tr.name, ai. name as airline_name, COUNT(*) as number_of_trips FROM travelers as tr 
	JOIN tickets  as ti ON ti.traveler_id = tr.id 
	JOIN airlines as ai ON ti.airline_id = ai.id
	WHERE ai.name = "Southwest"
	GROUP BY tr.id ORDER BY COUNT(*) DESC LIMIT 1 ;
	```
````



|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |

