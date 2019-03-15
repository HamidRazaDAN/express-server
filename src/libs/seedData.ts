import { userRepository } from '../repositories';

export default async () => {
  const countDocs = await userRepository.countDocuments();
  if (countDocs === 0) {
    const user1 = {
      email: 'vinay@successive.tech',
      name: 'vinay',
      password: '123456',
      role: 'head-trainer',
    };

    const user2 = {
      email: 'sunil@successive.tech',
      name: 'sunil',
      password: '123456',
      role: 'trainer',
    };

    const user3 = {
      email: 'hamid@successive.tech',
      name: 'hamid',
      password: '123456',
      role: 'trainee',
    };

    await userRepository.create(user1);
    await userRepository.create(user2);
    await userRepository.create(user3);
  }
};
