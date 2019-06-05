Car.destroy_all
Driver.destroy_all
DriveSession.destroy_all

beetle = Car.create(make: 'Volkswagen', model: 'Beetle', color: 'Blue', horse_power: '2.4')
raptor = Car.create(make: 'Ford', model: 'Raptor', color: 'Black', horse_power: '200')
porsche = Car.create(make: 'Porsche', model: '911', color: 'Red', horse_power: '600')

raul = Driver.create( name: 'Raúl', age: 26 )

# This:
ethan = Driver.create( name: 'Ethan', age: 24, car_ids: [
    porsche.id, beetle.id
])

# is the same as:
DriveSession.create( driver: raul, car: raptor )