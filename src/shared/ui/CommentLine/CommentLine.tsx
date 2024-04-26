import dayjs from 'dayjs';
import css from './CommentLine.module.css';
import classNames from 'classnames';
import { UserIcon } from '../UserIcon/UserIcon';

type Props = {
  userName: string;
  text: string;
  data: Date;
};

export function CommentLine({ userName, text, data }: Props) {
  return (
    <div className={css.wrapper}>
      <UserIcon />

      <div className={css.comments}>
        <div>
          <div className={classNames(css.userName, 'title')}>{userName}</div>
          <div className={css.text}>{text}</div>
        </div>

        <div className="text-sm text-gray-400">
          {dayjs(data).format('DD MMMM YYYY')}
        </div>
      </div>
    </div>
  );
}
