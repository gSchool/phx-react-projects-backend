exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          "author": "Carlene Pickett",
          "content": "Ipsum exercitation sint sunt nisi dolor deserunt enim aliquip fugiat magna velit laborum minim. Sint mollit cillum qui sit eiusmod quis fugiat consectetur esse deserunt anim.",
          "post_id": 4
        },
        {
          "author": "Middleton Nielsen",
          "content": "Esse aute ipsum sunt adipisicing cupidatat irure ea laboris nulla cillum qui. In dolore labore irure laborum duis culpa et ipsum ad minim reprehenderit anim elit proident.",
          "post_id": 3
        },
        {
          "author": "Coffey Willis",
          "content": "Fugiat ut in magna excepteur aute amet elit do sunt enim voluptate do elit ut. Proident quis irure aute labore.",
          "post_id": 6
        },
        {
          "author": "Mueller Harper",
          "content": "Amet sit eiusmod aliqua sint dolore exercitation eu. Esse laboris velit proident incididunt qui consequat consequat enim et proident incididunt.",
          "post_id": 3
        },
        {
          "author": "Coleman Chavez",
          "content": "Amet aliqua enim consectetur adipisicing eiusmod. Ex culpa pariatur ea nulla ipsum nulla nostrud dolore irure elit consequat elit excepteur.",
          "post_id": 7
        },
        {
          "author": "Mckee Mueller",
          "content": "Ut nostrud nisi dolor elit amet irure laborum do sunt commodo irure est nostrud occaecat. Enim minim excepteur exercitation anim in.",
          "post_id": 2
        },
        {
          "author": "Conley Huber",
          "content": "Labore nisi quis minim ea duis dolore consectetur ad quis esse magna eiusmod commodo. Labore laboris laboris aliqua excepteur est nisi Lorem fugiat labore labore enim.",
          "post_id": 4
        }
      ]);
    });
};