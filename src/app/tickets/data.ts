export const initialTickets = [
  {
    id: '1',
    topic: 'Проблемы в программном обеспечении',
    message: 'Добрый день, не открывается файл Excel.',
    user: {
      id: 1,
      name: 'Светлана Цветаева',
    },
    isClosed: false,
    dateOpen: new Date(),
  },
  {
    id: '2',
    topic: 'Копьютер и другая техника',
    message:
      'Добрый день, не включается компьютер, не могу работать, помогите...',
    user: {
      id: 2,
      name: 'Игорь Иванов',
    },
    isClosed: true,
    dateOpen: new Date(),
    dateClose: new Date(),
  },
  {
    id: '3',
    topic: 'Копьютер и другая техника',
    message:
      'Доброе утро, сегодня в 16:00 произошел сбой на компьютере. Удалились все файлы.',
    user: {
      id: 3,
      name: 'Анна Вишневская',
    },
    isClosed: false,
    dateOpen: new Date(),
  },
  {
    id: '4',
    topic: 'Проблемы с сетью',
    message: 'Здравствуйте, не могу подключиться к сети. Нужна помощь.',
    user: {
      id: 4,
      name: 'Дмитрий Помидоров',
    },
    isClosed: true,
    dateOpen: new Date(),
    dateClose: new Date(),
  },
  {
    id: '5',
    topic: 'Проблемы в программном обеспечении',
    message:
      'Здравствуйте, не подходит сертификат от пакета Microsoft Office. Подскажите ключ для доступа к программам для моей учетной записи.',
    user: {
      id: 5,
      name: 'Кристина Огуречнова',
    },
    isClosed: false,
    dateOpen: new Date(),
  },
];
