spiderman = {
    name: 'Peter Parker',
    alias: 'Spiderman',
    abilities: [
        {
           name: "Spidey Sense",
           cool_factor: 5
        },
        {
            name: "Shoots Webs",
            cool_factor: 5
        }
    ]
}

def ability_with_cool_factor(abilities, cool_factor)
    abilities.select do | ability_hash |
        ability_hash[:cool_factor] == cool_factor
    end
end

def ability_names(abilities)
    abilties.map do | ability_hash |
        ability_hash[:name]
    end
end


# tea_bags = [
#     {
#         name: "Green Tea",
#         steep_time: 3
#     },
#     {
#         name: "Orange Spice",
#         steep_time: 4
#     },
#     {
#         name: "Lemon Lift",
#         steep_time: 2
#     },
#     {
#         name: "Constant Comment",
#         steep_time: 2
#     }
# ]

# longest_steep_time = tea_bags[0]
# tea_bags.each do | tea_bag | 
#     if tea_bag[:steep_time] > longest_steep_time[:steep_time]
#         longest_steep_time = tea_bag
#     end
# end
# puts longest_steep_time