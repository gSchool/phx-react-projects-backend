
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
        },
        {
          year: 2004,
          make: 'Chrysler',
          model: 'PT Cruiser',
          miles: 155000,
          price: 3500,
        },
        {
          year: 2006,
          make: 'Mazda',
          model: '6',
          miles: 85000,
          price: 4700,
        },
        {
          year: 2017,
          make: 'Chevrolet',
          model: 'Volt',
          miles: 15000,
          price: 33220,
        },
        {
          year: 2009,
          make: 'Toyota',
          model: 'Camry LE',
          miles: 139000,
          price: 6700,
        },
        {
          year: 2006,
          make: 'Kia',
          model: 'Sedona',
          miles: 124000,
          price: 2500,
        },
        {
          year: 2005,
          make: 'Toyota',
          model: 'Prius',
          miles: 184000,
          price: 5500,
        },
        {
          year: 2003,
          make: 'Nissan',
          model: '350Z',
          miles: 140000,
          price: 6000,
        },
      ]);
    });
};
