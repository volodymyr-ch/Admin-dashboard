import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <header>header</header>
    <main>{children}</main>
  </div>
);
