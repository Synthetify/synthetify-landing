import React from 'react'
import { Grid, IconButton, List, ListItem, Collapse, ListItemIcon } from '@material-ui/core'
import { useHistory } from 'react-router'
import MenuIcon from '@material-ui/icons/Menu'
import ListItemText from '@material-ui/core/ListItemText'
import { ExpandLess, ExpandMore, Apps } from '@material-ui/icons'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Home from '@material-ui/icons/Home'
import CloseIcon from '@material-ui/icons/Close'
import MenuButton from '@components/Header/MenuButton/MenuButton'
import MainButton from '@components/MainButton/MainButton'
import MenuOutlinedButton from '@components/Header/MenuOutlinedButton/MenuOutlinedButton'
import SynthetifyIconHorizontal from '@components/SynthetifyIconHorizontal/SynthetifyIconHorizontal'
import links from '@static/constants/links'
import useStyles from './style'

export interface IHeaderAction {
  name: string
  action: () => void
}

export interface IHeaderProps {
  actions: IHeaderAction[]
}

export const Header: React.FC<IHeaderProps> = ({ actions }) => {
  const classes = useStyles()
  const history = useHistory()

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
    <Grid className={classes.root}>
      <>
        <Grid container className={classes.appBar} justify='space-between' alignItems='center'>
          <Grid item onClick={() => history.push('/')}>
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
                history.push('/')
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
                window.open(links.app)
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
                    key={action.name}
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
      <Grid container className={classes.xlRoot} justify='space-between' alignItems='center'>
        <Grid item onClick={() => history.push('/')}>
          <SynthetifyIconHorizontal className={classes.logo} />
        </Grid>
        <Grid item>
          <Grid container alignItems='center' className={classes.buttonSpacing30}>
            <Grid className={classes.marginButton} item>
              <MainButton name='Home' onClick={() => history.push('/')} />
            </Grid>
            <Grid className={classes.marginButton} item>
              <MenuButton name='Resources' actions={actions} />
            </Grid>
            <Grid>
              <MenuOutlinedButton name='go to app' onClick={() => window.open(links.app)} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Header
