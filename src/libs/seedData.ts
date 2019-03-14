import { traineeRepository } from '../repositories';

export default async () => {
  const data = {
    id: '1',
    name: 'Hamid',
  };
  const result = await traineeRepository.findOne(data);
  if (!result) {
    await traineeRepository.create(data);
  }
};
