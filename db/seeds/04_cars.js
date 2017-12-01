exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          year: 1995,
          make: 'Honda',
          model: 'Civic',
          miles: 135000,
          price: 3500,
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/1992-1995_Honda_Civic_sedan_--_03-21-2012.JPG/1200px-1992-1995_Honda_Civic_sedan_--_03-21-2012.JPG'
        },
        {
          year: 2004,
          make: 'Chrysler',
          model: 'PT Cruiser',
          miles: 155000,
          price: 3500,
          photo_url: 'http://www.chryslercolors.info/wp-content/uploads/2011/06/2004-Chrysler-PT-Cruiser-Touring-Edition-2.jpg'
        },
        {
          year: 2006,
          make: 'Mazda',
          model: '6',
          miles: 85000,
          price: 4700,
          photo_url: 'http://1-photos.motorcar.com/used-2006-mazda-mazda6-s-13131-17016736-4-640.jpg'
        },
        {
          year: 2017,
          make: 'Chevrolet',
          model: 'Volt',
          miles: 15000,
          price: 33220,
          photo_url: 'https://images.hgmsites.net/med/2016-chevrolet-volt-catskill-mountains-ny-dec-2015_100539555_m.jpg'
        },
        {
          year: 2009,
          make: 'Toyota',
          model: 'Camry LE',
          miles: 139000,
          price: 6700,
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/2009_Toyota_Camry_LE.jpg'
        },
        {
          year: 2006,
          make: 'Kia',
          model: 'Sedona',
          miles: 124000,
          price: 2500,
          photo_url: 'https://i.ytimg.com/vi/Hy1d4DbpECg/maxresdefault.jpg'
        },
        {
          year: 2005,
          make: 'Toyota',
          model: 'Prius',
          miles: 184000,
          price: 5500,
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2nd_Toyota_Prius.jpg/1200px-2nd_Toyota_Prius.jpg'
        },
        {
          year: 2003,
          make: 'Nissan',
          model: '350Z',
          miles: 140000,
          price: 6000,
          photo_url: 'https://static.cargurus.com/images/site/2008/05/15/16/09/2003_nissan_350z_track-pic-61257-1600x1200.jpeg'
        },
      ]);
    });
};
