exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { content: 'TROGDORRRRR!', post_id: 1 },
        { content: 'TROGDORRRRR!', post_id: null },
        { content: 'TROGDORRRRR!', post_id: null },
        { content: 'But I like rainbows!', post_id: 2 },
        { content: 'I would like a robot hand!', post_id: 1 }
      ]);
    });
};