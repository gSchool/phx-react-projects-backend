
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars_locations').insert([
        {
          "location_id": 1,
          "car_id": 1
        },
        {
          "location_id": 7,
          "car_id": 2
        },
        {
          "location_id": 1,
          "car_id": 3
        },
        {
          "location_id": 6,
          "car_id": 4
        },
        {
          "location_id": 7,
          "car_id": 5
        },
        {
          "location_id": 6,
          "car_id": 6
        },
        {
          "location_id": 5,
          "car_id": 7
        },
        {
          "location_id": 3,
          "car_id": 8
        }
      ]);
    });
};
