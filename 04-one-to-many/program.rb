require_relative './config/environment.rb'

spiderman = Hero.new("Peter", "Parker")
thor = Hero.new("Thor", "Odinson")

Ability.new('Spidey Sense', 10, spiderman)
Ability.new('Shoots Webs', 5, spiderman)
Ability.new('Mjnor', 10, thor)
Ability.new('God blast', 5, thor)
Ability.new('Storm Breaker', 12, thor)

binding.pry