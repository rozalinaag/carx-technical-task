import { User } from '@phosphor-icons/react/dist/ssr';
import css from './UserIcon.module.css';

export function UserIcon() {
  return (
    <div className={css.user}>
      <User size={32} />
    </div>
  );
}
