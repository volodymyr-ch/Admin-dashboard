import {
  Close as CloseIcon,
  ImportExport as ImportExportIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Settings as SettingIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  CSSObject,
  IconButton,
  InputAdornment,
  AppBar as MuiAppBar,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { drawerWidth } from 'utils/constants';

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
  boxShadow: 'none',
  width: `calc(100% - ${theme.spacing(6)} - 2px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ToolbarMui = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxHeight: '60px',
}));

const NotificationsLabel = styled('span')(({ theme }) => ({
  fontSize: '14px',
  borderRadius: '50%',
  color: theme.colors.white,
  backgroundColor: theme.colors.red,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  margin: '0 8px',
  textAlign: 'center',
}));

const iconMixin = (theme: Theme): CSSObject => ({
  color: theme.colors.secondary,
  '&:hover': {
    color: theme.colors.primary,
  },
});

const ImportExportIconMui = styled(ImportExportIcon)(({ theme }) => ({
  ...iconMixin(theme),
  transform: 'rotate(90deg)',
}));

const MenuIconMui = styled(MenuIcon)(({ theme }) => ({
  ...iconMixin(theme),
}));

const CloseIconMui = styled(CloseIcon)(({ theme }) => ({
  ...iconMixin(theme),
  zoom: 0.6,
}));

const SearchIconMui = styled(SearchIcon)(({ theme }) => ({
  ...iconMixin(theme),
}));

const IconButtonMui = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const SettingIconMui = styled(SettingIcon)(({ theme }) => ({
  ...iconMixin(theme),
}));

const KeyboardArrowDownIconMui = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  color: theme.colors.secondary,
}));

export const Header: FC<Props> = ({ open, handleDrawerStateChange }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      open={open}
      component="header"
      sx={{
        maxHeight: 60,
        background: theme.colors.bodyBackground,
        boxShadow: theme.colors.boxShadow,
      }}
    >
      <ToolbarMui style={{ minHeight: '60px', padding: '0 0 0 40px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <IconButtonMui
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerStateChange(!open)}
              edge="start"
            >
              <MenuIconMui />
            </IconButtonMui>
            <IconButtonMui>
              <ImportExportIconMui />
            </IconButtonMui>
            <IconButtonMui>
              <CloseIconMui />
            </IconButtonMui>
          </Box>
          <Box sx={{ ml: '100px', display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              sx={{
                border: 'none',
                padding: 0,
                margin: 0,
                maxHeight: 60,
                '& fieldset': { border: 'none' },
                input: {
                  '&::placeholder': {
                    color: theme.colors.mainText,
                    opacity: 1,
                  },
                },
              }}
              margin="normal"
              required
              fullWidth
              id="search"
              name="search"
              placeholder="Search Dashboard"
              InputProps={{
                style: { fontSize: 14 },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIconMui />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Avatar alt="Admin" src="/assets/avatar.webp" sx={{ mr: 2 }} />
            <Typography color={theme.colors.mainText} fontSize={12}>
              Admin{' '}
              <NotificationsLabel style={{ color: theme.colors.white }}>13</NotificationsLabel>
            </Typography>
            <KeyboardArrowDownIconMui />
          </Box>
          <IconButtonMui>
            <SettingIconMui />
          </IconButtonMui>
        </Box>
      </ToolbarMui>
    </AppBar>
  );
};
