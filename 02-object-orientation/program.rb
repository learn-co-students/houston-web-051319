require 'pry'

class Hero

    @@all = []
    
    def initialize(first_name, last_name, abilities)
        # first_name = first_name
        @first_name = first_name
        @last_name = last_name
        @abilities = abilities
        @@all << self
    end

    

    # Setter Method
    def first_name=(value)
        if(value.length < 10)
            @first_name=value
        end
    end

    # Getter Method
    def first_name
        puts "Hi"
        @first_name
    end

    def last_name
        @last_name
    end

    def full_name
        binding.pry
        "#{self.first_name} #{self.last_name}"
    end

    def abilities
        @abilities
    end

    # Defining a class method:
    def self.with_most_abilities
        result = @@all[0]
        @@all.each do | hero |
            binding.pry
            if hero.abilities.length > result.abilities.length
                result = hero
            end
        end
        result
    end

end

spiderman = Hero.new("Peter", "Parker", [
    {
       name: "Spidey Sense",
       cool_factor: 5
    },
    {
        name: "Shoots Webs",
        cool_factor: 5
    }
])
thor = Hero.new("Thor", "Odinson", [
    {
        name: 'Mjnor',
        cool_factor: 10
    },
    {
        name: 'God Blast',
        cool_factor: 5
    },
    {
        name: 'Storm Breaker',
        cool_factor: 12
    }
])

# Instance Method:
# spiderman.with_most_abilities

# Class Method: 
Hero.with_most_abilities

binding.pry

