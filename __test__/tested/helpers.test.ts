import { validateEmail } from '../../extraTs/utils/helpers';

test('Validating the Email with "@successive.tech"', () => {
  const received: boolean = validateEmail('hamid@successive.tech');
  expect(received).toBeTruthy();
});

test('Validating the Email with "@gmail.com"', () => {
  const received: boolean = validateEmail('hamid@gmail.com');
  expect(received).toBeFalsy();
});
