export const initialTickets = [
  {
    id: '1',
    topic: 'Проблемы в программном обеспечении',
    message: 'Добрый день, не открывается файл Excel.',
    user:  {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: "1",
    }, 
    isClosed: false,
    dateOpen: new Date(),
  },
  {
    id: '2',
    topic: 'Копьютер и другая техника',
    message:
      'Добрый день, не включается компьютер, не могу работать, помогите...',
    user:{
      email: 'test@gmail.com', 
      name: 'Игорь Иванов',
      password: '12345',
      id: "3",
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
    user:  {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: "1",
    }, 
    isClosed: false,
    dateOpen: new Date(),
  },
  {
    id: '4',
    topic: 'Проблемы с сетью',
    message: 'Здравствуйте, не могу подключиться к сети. Нужна помощь.',
    user:  
    {
      email: 'test@gmail.com', 
      name: 'Игорь Иванов',
      password: '12345',
      id: "3",
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
    user:  {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: "1",
    }, 
    isClosed: false,
    dateOpen: new Date(),
  },
];
