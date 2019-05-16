class HeroAbility 

    @@all = []

    def self.all 
        @@all
    end

    def initialize(hero, ability)
        @hero = hero
        @ability = ability
        @@all << self 
    end

    def hero 
        @hero
    end

    def ability
        @ability
    end

end