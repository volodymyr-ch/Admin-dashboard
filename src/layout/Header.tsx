import { Menu as MenuIcon } from '@mui/icons-material';
import { IconButton, AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const drawerWidth = 240;

type Props = {
  open?: boolean;
  handleDrawerStateChange: (value: boolean) => void;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${theme.spacing(7)} - 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${theme.spacing(8)} - 1px)`,
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header: FC<Props> = ({ open, handleDrawerStateChange }) => (
  <AppBar position="fixed" open={open} component="header">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => handleDrawerStateChange(!open)}
        edge="start"
        sx={{
          marginRight: 5,
          // ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
);
