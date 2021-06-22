import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
//import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import SelectionReload from '../components/SelectionReload';
import Typography from "@material-ui/core/Typography";
import logoPaypal from '../images/logoPaypal.png';
import CardMedia from '@material-ui/core/CardMedia';
import { useReload } from "../hooks/useReload";
import imagenFondo from '../images/fondoReload.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    backgroundImage:  `url(${imagenFondo})`,
    backgroundSize: 'cover',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  media: {
    height: 140,
  },
}));

const client = [
  {
    title: 'Paypal',
    buttonText: 'Pagar con paypal',
    buttonVariant: 'contained',
    href: 'https://mega.nz/file/fAwg2JhL#5xOJ16GCpME6R-6SOGjY10ZZPmO6yyPJ4bluCCGg5js',
    image: logoPaypal
  }
];

const SilkRatio = [
  {
    title: 'eleccioón de silk 1 = 1$ a 100 = 100$',
    max: 100,
    min: 0,
    defaultValue: 0,
    mark: [
        {
          value: 0,
        },
      {
        value: 10,
      },
      {
        value: 20,
      },
      {
        value: 30,
      },
      {
        value: 40,
      },
      {
        value: 50,
      },
      {
        value: 60,
      },
      {
        value: 70,
      },
      {
        value: 80,
      },
      {
        value: 90,
      }
        ]
  },
  {
    title: 'eleccioón de silk 100 = 100$ a 1000 = 1000$',
    max: 1000,
    min: 100,
    defaultValue: 100,
    mark: [
      {
        value: 0,
      },
      {
        value: 100,
      },
      {
        value: 200,
      },
      {
        value: 300,
      },
      {
        value: 400,
      },
      {
        value: 500,
      },
      {
        value: 600,
      },
      {
        value: 700,
      },
      {
        value: 800,
      },
      {
        value: 900,
      }
    ]
  },
  {
    title: 'eleccioón de silk 1000 = 1000$ a 10000 = 10000$',
    max: 10000,
    min: 1000,
    defaultValue: 1000,
    mark: [
      {
        value: 0,
      },
      {
        value: 1000,
      },
      {
        value: 2000,
      },
      {
        value: 3000,
      },
      {
        value: 4000,
      },
      {
        value: 5000,
      },
      {
        value: 6000,
      },
      {
        value: 7000,
      },
      {
        value: 8000,
      },
      {
        value: 9000,
      }
    ]
  },
]

export default function Community() {
  const classes = useStyles();
  const [totalSilk, setTotalSilk] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const { makePayment } = useReload()

  const handleChangeAmount = (quantity) => {
    setTotalAmount(quantity/200)
    setTotalSilk(quantity)
  }

  const handlePaymentClick = async () => {
     const redirectPaypal = await makePayment(totalAmount)
     window.open(redirectPaypal, "_blank")
  }

  return (
      <React.Fragment>
        <CssBaseline />
          {/* End hero unit */}
          <Container maxWidth="xl" component="main" className={classes.main}>
            {SilkRatio.map((selection) => (
                <SelectionReload
                    title={selection.title}
                    max={selection.max}
                    min={selection.min}
                    defaultValue={selection.defaultValue}
                    mark={selection.mark}
                    handleChange={handleChangeAmount}
                />
            ))}
            <Grid>
              <Grid item xs={2} sm={4} md={2}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom>Total Silk : {totalSilk}</Typography>
                    <Typography gutterBottom>Total Silk a pagar : {totalAmount} $</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <br/>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={4}></Grid>
              {client.map((tier) => (
                  <Grid item key={tier.title} xs={12} sm={tier.title === 'Paypal' ? 12 : 6} md={4}>
                    <Card>
                      <CardMedia
                          className={classes.media}
                          image={logoPaypal}
                          title="Paypal"
                      />
                      <CardContent>
                      </CardContent>
                      <CardActions>
                        <Button
                            onClick={handlePaymentClick}
                            fullWidth
                            variant={tier.buttonVariant}
                            color="primary">
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
              ))}
            </Grid>
            <br/>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Container>
      </React.Fragment>
  )
}
