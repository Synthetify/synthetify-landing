import React from 'react'
import { Typography, Popover, Grid } from '@material-ui/core'
import { Language } from '@static/translations'
import useStyles from './style'
import classNames from 'classnames'

export interface IChangeLanguageModal {
  languages: Array<{ label: string, language: Language, greeting: string }>
  open: boolean
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
  onSelect: (selected: Language) => void
  current?: string
}
export const ChangeLanguageModal: React.FC<IChangeLanguageModal> = ({
  languages,
  open,
  anchorEl,
  handleClose,
  onSelect,
  current
}) => {
  const classes = useStyles()

  return (
    <Popover
      classes={{ paper: classes.paper }}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <Grid className={classes.root} container alignContent='space-around' direction='column'>
        {languages.map(language => (
          <Grid
            item
            key={`languages-${language.label}`}
            className={classNames(classes.listItem, current === language.label ? classes.current : undefined)}
            onClick={() => {
              onSelect(language.language)
              handleClose()
            }}>
            <Typography className={classes.name}>
              {language.label}
            </Typography>
            <Typography className={classes.greeting}>
              {language.greeting}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Popover>
  )
}
export default ChangeLanguageModal
