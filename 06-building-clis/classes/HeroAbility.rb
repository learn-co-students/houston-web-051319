class HeroAbility 

    attr_reader :hero, :ability

    @@all = []

    def self.all 
        @@all
    end

    def initialize(hero, ability)
        @hero = hero
        @ability = ability
        @@all << self 
    end

end