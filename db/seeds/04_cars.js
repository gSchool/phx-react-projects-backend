
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
          year: 2001,
          make: 'Ford',
          model: 'Ranger',
          miles: 155000,
          price: 3000,
        },
        {
          year: 2010,
          make: 'BMW',
          model: '325i',
          miles: 85000,
          price: 12500,
        },
        {
          year: 2017,
          make: 'Chevrolet',
          model: 'Volt',
          miles: 15000,
          price: 33220,
        },
      ]);
    });
};
