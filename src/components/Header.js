import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import headerButtonImage from '../images/headerButton.jpg'
import headerImage from '../images/fondoFooter.jpg'
import imageLogo from '../images/logocentro.png'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: grey,
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover'
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        backgroundImage: `url(${headerButtonImage})`,
        backgroundSize: 'cover',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    media: {
        paddingTop: '7%', // 16:9
        background: 'transparent',
        backgroundRepeat: 'no-repeat',
        marginLeft: '34%'
    },
    button: {
        backgroundColor: 'transparent'
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      }
}));


export default function Header(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
            <Link style={{ textDecoration: 'none', color: 'black'}} to='/SingUp'>
                    <Button size="small" 
                    variant="outlined"
                    className={classes.button}
                    >                    
                        <b>Crear Cuenta</b>
                    </Button>
                </Link>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}                    
                >                     
                        <CardMedia
                        align="center"
                            className={classes.media}
                            image={imageLogo}
                        />     
                    
                </Typography>
                {/* <Link style={{ textDecoration: 'none', color: 'black' }} to='/SingIn'>
                    <Button size="small" variant="outlined">                    
                        Iniciar Sesion                    
                    </Button>
                </Link> */}
            </Toolbar>            
        </React.Fragment>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};
