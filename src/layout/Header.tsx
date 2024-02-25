import {
  Close as CloseIcon,
  ImportExport as ImportExportIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
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
      <ToolbarMui style={{ minHeight: '60px', padding: '0 40px' }}>
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
              }}
              margin="normal"
              required
              fullWidth
              id="search"
              name="search"
              placeholder="Search Dashboard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIconMui />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography color="black">test data</Typography>
        </Box>
      </ToolbarMui>
    </AppBar>
  );
};
