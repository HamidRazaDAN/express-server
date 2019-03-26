import { hash } from 'bcrypt';
import { config } from '../config';
import { userRepository } from '../repositories';

export default async () => {
  const countDocs = await userRepository.countDocuments();
  if (countDocs === 0) {
    const saltRound = 10;
    const user1 = {
      email: 'vinay@successive.tech',
      name: 'Vinay',
      password: await hash(config.PASSWORD, saltRound),
      role: 'head-trainer',
    };

    const user2 = {
      email: 'sunil@successive.tech',
      name: 'Sunil',
      password: await hash(config.PASSWORD, saltRound),
      role: 'trainer',
    };

    const user3 = {
      email: 'hamid@successive.tech',
      name: 'Hamid',
      password: await hash(config.PASSWORD, saltRound),
      role: 'trainee',
    };

    await userRepository.create(user1);
    await userRepository.create(user2);
    await userRepository.create(user3);
  }
};
