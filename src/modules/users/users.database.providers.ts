import { Connection } from 'mongoose';

import { UserDatabaseSchema } from './user.database.schema';
import {
  USER_SCHEMA_SCHEMA_TOKEN,
  DATABASE_PROVIDER,
} from '../../utils/constants';

export const usersDatabaseProviders = [
  {
    provide: USER_SCHEMA_SCHEMA_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model('user', UserDatabaseSchema),
    inject: [DATABASE_PROVIDER],
  },
];
