import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid';
import imagenFond from '../images/fondoMain1.jpg'
import imagenFond2 from '../images/fondoMain2.jpg'
import imagenFond3 from '../images/fondoMain3.jpg'
import { Container } from '@material-ui/core';
import imagenDownload  from '../images/sroDownload.png';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'black'
    },
    root: {
        "& > *": {
          marginLeft: theme.spacing(60),
          width: theme.spacing(200),
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaDownload: {
        height: 240,
    },
    rootCard: {
        maxWidth: 2000,
        height: theme.spacing(90),
    },
    Card: {
        maxWidth: 345,
        backgroundColor: 'transparent',
    },
}));


export default function Main(){
    const classes = useStyles();
    var items = [
        {imagen: imagenFond},
        {imagen: imagenFond2},
        {imagen: imagenFond3}
    ]

    return(
        <Fragment>
        <CssBaseline />      
            <Container maxWidth='xl' className={classes.container}>
                <Carousel>
                   {
                       items.map((item, index) => <Item key={index} item={item}/>)
                   }
               </Carousel>
               <div className={classes.root}>
               <Card className={classes.Card} style={{ border: "none", boxShadow: "none" }}>
                <CardActionArea>
                <Link to='/download' >
                <CardMedia
                        className={classes.mediaDownload}
                        image={imagenDownload}
                        />
                </Link>                        
                </CardActionArea>                   
                </Card> 
               </div>
               
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

