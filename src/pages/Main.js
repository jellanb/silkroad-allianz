// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturePost';
// import Main from '../src/pages/Main';
// import Sidebar from '../src/components/Siderbar';
import Footer from '../components/Footer';
// import post1 from '../src/utils/blog-post.1.md';
// import post2 from '../src/utils/blog-post.2.md';
// import post3 from '../src/utils/blog-post.3.md';

import imagenCenter from '../images/SRO-Preview.jpeg'
import imgCommingzoon from '../images/silkroadProximamente.jpg'
import imgUpdate from '../images/silkroadActualizacion.jpg'
import { Fragment } from 'react';

// const useStyles = makeStyles((theme) => ({
//     mainGrid: {
//         marginTop: theme.spacing(3),
//     },
// }));

const sections = [
    { title: 'noticias', url: '#' },
    { title: 'comunidad', url: '#' },
    { title: 'descargar', url: 'download' },
    { title: 'Politicas', url: '#' }
];

const mainFeaturedPost = {
    title: 'Bienvenido a survival sro',
    description:
        "",
    image: imagenCenter,
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'Proximos avances',
        date: 'Junio 30',
        description:
            'Las siguientes actualizaciones tienen que ver con la información que sera mostrada el este sitio web donde abra noticias y encuestas de como podrian cambiar la jugabilidad',
        image: imgCommingzoon,
        imageText: 'Image Text',
    },
    {
        title: 'Avances del juego',
        date: 'Junio 30',
        description:
            'Estaremos comentando los avances y mejoras que se les esten haciendo al servidor con la intención de recibir comentarios de que tan buenos fueron las mejoras',
        image: imgUpdate,
        imageText: 'Image Text',
    },
];

// const posts = [post1, post2, post3];

// const sidebar = {
//     title: 'About',
//     description:
//         'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//     archives: [
//         { title: 'March 2020', url: '#' },
//         { title: 'February 2020', url: '#' },
//         { title: 'January 2020', url: '#' },
//         { title: 'November 1999', url: '#' },
//         { title: 'October 1999', url: '#' },
//         { title: 'September 1999', url: '#' },
//         { title: 'August 1999', url: '#' },
//         { title: 'July 1999', url: '#' },
//         { title: 'June 1999', url: '#' },
//         { title: 'May 1999', url: '#' },
//         { title: 'April 1999', url: '#' },
//     ],
//     social: [
//         { name: 'GitHub', icon: GitHubIcon },
//         { name: 'Twitter', icon: TwitterIcon },
//         { name: 'Facebook', icon: FacebookIcon },
//     ],
// };

export default function Main(){
// const classes = useStyles();
    return(
        <Fragment>
        <CssBaseline />
            <Container maxWidth="lg">
                <Header title={imagenCenter} sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    {/* <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="From the firehose" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid> */}
                </main>
            </Container>
            <Footer title="Silkroad survival" description="Servidor privado" />
            </Fragment>
    )
}

