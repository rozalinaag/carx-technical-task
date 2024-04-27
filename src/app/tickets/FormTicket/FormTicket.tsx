import Field from '@/shared/ui/Field/Field';
import { Ticket } from '../types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuIdv4 } from 'uuid';
import css from './FormTicket.module.css';
import { Paperclip } from '@phosphor-icons/react/dist/ssr';
import { UserType } from '@/app/login/type';

type Props = {
  pushNewTicketAction: (newTicket: Ticket) => void;
  currentUser: UserType;
};

type Form = {
  topic: string;
  text: string;
  files: Blob[];
};

export default function FormTicket({
  pushNewTicketAction,
  currentUser,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Form>({});

  const submit: SubmitHandler<Form> = (data) => {
    const arrayFiles = [];

    for (let i = 0; i < data?.files?.length; i++) {
      arrayFiles.push(URL.createObjectURL(data.files[i]));
    }

    pushNewTicketAction({
      id: uuIdv4(),
      topic: data.topic,
      message: data.text,
      files: arrayFiles,
      user: currentUser,
      isClosed: false,
      dataOpen: new Date(),
    });
    reset();
  };

  return (
    <div className="ticket mb-10">
      <div className="title mb-5">Создайте новое обращение:</div>

      <form
        className="w-full flex flex-col gap-2"
        onSubmit={handleSubmit(submit)}
      >
        <Field name="Тема">
          <input
            list="colors-list"
            className="input"
            {...register('topic', { required: 'Обязательно для заполнения' })}
          />

          <datalist id="colors-list">
            <option value="Проблемы в программном обеспечении" />
            <option value="Компьютер и другая техника" />
            <option value="Проблемы с сетью" />
          </datalist>
        </Field>

        <div className="text-red-500  pl-40">
          {errors.topic && errors.topic.message}
        </div>

        <Field name="Сообщение">
          <input
            type="text"
            className="input"
            {...register('text', { required: 'Обязательно для заполнения' })}
          />
        </Field>
        <div className="text-red-500 pl-40">
          {errors.text && errors.text.message}
        </div>

        <Field name={'Файлы'}>
          <input
            className={css.custom}
            type="file"
            multiple={true}
            {...register('files')}
          />
        </Field>

        <div className={'title flex items-center gap-4 text-lg'}>
          {watch('files')?.length} <Paperclip size={32} />
        </div>

        <button className="self-end button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
