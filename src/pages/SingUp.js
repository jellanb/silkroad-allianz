import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Linck from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useSingUp } from '../hooks/useSingUP';
import Slide from "@material-ui/core/Slide";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Linck color="inherit" href="https://material-ui.com/">
        Your Website
      </Linck>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUp() {

  const [open, setOpen] = useState(false);

  const {
    handleEmailOnBlur,
    handlePasswordOnBlur,
    handleUsernameOnBlur,
    handlerLastNameOnBlur,
    user,
    createNewUser } = useSingUp();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async (e) => {
    const result = await createNewUser(e);
    console.log(result);
    if (user.isValid){
      setOpen(true);
    }
  }

  console.log(user)
  console.log(open)

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear cuenta
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Primer nombre"
                variant="outlined"
                required
                fullWidth
                id="Primer nombre"
                label="Primer nombre"
                autoFocus
                onBlur={handleUsernameOnBlur}
                helperText={ user.errorIsValid ? user.descName : '' }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Segundo nombre"
                label="Segundo nombre"
                name="Segundo nombre"
                autoComplete="lname"
                onBlur={handlerLastNameOnBlur}
                helperText={ user.errorLastname ? user.descLast : '' }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onBlur={handleEmailOnBlur}
                helperText={ user.errorEmail ? user.descEmail : '' }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onBlur={handlePasswordOnBlur}
                helperText={ user.errorPass ? user.descPass : '' }
              />
            </Grid>
          </Grid>
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Crear cuenta
          </Button>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Button
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Volver
          </Button>
          </Link>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>


      <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Felicitaciones has creado tu cuenta correctamene!"}</DialogTitle>
          <DialogContent>
          </DialogContent>
          <DialogActions>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Aceptar
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
