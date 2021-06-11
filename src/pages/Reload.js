import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Deshabilitada temporalmente
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Esta funcionalidad esta en desarrollo por parte de nuestro equipo de developers.'}
          {'Podras recargar silks para comprar cualquier item que tenga este metodo de venta en el server.'}
        </Typography>
        <Typography variant="body1">Funcionalidad desactivada temporalmente.</Typography>
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
      </Container>
    </div>
  );
}