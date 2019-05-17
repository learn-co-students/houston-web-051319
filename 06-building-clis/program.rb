require_relative './config/environment.rb'

spiderman = Hero.new("Peter", "Parker")
thor = Hero.new("Thor", "Odinson")

ss = Ability.new('Spidey Sense', 10)
webs = Ability.new('Shoots Webs', 5)

HeroAbility.new(spiderman, ss)
HeroAbility.new(spiderman, webs)


Ability.new('Mjnor', 10)
Ability.new('God blast', 5)
Ability.new('Storm Breaker', 12)


strength = Ability.new('Super Strength', 12)

HeroAbility.new(spiderman, strength)
HeroAbility.new(thor, strength)

binding.pry