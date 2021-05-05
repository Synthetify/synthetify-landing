import React, { Fragment } from 'react'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp'
import {
  Button,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow
} from '@material-ui/core'
import useStyles from './style'

export interface IMenuAction {
  name: string
  action: () => void
}

export interface IMenuButton {
  name: string
  actions: IMenuAction[]
}

const MenuButton: React.FC<IMenuButton> = ({ name, actions }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }
  return (
    <Fragment>
      <Button className={classes.button} ref={anchorRef} onClick={handleToggle}>
        {name}
        <ArrowDropDownSharpIcon className={open ? classes.pointerOpen : classes.pointer} />
      </Button>
      <Popper open={open} placement='bottom' anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'center bottom' }}>
            <Paper className={classes.poper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id='menu-list-grow'>
                  {actions.map(actions => (
                    <MenuItem
                      className={classes.actionItem}
                      onClick={e => {
                        actions.action()
                        handleClose(e)
                      }}>
                      {actions.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  )
}

export default MenuButton
