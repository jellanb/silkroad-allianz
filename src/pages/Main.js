import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturePost';
// import Main from '../src/pages/Main';
// import post1 from '../src/utils/blog-post.1.md';
// import post2 from '../src/utils/blog-post.2.md';
// import post3 from '../src/utils/blog-post.3.md';

import imagenCenter from '../images/SRO-Preview.jpeg'
import imgCommingzoon from '../images/silkroadProximamente.jpg'
import imgUpdate from '../images/silkroadActualizacion.jpg'
import toolbarImage from '../images/fondoPergaino.jpg'
import headerButtonImage from '../images/headerButton.jpg'
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
        width: 160
    },
    container: {
        backgroundImage: `url(  ${toolbarImage})`,
        backgroundSize: 'cover',
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
}));



const sections = [
    { title: 'Recarga', url: 'reload' },
    { title: 'Descargas', url: 'download' },
    { title: 'Politicas', url: 'politics' }
];

const mainFeaturedPost = {
    title: '',
    description:
        "",
    image: imagenCenter,
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'Detalles de actualización',
        date: 'Junio 30',
        description:
            'Se mejoraron los NPC de posiones y se habilitaron los drops de items Egypt para los unicos de niveles mas altos, habilitados todos los eventos, Pruebas de carga del servidor para mas de 10.000 usuarios!',
        image: imgCommingzoon,
        imageText: 'Image Text',
    },
    {
        title: 'Detalles del juego',
        date: 'Junio 01',
        description: 'CAP: 110',
        description2: 'EXP: 35x',
        description3: 'Degree: 11',
        image: imgUpdate,
        imageText: 'Image Text',
    },
];


export default function Main(){
const classes = useStyles();
    return(
        <Fragment>
        <CssBaseline />
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link 
                    style={{ textDecoration: 'none', color: 'black' }} 
                    to={section.url}
                    key={section.title}
                    className={classes.toolbarLink}
                    >
                        <Button className={classes.root}>
                        
                        <b>{section.title}</b>
                        </Button>
                    </Link>                    
                ))}
            </Toolbar>
        
            <Container maxWidth="xl" className={classes.container}>                
                <main>
                    <MainFeaturedPost 
                    className={classes.mainGrid}
                    post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>            
            </Fragment>
    )
}

