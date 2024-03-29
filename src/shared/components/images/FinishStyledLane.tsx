import React from "react";
import { LaneData } from "../../interfaces/lanedatainterface";
import LaneNumberFinish from "./LaneNumberFinish";
import getEntryTime from "../../utilities/getEntryTime";
import { Grid, Hidden } from "@material-ui/core";

export default class FinishStyledLane extends React.Component<LaneData, {}> {

    box_height: number;

    constructor(props: LaneData) {
        super(props)
        this.box_height = process.env.REACT_APP_BOX_HEIGHT !== undefined ? Number(process.env.REACT_APP_BOX_HEIGHT) : 50
    }

    checkName() {

        if (this.props.swimmer.name !== undefined && this.props.swimmer.name !== null) {
            let namelength = 20;
            let sizeName = this.props.swimmer.name.length;
            let sizeLastName = (this.props.swimmer.firstName !== undefined) ? this.props.swimmer.firstName.length : 0

            if (sizeName > (namelength - 2)) {
                console.log("short name")
                return this.props.swimmer.name.substr(0, (namelength - 2));
            }

            if (sizeName + sizeLastName > namelength) {
                return this.props.swimmer.name + " " + this.props.swimmer.firstName?.substr(0, 1) + ".";
            }

            let name = this.props.swimmer.name + " " + this.props.swimmer.firstName


            return name
        } else {
            return "NN"
        }
    }

    render() {
        let correctName = this.checkName();

        return <Grid container item xs={12} sm={12} md={12}>
            <Grid item xs={3} sm={2} md={2}>
                <LaneNumberFinish
                    laneNumber={this.props.lane}
                    place={this.props.place}
                />
            </Grid>
            <Grid container item xs={6} sm={8} md={8} spacing={0}>
                <Grid item xs={12} sm={7} md={3}>{correctName}</Grid>
                <Hidden xsDown>
                    <Grid item sm={5} md={2}>{this.props.swimmer.birthyear}</Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={5}>{this.props.swimmer.clubname}</Grid>
                <Hidden smDown>
                    <Grid item md={2}>{getEntryTime(this.props.entrytime)}</Grid>
                </Hidden>
            </Grid>
            <Grid item xs={3} sm={2} md={2} text-align={"right"} >
               <b>{this.props.finishtime}</b>
            </Grid>
        </Grid>;

    }
}
