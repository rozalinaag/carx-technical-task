'use client';

import { ReactNode } from 'react';
import { RootStoreContext } from '../hooks/useStore';
import RootStore from '../../app/rootStore';

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
