import React, { Component } from 'react'
import DefaultCharacters from './defaultCharacters'
import SelectedCharacters from './selectedCharacters'
import StatsCalculator from './statsCalculator'
import DefaultCharactersClass from './defaultCharactersClass'
import { Grid, Paper } from '@mui/material'

export default class App extends Component {
    render() {
        // return (
        //     <main>
        //         <DefaultCharacters />
        //         {/* <DefaultCharactersClass/> */}
        //         <SelectedCharacters />
        //         <StatsCalculator />
        //     </main>
        // )

        return (
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <DefaultCharacters />
                    {/* <DefaultCharactersClass/> */}
                </Grid>
                <Grid item xs={3}>
                    <SelectedCharacters />
                </Grid>
                <Grid item xs={3}>
                    <StatsCalculator />
                </Grid>
            </Grid>
        )
    }
}