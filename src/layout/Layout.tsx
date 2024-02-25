import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, PropsWithChildren, useState } from 'react';

import { Drawer } from './Drawer';
import { Header } from './Header';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleDrawerStateChange = (value: boolean) => {
    setOpen(value);
    setCollapsed(value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} handleDrawerStateChange={handleDrawerStateChange} />
      <Drawer open={open} collapsed={collapsed} handleDrawerStateChange={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: '40px 40px 60px' }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
