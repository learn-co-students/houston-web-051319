class Hero

    @@all = []
    
    def self.all
        @@all
    end

    def initialize(first_name, last_name)
        # first_name = first_name
        self.first_name = first_name
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
    attr_reader :first_name, :last_name
    # Same as:
    # def first_name
    #     @first_name
    # end


    def full_name
        "#{first_name} #{last_name}"
    end

    def hero_abilities
        HeroAbility.all.select do | hero_ability |
            hero_ability.hero == self
        end
    end

    def abilities
        self.hero_abilities.map do | hero_ability | 
            hero_ability.ability
        end
    end

    # Defining a class method:
    def self.with_most_abilities
        result = @@all[0]
        @@all.each do | hero |
            if hero.abilities.length > result.abilities.length
                result = hero
            end
        end
        result
    end

end