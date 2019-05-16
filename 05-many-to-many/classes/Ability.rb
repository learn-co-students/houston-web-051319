class Ability

    @@all = []

    def self.all
        @@all
    end

    def initialize(name, cool_factor) 
        @cool_factor = cool_factor
        @name = name
        @@all << self
    end


    def label
        "#{self.name} (#{self.cool_factor})"
    end

    def name
        @name
    end

    def name=(value)
        @name = value
    end

    def cool_factor
        @cool_factor
    end

    def cool_factor=(value)
        @cool_factor = value
    end

end