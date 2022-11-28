const map = new Map([
  [404, 'сервер не может найти запрошенный ресурс'],
  [405, 'у Вас не прав доступа'],
  [400, 'некорректный запрос серверу'],
]);

export default class ErrorRepository {
  constructor() {
    this.map = map;
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
