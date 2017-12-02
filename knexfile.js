module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://postgres:root@localhost/q3backend',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL || 'postgres://postgres:root@localhost/q3backend',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
