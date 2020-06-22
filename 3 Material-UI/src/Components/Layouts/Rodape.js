import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
})

export default function CenteredTabs({ musculos, categoria, onSelect }) {
    const classes = useStyles()
    const [
        indice = categoria 
            ? musculos.findIndex(grupo => grupo === categoria) + 1
            : 0, 
        setValue] = React.useState(0)
    
    /*
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    
    const indice = categoria 
        ? musculos.findIndex(grupo => grupo === categoria) + 1
        : 0
    */

    const indiceSelecionado = (e, indice) => {
        onSelect(
            indice === 0 ? '' : musculos[indice - 1], 
            setValue()
        )
    }

  return (
    <Paper className={classes.root}>
        <Tabs
            value={indice}
            onChange={indiceSelecionado}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Todos" />
            {musculos.map(grupo => 
                <Tab 
                    key={grupo}
                    label={grupo}
                />
            )}
        </Tabs>
    </Paper>
  );
}