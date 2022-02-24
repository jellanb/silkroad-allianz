import React, {Fragment, useState} from 'react';
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
import ServerInfo from '../components/main/Serverinfo';
import FortesBarInfo from '../components/main/FortessBarInfo';
import BackDropPayment from "../components/common/progress/BackDropPayment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'black',
    },
    media: {
        height: 0,
        paddingTop: '70.25%', // 16:9
    },
    rootCard: {
        backgroundSize: 'cover'
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main(){
    const classes = useStyles();
    const [load, setLoad] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    var items = [
        {imagen: imagenFond2},
        {imagen: imagenFond3},
        {imagen: imagenFond4},
        {imagen: imagenFond5},
    ]

    const handleClose = async () => {
        setOpenDialog(false);
    }

    return(
        <Fragment>
        <CssBaseline />
        <FortesBarInfo setLoad={setLoad} setOpenDialog={setOpenDialog} />
            <Container maxWidth='xl' className={classes.container}>
                <br/>
                <Grid container spacing={1}>
                    <Grid item xl={2} lg={3} xs={12}>
                        <ServerInfo/>
                        <DownloadBox />
                    </Grid>
                    <Grid item xl={9} lg={9} xs={12}>
                        <Carousel>
                            {
                                items.map((item, index) => <Item key={index} item={item}/>)
                            }
                        </Carousel>
                    </Grid>
                </Grid>
                <br/>
            </Container>
            <div>
                <Dialog
                    open={openDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{'please reload page!'}</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Aceptar
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
            <BackDropPayment open={load} />
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

