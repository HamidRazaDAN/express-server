import { connect, disconnect } from 'mongoose';
import * as request from 'supertest';
import config from '../src/config/configuration';
import seedData from '../src/libs/seedData';
import Server from '../src/Server';
import { db, users } from './constants';
import inMemoryDB from './inMemoryDB';

describe('API Testing...', () => {
  let req: any;
  const moduleName: string = 'user';
  let data: any;
  let tokenHeadTrainer: any;
  let tokenTrainer: any;
  let tokenTrainee: any;
  let tokenWrong: any;
  const user: any = {};

  beforeAll(async () => {
    const server = new Server(config);
    server.bootstrap();
    const { mongoUri } = await inMemoryDB();
    await connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true });
    await seedData();
    req = request(server.app);
  });

  afterAll(async () => {
    await disconnect();
  });

  describe('Routes Testing...', () => {
    it('With correct route', async () => {
      await req.get('/api').expect(404);
    })
  });

  describe('Login API Testing...', () => {
    it('Should login with right credential & head-trainer role', async () => {
      const result = await req.post(`/${moduleName}/login`).send(db.user1).expect(200);

      const { authorization } = result.headers;
      tokenHeadTrainer = authorization;
      // console.log('===============tokenHeadTrainer===============\n', tokenHeadTrainer);
    });

    it('Should login with right credential & trainer role', async () => {
      const result = await req.post(`/${moduleName}/login`).send(db.user2).expect(200);

      const { authorization } = result.headers;
      tokenTrainer = authorization;
      // console.log('===============tokenTrainer===============\n', tokenTrainer);
    });

    it('Should login with right credential & trainee role', async () => {
      const result = await req.post(`/${moduleName}/login`).send(db.user3).expect(200);

      const { authorization } = result.headers;
      tokenTrainee = authorization;
      // console.log('===============tokenTrainee===============\n', tokenTrainee);
    });

    it('Should not login with wrong credential', async () => {
      const result = await req.post(`/${moduleName}/login`).send(db.user4).expect(404);

      const { authorization } = result.headers;
      tokenWrong = authorization;
      // console.log('===============tokenWrong===============\n', tokenWrong);
    });

    it('Should not login with wrong email pattern', async () => {
      const result = await req.post(`/${moduleName}/login`).send(db.user5).expect(400);
    });
  });

  describe('GET API Testing...', () => {
    it('Head-Trainer should fetch the details based on header', async () => {
      await req.get(`/${moduleName}/getDetail`).set('Authorization', tokenHeadTrainer).expect(200);
    });

    it('Head-Trainer should fetch all data from database', async () => {
      const result = await req.get(`/${moduleName}`).set('Authorization', tokenHeadTrainer).expect(200);
      data = result.body.data[0];
    });

    it('Head-Trainer should fetch a particular data from database', async () => {
      await req.get(`/${moduleName}/${data._id}`).set('Authorization', tokenHeadTrainer).expect(200);
    });

    it('Trainer should fetch the details based on header', async () => {
      await req.get(`/${moduleName}/getDetail`).set('Authorization', tokenTrainer).expect(200);
    });

    it('Trainer should fetch all data from database', async () => {
      await req.get(`/${moduleName}`).set('Authorization', tokenTrainer).expect(200);
    });

    it('Trainer should fetch a particular data from database', async () => {
      await req.get(`/${moduleName}/${data._id}`).set('Authorization', tokenTrainer).expect(200);
    });

    it('Trainee should fetch the details based on header', async () => {
      await req.get(`/${moduleName}/getDetail`).set('Authorization', tokenTrainee).expect(200);
    });

    it('Trainee should fetch all data from database', async () => {
      await req.get(`/${moduleName}`).set('Authorization', tokenTrainee).expect(200);
    });

    it('Trainee should fetch a particular data from database', async () => {
      await req.get(`/${moduleName}/${data._id}`).set('Authorization', tokenTrainee).expect(200);
    });
  });

  describe('POST API Testing...', () => {
    it('Head-Trainer should create a new user', async () => {
      await req.post(`/${moduleName}`).set('Authorization', tokenHeadTrainer).send(users[0]).expect(200);
    });

    it('Trainer should create a new user', async () => {
      await req.post(`/${moduleName}`).set('Authorization', tokenTrainer).send(users[0]).expect(200);
    });

    it('Trainee should not create a new user', async () => {
      await req.post(`/${moduleName}`).set('Authorization', tokenTrainee).send(users[0]).expect(403);
    });
  });

  describe('PUT API Testing...', () => {
    it('Initializing user ID...', () => {
      user.id = data._id;
      user.dataToUpdate = {
        name: 'Mohammad Hamid Raza',
      };
    });

    it('Head-Trainer should update the user data', async () => {
      await req.put(`/${moduleName}`).set('Authorization', tokenHeadTrainer).send(user).expect(200);
    });

    it('Trainer should update the user data', async () => {
      await req.put(`/${moduleName}`).set('Authorization', tokenTrainer).send(user).expect(200);
    });

    it('Trainee should not update the user data', async () => {
      await req.put(`/${moduleName}`).set('Authorization', tokenTrainee).send(user).expect(403);
    });
  });

  describe('DELETE API Testing...', () => {
    it('Head-Trainer should delete the user', async () => {
      await req.delete(`/${moduleName}/${data._id}`).set('Authorization', tokenHeadTrainer).expect(200);
    });

    it('Trainer should not delete the user', async () => {
      await req.delete(`/${moduleName}/${data._id}`).set('Authorization', tokenTrainer).expect(403);
    });

    it('Trainee should not delete the user', async () => {
      await req.delete(`/${moduleName}/${data._id}`).set('Authorization', tokenTrainee).expect(403);
    });
  });
});
