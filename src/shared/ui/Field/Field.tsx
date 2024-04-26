import classNames from 'classnames';
import css from './Field.module.css';

type Props = {
  name: string;
  children: React.ReactNode;
  color?: 'green' | 'blue';
};

export default function Field({ name, children, color }: Props) {
  return (
    <div className={css.wrapper}>
      <div
        className={classNames(
          css.title,
          color && (color === 'green' ? css.green : css.blue)
        )}
      >
        {name}:
      </div>
      <div className={css.text}>{children}</div>
    </div>
  );
}
