exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('title');
    table.string('author');
    table.integer('pages');  
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};