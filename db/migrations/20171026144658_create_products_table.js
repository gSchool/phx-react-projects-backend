exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments();
    table.string('name');
    table.integer('priceInCents').defaultsTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};