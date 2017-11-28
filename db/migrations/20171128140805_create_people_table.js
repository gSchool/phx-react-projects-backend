exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', function(table) {
    table.increments();
    table.string('fname').notNullable();
    table.string('lname').notNullable();
    table.string('company')
    table.string('email')
    table.string('phone')
    table.string('address')
    table.string('photo_url')
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people');
};