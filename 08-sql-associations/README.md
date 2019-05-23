## SQL Associations

### Learning Goals

- Use Foreign Keys to Associate Rows
- Use `JOIN` to model a one to many relationship
- Use `JOIN` to model a many to many relationship

##### Vocabulary

- Primary Key
  - The ID of a row
- Foreign Key
  - A column with the ID of another row
- JOIN
  - A SQL keyword used to combine 2 tables
- AS
  - A SQL keyword used to alias a table or column when selecting from it




### Traveler -< Ticket >- Airline
#### In Ruby
```ruby
class Traveler
    
    attr_accessor: name

    def initialize(name)
        @name = name
    end
    
    # Select from the JOIN Class
    def tickets
        Ticket.all.select do | ticket | 
            ticket.traveler == self
        end
    end
    
    # Map to the other side
    def airlines
        self.tickets.map do | my_ticket |
            my_ticket.airline
        end
    end
    
end
```

```ruby
class Airline

end
```

```ruby
class Ticket

    attr_reader :traveler, :airline

    def initialize(traveler, airline)
        @traveler = traveler # belongs to traveler
        @airline = airline # belongs to airline
    end
    
end
```

#### In SQL

##### Traveler
|  ID   |  Name    |
| ---- | ---- | ----   
|   1  |  Jason       
|   2  |  Roy   
|   3  |  Stefan   

##### Ticket
|  ID   |   traveler_id    | airline_id |
| ----- | ----- | ---- |
|   1   |    1  |   4  |
|   2   |    2  |   4  |
|   3   |    3  |   3  |
|   4   |    3  |   4  |


##### Traveler and Ticket
|  (Traveler) ID   |  Name    | (Ticket) ID | traveler_id    | airline_id |
| ---- | --------- | --- | ---- | ---- | 
|  1   |  Jason    |  1  |  1   |   4  | 
|  2   |  Roy      |  2  |  2   |   4  | 
|  3   |  Stefan   |  3  |  3   |   3  |
|  3   |  Stefan   |  4  |  3   |   4  |

### Aggregation Example
```sql
SELECT tr.name, ai. name as airline_name, COUNT(*) as number_of_trips FROM travelers as tr 
	JOIN tickets  as ti ON ti.traveler_id = tr.id 
	JOIN airlines as ai ON ti.airline_id = ai.id
	WHERE ai.name = "Southwest"
	GROUP BY tr.id ORDER BY COUNT(*) DESC LIMIT 1 
```