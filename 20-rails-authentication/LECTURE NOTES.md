# Rails Authentication


### Resources
* <https://play.kahoot.it/#/?quizId=3ae3e032-e93f-4a16-a394-be99f18e8b74>
* <https://github.com/Joshua-Miles/auth-lecture-assessments>


### Learning Goals

* Define Authentication, Authorization, Hashing, Encryption, and BCrypt
* Add a secure password to a user model using `bcrypt` and `password_digest`
* Implement a sign in form
* Implement authorization for every page in our application




### Learning Goal 1: Define Authentication, Authorization, Hashing, Encryption, and BCrypt
##### Timestamp: _

##### Demonstrate
* The difference between authentication and authorization
* The difference between hashing and encryption
* That bcrypt is a gem

##### Vocabulary
* 

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3] 



### Learning Goal 2: Add a secure password to a user model using `bcrypt` and `password_digest`

##### Timestamp: _

##### Demonstrate

- Adding a `password_digest` to the users table using a second migration
- Adding `has_secure_password` to the users model
- How we can now set the password of a user and it will create the `password_digest` hash

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment:* [1] 



### Learning Goal 3: Implement a sign in form

##### Timestamp: _

##### Demonstrate

- There isn't anything new here
- Creating a sessions controller with a create method to authenticate the user
- Using `form_with` to create a basic sign in form

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment:* [2] 



### Learning Goal 4: Implement authorization for every page in our application

##### Timestamp: _

##### Demonstrate

- Creating a `current_user` method which defines the current user using the session
- Creating an `authenticate` method which checks to see if we have a current user
- Using `before_action` to run that method before every request
- Refactoring our authentication logic into the ApplicationController so that it effects all of our routes

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment:* [3] 



### Conclusion 

* 



```ruby
def create
    traveler = Traveler.find_by(username: params[:username])
    if traveler && traveler.authenticate(params[:password])
        # Authenticated!
        session[:current_traveler_id] = traveler.id
        redirect_to "/travelers/#{traveler.id}/"
    else
        # Ooops!
    end
end



def current_traveler
    Traveler.find(session[:current_traveler_id])
end
```

