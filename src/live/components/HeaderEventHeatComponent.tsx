import React from "react";
import { eventHeat } from "../types/EventHeat";
import { Grid } from "@material-ui/core";

import classnames from 'classnames';
interface HeaderEventHeatInterface {
    EventHeat: eventHeat;
}

export class HeaderEventHeatComponent extends React.Component<HeaderEventHeatInterface,{}>{

    render() {
        let heatevent = classnames('heatevent');
        return (
            <Grid container className={heatevent}>
                <Grid item xs={3}>Wettkampf: {this.props.EventHeat.eventnr}</Grid>
                <Grid item xs={3}>Lauf: {this.props.EventHeat.heatnr}</Grid>
            </Grid>
        )
    }

}