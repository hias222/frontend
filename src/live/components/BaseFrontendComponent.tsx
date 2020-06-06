import React from "react";
import { StartStopComponent } from "./StartStopComponent";
import { BaseFrontendInterface } from "../interfaces/BaseFrontendInterface";
import { HeaderEventHeatComponent } from "./HeaderEventHeatComponent";
import { SingleLaneComponent } from "./SingleLaneComponent";
import { Grid } from "@material-ui/core";

export class BaseFrontendComponent extends React.Component<BaseFrontendInterface, {}> {

    componentDidUpdate(prevProps: BaseFrontendInterface) {

        if (prevProps.lanes !== this.props.lanes) {
            console.log("update BaseFrontendStaticComponent lanes")
            //console.log("update " + JSON.stringify(this.props.lanes))
        }
    }

    render() {

        return (
            <div>
                <HeaderEventHeatComponent
                    EventHeat={this.props.EventHeat}
                />
                <StartStopComponent
                    startdelayms={this.props.startdelayms}
                    EventHeat={this.props.EventHeat}
                    runningTime={this.props.runningTime}
                />
                <Grid container >
                    {
                        this.props.lanes.map((lane, index) => (
                            <SingleLaneComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={this.props.displayMode}
                            />
                        ))
                    }
                </Grid>

            </div >
        )
    }
}
