import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Menu } from '@material-ui/icons';
import Logo from '../Logo/Logo';
import Collapsibles from '../Collapisble/Collapsibles/Collapsibles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    background: 'white',
    overflowX: "hidden",
    boxShadow: "none"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    overflowX: "hidden"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: "10px"
  }
}));

const TransitionRight = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

// const TransitionLeft = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="left" ref={ref} {...props} />;
// });

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton className={classes.button} onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={TransitionRight}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Logo width={60} />
            <IconButton autoFocus color="default" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Divider />
        <Collapsibles />
      </Dialog>
    </div>
  );
}