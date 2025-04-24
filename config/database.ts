import path from 'path';

export default ({ env }) => {
  // const client = env('DATABASE_CLIENT', 'postgres');

  const client = 'postgres';

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          // rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
          rejectUnauthorized:false,
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },



    connection: {
      host: env('DATABASE_HOST', 'your-db-host'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'your-db-name'),
      user: env('DATABASE_USERNAME', 'your-db-user'),
      password: env('DATABASE_PASSWORD', 'your-db-password'),
      ssl: {
        rejectUnauthorized: false, // set this to true if you have a valid cert
      },
    },


    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'dpg-d0519695pdvs73ahnfv0-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_db_21mi'),
        user: env('DATABASE_USERNAME', 'strapi_db_21mi_user'),
        password: env('DATABASE_PASSWORD', 'mFzmaCx2KBDsdM0yfNkOtBJGkJbaJbql'),
        ssl: {
          rejectUnauthorized: false
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
