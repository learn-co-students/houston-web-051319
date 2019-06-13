class Driver < ApplicationRecord
    has_many :rides
    has_many :cars, through: :rides

    has_secure_password
    # Same As:
    
    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(value)
    # end

    # def authenticate(value)
    #     value # password (1234)
    #     password = BCrypt::Password.new(self.password_digest) # $asd$adsfjasdlfkas
    #     password == value
    # end

end
