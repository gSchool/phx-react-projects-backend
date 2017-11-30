exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars_locations', function(table) {
    table.increments();
    table.integer('car_id').references('id').inTable('cars').onDelete('CASCADE');
    table.integer('location_id').references('id').inTable('locations').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars_locations');
};
