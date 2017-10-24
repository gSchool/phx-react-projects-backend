
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars_locations').insert([
        {car_id: 1, location_id: 1},
        {car_id: 2, location_id: 2},
        {car_id: 3, location_id: 3}
      ]);
    });
};
