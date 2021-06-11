import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import PoliticsImage from '../images/silkroad3.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(1),
      },
      dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
      },
      dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
      },
  container: {
      backgroundImage:  `url(  ${PoliticsImage})`,
      backgroundSize: 'cover',
      marginBottom: theme.spacing(-2),
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
      <Fragment>
    <CssBaseline />
    <Container maxWidth='xl' className={classes.container}>
      <Container maxWidth="xs">
      <List className={classes.root}>
      <ListItem>
        <ListItemText primary="GAP" secondary="110" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Exp" secondary="x35" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Degree" secondary="11" />
      </ListItem>
      <Divider component="li"/>
      <ListItem>
        <ListItemText primary="Silk Free" secondary="No" />
      </ListItem>
      <Divider component="li" /> 
      <ListItem>
        <ListItemText primary="Magic POP" secondary="Si" />
      </ListItem>
      <Divider component="li" />  
      <ListItem>
        <ListItemText primary="Battle Arena" secondary="Si" />
      </ListItem>
      <Divider component="li" />    
      <ListItem>
        <ListItemText primary="Capture Flag" secondary="Si" />
      </ListItem>
      <Divider component="li" /> 
      <ListItem>
        <ListItemText primary="Coins" secondary="Si" />
      </ListItem>      
    </List>

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
    </Container>
    </Fragment>
  );
}
