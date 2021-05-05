import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
  black: {
    background: '#030313',
    light: '#090B1B',
    kinda: '#1A1A1A'
  },
  blue: {
    accent: '#072E5A',
    base: '#0B2545'
  },
  gray: {
    base: '#8DA9C4'
  },
  green: {
    main: '#00F9BB',
    hover: 'rgba(0,249,187,0.15)'
  },
  white: {
    main: '#FFFFFF'
  }
}
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00F9BB',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#030313'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#030313'
    }
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      fontSize: 22
    },
    body2: {
      fontSize: 16
    },
    h1: {
      fontSize: 56
    },
    h2: {
      fontSize: 40
    },
    h3: {
      fontSize: 32
    }
  }
})
