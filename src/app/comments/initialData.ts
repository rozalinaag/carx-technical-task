import { CommentType } from "./types";

export const comments: CommentType[] = [
  {
    id: "1",
    idTicket: "1",
    userName: 'Светлана Цветаева',
    text: 'Добрый день, когда возьмете запрос в работу? Есть проблемы в работе программы, не могу продолжить работу. Вопрос срочный. Есть проблемы в работе программы, не могу продолжить работу. Вопрос срочный. ',
    data: new Date(),
  },
  {
    id: "2",
    idTicket: "1",
    userName: 'Техническая поддержка',
    text: 'Подскажите, у вас есть доступ?',
    data: new Date(),
  },
  {
    id: "2",
    idTicket: "1",
    userName: 'Светлана Цветаева',
    text: 'Да, есть',
    data: new Date(),
  },
  {
    id: "3",
    idTicket: "2",
    userName: 'Анна Иванова',
    text: 'Пример комменатрия',
    data: new Date(),
  },
]