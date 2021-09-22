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
    fontFamily: 'Be Vietnam',
    fontWeightRegular: 500,
    h1: {
      fontSize: 40,
      lineHeight: '49px',
      fontWeight: 800
    },
    h2: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 700
    },
    h3: {
      fontSize: 27,
      lineHeight: '35px',
      fontWeight: 600
    },
    h4: {
      fontSize: 24,
      lineHeight: '33px',
      fontWeight: 700
    },
    body1: { // body1 + body2 (when bold use fontWeight 700)
      fontSize: 22,
      lineHeight: '30px',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500
    },
    body2: { // body3 + body4 (when bold use fontWeight 700)
      fontSize: 13,
      lineHeight: '20px',
      fontWeight: 500
    },
    caption: { // caption1 + caption2 (when bold use fontWeight 700)
      fontSize: 11,
      lineHeight: '16px',
      fontWeight: 500
    }
  }
})

export default theme
