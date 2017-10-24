exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', function(table) {
    table.increments();
    table.integer('year');
    table.string('make');
    table.string('model');
    table.integer('miles');
    table.integer('price');
    table.string('photo_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars');
};