// класс с методом, который проверяет имя пользователя с помощью регулярного выражения
export default class UserValidator {
  validateUsername(username) {
    // допустимы латинские буквы, -, _ и цифры, не должно начинаться и заканчиваться -, _ и цифрами
    this.onlyLettersDashesUnderscoresNums = /^[a-z][-\w]+[a-z]$/i.test(username);
    // не должно содержать подряд более трёх цифр
    this.noMoreThanThreeDigits = /\d{4,}/.test(username);

    return this.onlyLettersDashesUnderscoresNums && !this.noMoreThanThreeDigits;
  }
}
