'use client';

import { ReactNode } from 'react';
import { RootStoreContext } from '../hooks/useStore';
import RootStore from '../../app/rootStore';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

dayjs.locale({ ...ru });

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  );
};
