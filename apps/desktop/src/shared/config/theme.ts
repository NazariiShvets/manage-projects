import { createTheme, responsiveFontSizes } from '@mui/material';

const colorTheme = createTheme({
  palette: {
    mode: 'dark'
  },

  components: {
    MuiButton: {
      defaultProps: {
        type: 'button'
      }
    },

    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh'
        },

        html: {
          scrollBehavior: 'smooth'
        },

        //Youtube scrollbar styles
        '*::-webkit-scrollbar': {
          width: '16px'
        },

        '*::-webkit-scrollbar-track': {
          borderRadius: '8px'
        },

        '*::-webkit-scrollbar-thumb': {
          height: '56px',
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundClip: 'content-box',
          backgroundColor: '#888'
        },

        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555'
        }
      }
    }
  }
});

const theme = responsiveFontSizes(colorTheme);

export { theme };
