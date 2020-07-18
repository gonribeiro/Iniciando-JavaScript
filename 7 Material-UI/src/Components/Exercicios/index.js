import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PainelEsquerdo from './PainelEsquerdo'
import PainelDireito from './PainelDireito'

const useStyles = makeStyles((theme) => ({
    root: {
         flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        height: 500,
        overflowY: 'auto',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}))

export default function CenteredGrid({ 
    exercicios, 
    categoria, 
    onSelect, 
    exercicio: {
        id, 
        titulo = 'Bem vindo!', 
        descricao = 'Por favor escolha um exercício da lista ao lado.'
    } 
}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {exercicios.map(([grupo, exercicios]) => 
                            !categoria || categoria === grupo
                            ?   <Fragment key={grupo}>
                                    <Typography
                                        variant="h5"
                                        style={{textTransform: 'capitalize'}}
                                    >
                                        {grupo}
                                        <List component="ul" aria-label="secondary mailbox folders">
                                            {exercicios.map(({ id, titulo }) =>
                                                <ListItem 
                                                    key={id}
                                                    button
                                                    onClick={() => onSelect(id)}
                                                >
                                                    <ListItemText primary={titulo} />
                                                </ListItem>
                                            )}
                                        </List>
                                    </Typography>
                                </Fragment>
                            : null
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography
                            variant="h4"
                        >
                            {titulo}
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{ margintop: 50 }}
                        >
                            {descricao}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

/*<PainelEsquerdo classes={classes}/>
<PainelDireito classes={classes}/>*/