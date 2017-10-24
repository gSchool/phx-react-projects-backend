exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars_locations', function(table) {
    table.increments();
    table.integer('car_id').references('id').inTable('cars');
    table.integer('location_id').references('id').inTable('locations');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars_locations');
};