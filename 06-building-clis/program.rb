require_relative './config/environment.rb'
require 'tty-prompt'

spiderman = Hero.new("Peter", "Parker")
thor = Hero.new("Thor", "Odinson")

ss = Ability.new('Spidey Sense', 10)
webs = Ability.new('Shoots Webs', 5)
hammer = Ability.new('Hammer', 10)
storm_breaker = Ability.new('Storm Breaker', 12)
strength = Ability.new('Super Strength', 12)

HeroAbility.new(spiderman, ss)
HeroAbility.new(spiderman, webs)
HeroAbility.new(spiderman, strength)
HeroAbility.new(thor, strength)
HeroAbility.new(thor, storm_breaker)
HeroAbility.new(thor, hammer)

prompt = TTY::Prompt.new

# name = prompt.ask('Please Enter Your Name: ')
# puts "Welcome #{name}"

hero_choices = Hero.all.map do | hero |
    {
        name: hero.full_name,
        value: hero
    }
end

selected_hero = prompt.select('Please select a hero: ', hero_choices)

puts "#{selected_hero.full_name}"
puts "Abilities:"
selected_hero.abilities.each do | ability |
    puts ability.label
end