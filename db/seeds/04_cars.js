
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          year: 1995,
          make: 'Honda',
          model: 'Civic',
          miles: 135000,
          price: 3500,
          location_id: 3
        },
        {
          year: 2004,
          make: 'Chrysler',
          model: 'PT Cruiser',
          miles: 155000,
          price: 3500,
          location_id: 1
        },
        {
          year: 2006,
          make: 'Mazda',
          model: '6',
          miles: 85000,
          price: 4700,
          location_id: 2
        },
        {
          year: 2017,
          make: 'Chevrolet',
          model: 'Volt',
          miles: 15000,
          price: 33220,
          location_id: 5
        },
        {
          year: 2009,
          make: 'Toyota',
          model: 'Camry LE',
          miles: 139000,
          price: 6700,
          location_id: 4
        },
        {
          year: 2006,
          make: 'Kia',
          model: 'Sedona',
          miles: 124000,
          price: 2500,
          location_id: 2
        },
        {
          year: 2005,
          make: 'Toyota',
          model: 'Prius',
          miles: 184000,
          price: 5500,
          location_id: 5
        },
        {
          year: 2003,
          make: 'Nissan',
          model: '350Z',
          miles: 140000,
          price: 6000,
          location_id: 6
        },
      ]);
    });
};
