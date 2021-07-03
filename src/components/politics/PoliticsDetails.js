import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
    },
    media: {
        height: '100%',
    },
    box: {
        paddingTop: '10px',
        paddingBottom : '30px'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" alignItems="center" className={classes.box}>
                <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Politicas de survival-sro
                            </Typography>
                            <Divider/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>
                                    Queremos contarles que día a día nuestro equipo de desarrolladores de Survival-sro trabajan incansablemente para entregarles el mejor
                                    servicio, experiencia y jugabilidad dentro de esta nueva aventura.
                                    Como ya sabrán pueden acceder a nuestra versión beta de forma gratuita la cual
                                    seguirá de igual luego de nuestro lanzamiento a la versión full (es decir todos sus avances
                                    y logros obtenidos desde ya se conservarán)
                                    Sin embargo, para garantizar una jugabilidad completamente competitiva nos vemos obligados
                                    a regular muchas actividades dentro del game.
                                    Para explicar esto de la mejor manera utilizare las diferentes etapas del juego.
                                </p>
                                <h3>
                                    1) ETAPA DE LEVEL UP
                                </h3>
                                <p>
                                    Se permitirá el uso de bot´s en todas las áreas de los diversos mapas del game
                                    A exención de las zonas de reaparición de únicos.
                                    La consecuencia de uso deliberado de este programa para garantizar la Kill y dropeo de los únicos constara en 3 fases.
                                    Sorprendido por 1ra Vez: (obligado a entregar el dropeo del único (de lo contrario se le eliminará del inventario) advertencia verbal y multa de 2 a 5 Billones de Gold a criterio del GM) en caso de no poder pagar la muta tendrá 1 banner de 24 a 48 horas.
                                    Sorprendido por 2da Vez: (Deberá entregar el dropeo del único (de lo contario se le eliminaran toda acumulación del dropeo de su o sus cuentas Bot) y Recibirá un de 1 a 2 Semana de baneo a criterio del GM.
                                    Sorprendiendo por 3ra Vez: Recibirá un baneo inmediato de forma permanente tanto de sus cuentas como de su IP.
                                </p>
                                <h3>
                                    2) ETAPA DE JOP
                                </h3>
                                <p>
                                    Se permitirá el uso de bot´s en todas las áreas de los mapas en el game.
                                    Solo se permitirá el uso de (1 PERSONAJE JOP POR PC) Y 2 POR IP.
                                    todo Personaje o Guild que sea sorprendido (Mamuteando) (Auto Robándose) Recibirá un baneo de 7 a 14 días y será eliminado de los gremios perteneciente. Tener consideración que por este hecho no tendremos compasión de banear Guild´s completas. Sin derecho a reclamos ni apelaciones.
                                    No se permitirá el uso de ningún personaje en modo AFK para custodiar las rutas de tardeó.
                                    De ser sorprendido recibirá un Baneo de 24 a 72 Horas de las (CUENTAS + IP)
                                    El Espionaje de los Mercantiles, Mercas o Trader (es decir Utilizar un Personaje en modo trace detrás de una mercancía o trader será sancionado).
                                    Dicha sanción variara de acuerdo a la reincidencia de la persona en este hecho.
                                    1ra Vez Baneo de 24 a 72 Horas de las (Cuentas + IP)
                                    2do Vez Baneo de 7 a 14 días de las (cuentas + IP)
                                    3ra Vez Baneo de forma permanente y sin derecho de reclamos de TODAS LAS CUENTAS ASOCIADAS A LA IP.
                                </p>
                                <h3>
                                    3) ETAPA COMERCIALIZACION
                                </h3>
                                <p>
                                    Se permitirá una libre comercialización de ítems dentro del servidor la cual estaremos muy atentos para evitar todo tipo de robos o scarmer.
                                    Sin embargo, para conservar un mejor y mas seguro medio de transferencia habilitaremos un grupo de middlema’s o mediadores los cuales tendrán la obligación de garantizar que el Exchange o intercambio se realice de la forma más rápida y segura posible.
                                    Método de acción del middlema’s
                                    El intermediario o mediador tendrá que tener contacto directo (conversar) dentro de 1 party donde deberán estar solo 3 participantes 1) Vendedor 2) Comprador y 3) Mediador.
                                    Una vez dentro del Party el
                                </p>
                                <p>
                                    1) Vendedor deberá escribir en el CHAT PARTY (Item o Items a comercializar Y el precio de Venta.
                                </p>
                                <p>
                                    2) Comprador Deberá confirmar que los datos son correctos.
                                </p>
                                <p>
                                    3) Mediador Procede a recibir tanto los Items del 1) Vendedor y el pago del 2) Comprador Y Ejecutara la entrega a cada parte correspondiente.
                                </p>
                                    En caso de que la comercialización sea realizada por Dinero Real (transferencia PayPal o Silk)
                                <p>
                                    1) Vendedor deberá escribir en el CHAT PARTY (Item o Items a comercializar Y el precio de Venta.
                                </p>
                                <p>
                                    2) Comprador Deberá confirmar que los datos son correctos.
                                </p>
                                <p>
                                    3)Mediador Procederá a solicitar la entrega del 10% del Pago acordado en Silk como COMICION de los ítems.
                                </p>
                                <p>
                                    Posteriormente procederá a solicitar los itms del comprador y solicitar la realización del pago y entrega de numero de comprobante + capture del mismo enviado al correo de soporte de SurvivalSro como medio de respaldo (SurvivalsroSoporte@Gmail.com)
                                    Una vez confirmada el recibo del pago por parte del vendedor el mediador se procederá a la entrega de los Items al comprador.
                                </p>
                                <h3>
                                    4) ETAPA DE EVENTOS
                                </h3>
                                <h4>
                                    1. EVENTOS DE CAPTURE THE FLAG:
                                </h4>
                                <p>
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones al igual que en Battle Arena y en modo Jop.
                                    No se permitirá el uso de BOT ni el registro de más de 1 personaje por IP
                                    No se permitirá el modo AFK en ninguno de los eventos.
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase.
                                    Se prohíbe la distinción de miembros de 1 misma GUILD. (AMBOS EQUIPOS DEBERAN PELEAR ENTRE SI) de ser sorprendidos evitando la confrontación será descalificados ambos jugadores y recibirán un baneo de 4 a 8 horas a criterio del GM.
                                </p>
                                <h4>
                                    2. EVENTO BATTLE ARENA:
                                </h4>
                                <p>
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones al igual que en Battle Arena y en modo Jop.
                                    No se permitirá el uso de BOT ni el registro de más de 1 personaje por IP
                                    No se permitirá el modo AFK en ninguno de los eventos.
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase.
                                    Se prohíbe la distinción de miembros de 1 misma GUILD. (AMBOS EQUIPOS DEBERAN PELEAR ENTRE SI) de ser sorprendidos evitando la confrontación será descalificados ambos jugadores y recibirán un baneo de 4 a 8 horas a criterio del GM.
                                </p>
                                <h4>
                                    3. EVENTOS DE ROC / MEDUSA / HAOERIS / SETH
                                </h4>
                                <p>
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase. Por ejemplo: DANCING, TAMOUR, WARRIOR BUFFS, CLERIK BUFFS.
                                    Las entradas a los Portales estarán limitadas a 1 personaje por IP
                                    (TODOS LOS BUFFS ESTARAN PERMITIDOS)
                                </p>
                                <h4>
                                    4. FORTRESS WAR
                                </h4>
                                <p>
                                    Se prohíbe el uso de BOT´s en personajes segundarios para la aplicación de buff´s de ninguna clase. Por ejemplo: DANCING, TAMOUR, WARRIOR BUFFS, CLERIK BUFFS.
                                    Las entradas a los Gate estarán limitadas a 1 personaje por IP.
                                    Se prohíbe el uso de todas las dancing ni los tambour en sus distintas presentaciones.
                                    SANCIONES.
                                    De ser sorprendidos en estas actividades se infringirán 2 tipos de sanciones a criterio del GM
                                </p>
                                <p>
                                    1- BANEO de 24 a 72 Horas de la IP.
                                </p>
                                <p>
                                    2- BANEO indefinido de todas las cuentas asociadas a la IP.
                                </p>
                            </Typography>
                        </CardContent>
                </Card>
            </Box>

        </Fragment>

    );
}
