import ErrorRepository from '../ErrorRepository';

const error = new ErrorRepository();

test('400', () => {
  expect(error.translate(400)).toBe('некорректный запрос серверу');
});

test('404', () => {
  expect(error.translate(404)).toBe('сервер не может найти запрошенный ресурс');
});

test('405', () => {
  expect(error.translate(405)).toBe('у Вас не прав доступа');
});

test('Unknown error', () => {
  expect(error.translate(200)).toBe('Unknown error');
});
