import React from 'react'
import useStyles from './style'
import { Grid, IconButton, List, ListItem, Collapse, ListItemIcon } from '@material-ui/core'
import SynthetifyIconHorizontal from '@components/SynthetifyIconHorizontal/SynthetifyIconHorizontal'
import MenuButton from './MenuButton/MenuButton'
import MainButton from '../MainButton/MainButton'
import MenuIcon from '@material-ui/icons/Menu'
import ListItemText from '@material-ui/core/ListItemText'
import { ExpandLess, ExpandMore, Apps } from '@material-ui/icons'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Home from '@material-ui/icons/Home'
import CloseIcon from '@material-ui/icons/Close'

export interface IHeaderAction {
  name: string
  action: () => void
}

export interface IHeaderProps {
  actions: IHeaderAction[]
}

export const Header: React.FC<IHeaderProps> = ({ actions }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [openSubmenu, setOpenSubmenu] = React.useState(false)

  const toggleMenu = () => {
    setOpen(!open)
    setOpenSubmenu(false)
  }
  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu)
  }

  return (
    <>
      <>
        <Grid container className={classes.appBar} justify='space-between' alignItems='center'>
          <Grid item>
            <SynthetifyIconHorizontal className={classes.logo} />
          </Grid>
          <Grid item>
            <IconButton
              className={classes.menuButton}
              aria-label='open drawer'
              edge='end'
              onClick={toggleMenu}>
              {open ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={open} className={classes.submenuCollapse}>
          <List>
            <ListItem
              button
              className={classes.submenuButton}
              onClick={() => {
                toggleMenu()
              }}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              button
              className={classes.submenuButton}
              onClick={() => {
                toggleMenu()
              }}>
              <ListItemIcon>
                <Apps />
              </ListItemIcon>
              <ListItemText primary='Go to app' />
            </ListItem>
            <ListItem button onClick={toggleSubmenu} className={classes.submenuButton}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Resources' />
              {openSubmenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSubmenu} timeout='auto' unmountOnExit>
              <List component='div' disablePadding className={classes.subList}>
                {actions.map(action => (
                  <ListItem
                    button
                    className={classes.submenuButton}
                    onClick={() => {
                      action.action()
                      toggleMenu()
                    }}>
                    <ListItemText primary={action.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </>
      <Grid container className={classes.root} justify='space-between' alignItems='center'>
        <Grid item>
          <SynthetifyIconHorizontal className={classes.logo} />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid className={classes.marginButton} item>
              <MainButton name='Home' onClick={() => {}} />
            </Grid>
            <Grid className={classes.marginButton} item>
              <MenuButton name='Resources' actions={actions} />
            </Grid>
            <Grid className={classes.marginButton} item>
              <MainButton name='Go to app' onClick={() => {}} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default Header
