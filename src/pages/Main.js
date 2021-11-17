import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid';
import imagenFond5 from '../images/fondoMain5.png'
import imagenFond2 from '../images/fondoMain6.png'
import imagenFond3 from '../images/fondoMain7.jpg'
import imagenFond4 from '../images/fondoMain8.png'
import { Container } from '@material-ui/core';
import DownloadBox from '../components/main/DownloadBox';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'black'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    rootCard: {
        backgroundSize: 'cover'
    },
}));


export default function Main(){
    const classes = useStyles();
    var items = [
        {imagen: imagenFond2},
        {imagen: imagenFond3},
        {imagen: imagenFond4},
        {imagen: imagenFond5},
    ]

    return(
        <Fragment>
        <CssBaseline />
            <Container maxWidth='xl' className={classes.container}>
                <br/>
                <Carousel>
                   {
                       items.map((item, index) => <Item key={index} item={item}/>)
                   }
               </Carousel>
                <Grid container>
                    <Grid item xl={12} lg={12} xs={12}>
                        <DownloadBox />
                    </Grid>
                </Grid>
                <br/>
            </Container>
            </Fragment>
    )

    function Item({item})
    {
        return(
            <Grid>
                <Grid item xl={12}>
                    <Card className={classes.rootCard}>
                        <CardMedia
                        image={item.imagen}
                        className={classes.media}
                        />
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

