import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GiAbstract103, GiAmmoniteFossil } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';

const useStyles = makeStyles({
    main: {
        backgroundColor: 'black',
        flexGrow: 1,
    },
    barInfo: {
        background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
        borderRadius: 5,
    }
});

export default function FortesBarInfo() {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar position="static" className={classes.main}>
                <Toolbar variant="dense" className={classes.barInfo}>
                    <Grid container spacing={1}>
                        <Grid item xl={4} lg={4} xs={4}>

                            <Typography variant="h6" >
                                <GiAbstract103/> {'JG Fortess: OnlyFANS'}
                            </Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} xs={4}>
                            <Typography variant="h6" >
                                <GiAmmoniteFossil/> {'HT Fortess: Not occupied'}
                            </Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} xs={4}>
                            <Typography variant="h6" >
                               <FaTools/> {'Last unique kills: Coming zoom'}
                            </Typography>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Fragment>
    );
}
