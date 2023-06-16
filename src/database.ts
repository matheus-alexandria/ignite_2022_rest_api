import 'dotenv/config';
import { knex as setupKnex, Knex } from 'knex';

if (!process.env.DATABASE_URL) {
  throw new Error('Database url env not found');
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
};

export const knex = setupKnex(config);
