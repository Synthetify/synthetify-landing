import React from 'react'
import { Button, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChangeLanguageModal from '@components/Modals/ChangeLanguageModal/ChangeLanguageModal'
import { blurContent, unblurContent } from '@utils/uiUtils'
import { Language } from '@static/translations'
import useStyles from './style'

export interface IProps {
  languages: Array<{ label: string, language: Language, greeting: string }>
  onSelect: (chosen: Language) => void
  current: string
}

export const ChangeLanguageButton: React.FC<IProps> = ({ languages, onSelect, current }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    blurContent()
    setOpen(true)
  }

  const handleClose = () => {
    unblurContent()
    setOpen(false)
  }

  return (
    <>
      <Button
        className={classes.button}
        classes={{
          endIcon: classes.endIcon
        }}
        variant='contained'
        onClick={handleClick}
        style={{ marginRight: 0 }}
        endIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.textEllipsis}>{current}</Typography>
      </Button>
      <ChangeLanguageModal
        languages={languages}
        onSelect={onSelect}
        current={current}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  )
}

export default ChangeLanguageButton
