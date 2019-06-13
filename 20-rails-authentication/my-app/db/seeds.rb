# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

audi = Make.create(name: 'Audi')
bmw=  Make.create(name: 'BMW')
ford = Make.create(name: 'Ford')

jason = Driver.create(name: 'Jason', password: '1234' )
carlos = Driver.create(name: 'Carlos', password: '1234' )

a5 = Car.create(make: audi, model: 'A5', color: 'black', total_mileage: 100)
i135 = Car.create(make: bmw, model: '135i', color: 'red', total_mileage: 205)
truck = Car.create(make: ford, model: 'Explorer Sport Trac', color: 'blue', total_mileage: 300)

Ride.create( car: i135, driver: jason )
Ride.create( car: a5, driver: carlos )
