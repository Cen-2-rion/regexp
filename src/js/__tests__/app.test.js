import UserValidator from '../app';

// проверочные тесты
describe('UserValidator', () => {
  const userValidator = new UserValidator();

  test.each([
    ['alder'],
    ['al-de_r'],
    ['al--der'],
    ['a1d2e3r'],
    ['al123der'],
  ])('usernames with %i are valid', (username) => {
    expect(userValidator.validateUsername(username)).toBeTruthy();
  });

  test.each([
    ['5alder'],
    ['alder0'],
    ['al12345der'],
    ['101010'],
    ['_alder'],
    ['alder-'],
    ['__--__'],
  ])('usernames with %i are not valid', (username) => {
    expect(userValidator.validateUsername(username)).toBeFalsy();
  });
});
