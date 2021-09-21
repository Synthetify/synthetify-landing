import { createTheme } from '@material-ui/core/styles'

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
    actionButton: '#40BFA0',
    hover: 'rgba(0,249,187,0.15)'
  },
  red: {
    error: '#C52727'
  },
  white: {
    main: '#FFFFFF'
  },
  navy: {
    background: '#0C0D2C',
    dark: '#0E0E2A',
    component: '#1E1E43',
    navBar: '#F9F9FB',
    navButton: '#3D3F72',
    grey: '#A3A8CE',
    lightGrey: '#DADCF1',
    veryLightGrey: '#FBFBFB',
    button: '#6C6BC7',
    info: '#6F6EAA',
    darkGrey: '#292956',
    '8584D2': '#8584D2',
    tooltip: '#5452CE'
  }
}
export const theme = createTheme({
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
    fontFamily: 'DM Sans',
    fontWeightRegular: 500,
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

export default theme
