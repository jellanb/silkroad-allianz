import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import iconMain from '../../../images/logocentro2.png';
import ControlAccount from './ControlAccount';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: '#1B1919',

    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    title: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
    iconMain: {
        "& > *": {
          margin: theme.spacing(1),
          width: theme.spacing(24),
          height: theme.spacing(8),
          maxWidth: 345,
        },
        backgroundColor: '#1B1919',
    },
    cardMediaIconMain: {
        backgroundColor: '#1B1919',
    }
}));


export default function Header(props) {
    const classes = useStyles();


    return (
        <React.Fragment>
             <AppBar position="static" className={classes.toolbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Card className={classes.iconMain}>
                                <CardMedia className={classes.cardMediaIconMain} image={iconMain} />
                        </Card>
                    </Typography>
                    <ButtonGroup groupedContainedSecondary='contained' variant="text" color="inherit" aria-label="text primary button group">
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                                Inicio
                            </Link>
                        </Button>
                        {/* <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                                Ranking
                            </Link>
                        </Button> */}
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/download'>
                                Download
                            </Link>
                        </Button>
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/politics'>
                                Politicas
                            </Link>
                        </Button>
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/Reload'>
                                Recarga
                            </Link>
                        </Button>
                        <Button>
                            <Link style={{ textDecoration: 'none', color: 'white'}} to='/SingUp'>
                                Crear Cuenta
                            </Link>
                        </Button>
                        <ControlAccount/>
                    </ButtonGroup>
                </Toolbar>
             </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};
