class Hero

    @@all = []
    
    def initialize(first_name, last_name)
        # first_name = first_name
        @first_name = first_name
        @last_name = last_name
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
        @first_name
    end

    def last_name
        @last_name
    end

    def full_name
        "#{self.first_name} #{self.last_name}"
    end

    def abilities
        Ability.all.select do | ability |
            ability.hero == self
        end
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