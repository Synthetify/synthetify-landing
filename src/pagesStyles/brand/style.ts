import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  gridWrapper: {
    display: 'grid',
    marginInline: 'auto',
    marginBlock: 192,
    maxWidth: 962,
    gridTemplateColumns: '1fr 1fr',
    columnGap: 60,
    rowGap: 60,

    [theme.breakpoints.down('md')]: {
      marginBlock: 173,
      maxWidth: 829,
      columnGap: 25,
      rowGap: 25
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 96,
      marginBottom: 104,
      maxWidth: 554,
      columnGap: 16,
      rowGap: 16
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 80,
      marginBottom: 65,
      maxWidth: 269,
      gridTemplateColumns: '1fr'
    }
  },
  simpleLogo: {
    backgroundSize: '1920px 1482px',
    maxWidth: 176,

    [theme.breakpoints.down('md')]: {
      maxWidth: 157
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 105
    }
  },
  verticalLogo: {
    backgroundSize: '1920px 1579px',
    maxWidth: 196,

    [theme.breakpoints.down('md')]: {
      maxWidth: 175
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 117
    }
  },
  horizontalLogo: {
    backgroundSize: '1920px 276px',
    maxWidth: 420,

    [theme.breakpoints.down('md')]: {
      maxWidth: 374
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: 250
    }
  }
}))

export default useStyles
