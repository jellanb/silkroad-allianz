import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Discord from '@material-ui/icons/Chat';
import Sidebar from '../components/Siderbar';
import Grid from '@material-ui/core/Grid';

import footerImage from '../images/fondoFooter.jpg'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                survivalsro.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {        
        padding: theme.spacing(6, 0),
        backgroundImage: `url(${footerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
}));

const sidebar = {
    social: [
        { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/survivalsro/?hl=es-la' },
        { name: 'WhatsApp', icon: WhatsApp, url: 'https://chat.whatsapp.com/FUoXQdPsizjKZFv3UWgg3Q' },
        { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/profile.php?id=100069522990158&viewas=100000686899395' },
        { name: 'Discord', icon: Discord, url: 'https://discord.gg/JUKC5dkF' },
    ],
};

export default function Footer(props) {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item lg={4}>

                </Grid>
            <Grid item lg={4}>
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Copyright />
                </Grid>
                <Grid item lg={4}>
                    <Sidebar
                    social={sidebar.social}
                    />
                </Grid>                        
            </Grid>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
