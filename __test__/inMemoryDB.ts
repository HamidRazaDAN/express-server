import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod: MongoMemoryServer = new MongoMemoryServer({
  autoStart: false,
});

export default async () => {
  if (!mongod.runningInstance) {
    await mongod.start();
  }

  return {
    mongoDBName: 'users',
    mongoUri: await mongod.getConnectionString(),
  };
};
