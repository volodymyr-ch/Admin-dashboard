import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const pathnames = pathname.split('/').filter((loc) => loc);

  return (
    <Box sx={{ display: 'flex', marginBottom: '24px', color: theme.colors.secondaryText }}>
      <Typography variant="subtitle2">YOU ARE HERE</Typography>
      {pathnames.map((loc, index) => (
        <Typography
          key={loc}
          variant="subtitle2"
          sx={{
            textTransform: 'capitalize',
            pl: '6px',
            '&:last-child': {
              color: theme.colors.mainText,
              fontWeight: 'bold',
            },
            '&:not(:first-child)': {
              '&::before': {
                content: '"> "',
                color: theme.colors.secondary,
              },
            },
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/${pathnames.slice(0, index + 1).join('/')}`}
          >
            {loc}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};
