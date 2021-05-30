import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkMatereial from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";


import imageLogo from '../images/logoweb.jpg'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
      media: {
        paddingTop: '7%', // 16:9
        background: 'transparent',
        backgroundRepeat: 'no-repeat',
        marginLeft: '30%'
      },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/SingUp'>
                    <Button size="small" variant="outlined">                    
                        Crear Cuenta                   
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
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <LinkMatereial
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </LinkMatereial>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
