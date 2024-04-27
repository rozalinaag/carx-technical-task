import { CommentType } from "./types";

export const comments: CommentType[] = [
  {
    id: "1",
    idTicket: "5",
    user: {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: '1',
    }, 
    text: 'Добрый день, когда возьмете запрос в работу? Есть проблемы в работе программы, не могу продолжить работу. Вопрос срочный. Есть проблемы в работе программы, не могу продолжить работу. Вопрос срочный. ',
    data: new Date(),
  },
  {
    id: "2",
    idTicket: "5",
    user:  {
      email: 'admin', 
      name: 'Техническая поддержка',
      password: 'admin',
      id: "2",
    }, 
    text: 'Подскажите, у вас есть доступ?',
    data: new Date(),
  },
  {
    id: "3",
    idTicket: "5",
    user: {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: "1",
    },
    text: 'Да, есть',
    data: new Date(),
  },
  {
    id: "4",
    idTicket: "2",
    user: {
      email: 'ds@mail.ru', 
      name: 'Светлана Цветаева',
      password: '12345',
      id: "1",
    },
    text: 'Пример комменатрия',
    data: new Date(),
  },
  {
    id: "1",
    idTicket: "1",
    user: {
      email: 'test@gmail.com', 
      name: 'Игорь Иванов',
      password: '12345',
      id: "3",
    },
    text: 'Добрый день, готово?',
    data: new Date(),
  },
]