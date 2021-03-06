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
    component: '#1D1D49',
    navBar: '#F9F9FB',
    navButton: '#3A3A85',
    grey: '#A3A8CE',
    lightGrey: '#DADCF1',
    veryLightGrey: '#FBFBFB',
    button: '#655ed4',
    info: '#6261a3',
    darkGrey: '#292956',
    '8584D2': '#8584D2',
    tooltip: '#5452CE',
    logo: '#00F9BB'
  }
}

export const typography = {
  heading1: {
    fontSize: 40,
    lineHeight: '49px',
    fontWeight: 800
  },
  heading2: {
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 800
  },
  heading3: {
    fontSize: 27,
    lineHeight: '35px',
    fontWeight: 800
  },
  heading4: {
    fontSize: 24,
    lineHeight: '30px',
    fontWeight: 800
  },
  body1: {
    fontSize: 22,
    lineHeight: '28px',
    fontWeight: 900
  },
  body2: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 600
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 900
  },
  subtitle2: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 600
  },
  body3: {
    fontSize: 13,
    lineHeight: '19px',
    fontWeight: 900
  },
  body4: {
    fontSize: 13,
    lineHeight: '19px',
    fontWeight: 600
  },
  caption1: {
    fontSize: 11,
    lineHeight: '15px',
    fontWeight: 600
  },
  caption2: {
    fontSize: 11,
    lineHeight: '16px',
    fontWeight: 900
  },
  caption3: {
    fontSize: 9,
    lineHeight: '12px',
    fontWeight: 600
  },
  caption4: {
    fontSize: 9,
    lineHeight: '14px',
    fontWeight: 900
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
    fontFamily: 'Nunito Sans',
    fontWeightRegular: 600,
    h1: typography.heading1,
    h2: typography.heading2,
    h3: typography.heading3,
    h4: typography.heading4,
    body1: typography.body2,
    subtitle1: typography.subtitle1,
    subtitle2: typography.subtitle2,
    body2: typography.body4,
    caption: typography.caption1
  }
})

export default theme
