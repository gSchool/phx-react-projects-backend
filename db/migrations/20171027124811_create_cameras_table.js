exports.up = function(knex, Promise) {
  return knex.schema.createTable('cameras', function(table) {
    table.increments();
    table.string('title');
    table.string('image');
    table.integer('rating');
    table.float('price');
    table.boolean('on_sale').defaultsTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cameras');
};
