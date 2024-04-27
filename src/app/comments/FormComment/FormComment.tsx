'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CommentType } from '../types';
import { v4 as uuIdv4 } from 'uuid';
import { UserIcon } from '@/shared/ui/UserIcon/UserIcon';

type Props = {
  idTicket: string;
  pushNewComment: (idTicket: string, newComment: CommentType) => void;
};

type Form = {
  id: string;
  text: string;
};

export default function FormComment({ pushNewComment, idTicket }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>({
    defaultValues: {
      id: uuIdv4(),
    },
  });

  const submit: SubmitHandler<Form> = (data) => {
    pushNewComment(idTicket, {
      id: data.id,
      idTicket: idTicket,
      user: {
        name: 'dd',
        id: 2,
      },
      text: data.text,
      data: new Date(),
    });
    reset();
  };

  return (
    <div className="pt-5 flex gap-5 items-start">
      <UserIcon />

      <form
        className="w-full flex flex-col gap-2"
        onSubmit={handleSubmit(submit)}
      >
        <input
          className="input"
          type="text"
          {...register('text', { required: 'Обязательно для заполнения' })}
        />

        <div className="text-red-500">{errors.text && errors.text.message}</div>

        <button className="self-end button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
