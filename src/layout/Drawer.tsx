import { FC } from 'react';

import {
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Typography,
} from '@mui/material';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from 'routes/types';
import { drawerWidth } from 'utils/constants';

const navigationItems = [
  { path: RoutePath.analytics, label: 'Analytics', icon: HomeIcon },
  { path: RoutePath.dashboard, label: 'Dashboard', icon: DashboardIcon },
  { path: RoutePath.users, label: 'Users', icon: GroupIcon },
];

const secondaryNavigationItems = [
  { path: RoutePath.email, label: 'Emails', icon: MailIcon },
  { path: RoutePath.grid, label: 'Grid', icon: InboxIcon },
];

type Props = {
  open: boolean;
  collapsed: boolean;
  handleDrawerStateChange: (value: boolean) => void;
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: 0,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 2px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  color: theme.colors.primary,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const TheDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    background: theme.colors.navbarItemBackground,
  },
}));

export const Drawer: FC<Props> = ({ open, collapsed, handleDrawerStateChange }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <TheDrawer
      variant="permanent"
      open={open}
      onMouseEnter={() => {
        if (!collapsed && !open) {
          handleDrawerStateChange(true);
        }
      }}
      onMouseLeave={() => {
        if (!collapsed && open) {
          handleDrawerStateChange(false);
        }
      }}
    >
      <Box sx={{ background: theme.colors.drawerBackground, height: '100vh', border: 0 }}>
        <DrawerHeader sx={{ mb: 3, justifyContent: 'center' }}>
          <Typography>SING APP</Typography>
        </DrawerHeader>
        <List>
          {navigationItems.map(({ path, label, icon: Icon }) => (
            <ListItem
              key={path}
              disablePadding
              sx={{ display: 'block' }}
              onClick={() => navigate(path)}
            >
              <ListItemButtonStyled
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 1.5,
                  background: pathname === path ? theme.colors.navbarItemBackground : 'inherit',
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 'auto', justifyContent: 'center' }}>
                  <Icon
                    sx={{
                      background: pathname === path ? theme.colors.primary : 'inherit',
                      color: pathname === path ? theme.colors.white : 'inherit',
                      borderRadius: '50%',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={label} sx={{ ml: 1.5, overflow: 'hidden' }} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
        <List sx={{ mt: 8 }}>
          {secondaryNavigationItems.map(({ path, label, icon: Icon }) => (
            <ListItem
              key={path}
              disablePadding
              sx={{ display: 'block' }}
              onClick={() => navigate(path)}
            >
              <ListItemButtonStyled
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 1.5,
                  background: pathname === path ? theme.colors.navbarItemBackground : 'inherit',
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 'auto', justifyContent: 'center' }}>
                  <Icon
                    sx={{
                      background: pathname === path ? theme.colors.primary : 'inherit',
                      color: pathname === path ? theme.colors.white : 'inherit',
                      borderRadius: '50%',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={label} sx={{ ml: 1.5, overflow: 'hidden' }} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
      </Box>
    </TheDrawer>
  );
};
