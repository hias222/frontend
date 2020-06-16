import { Grid } from "@material-ui/core";
import React from "react";
import { BaseResultInterface } from "../results/interfaces/BaseResultInterface";
import { ResultState } from "./state/ResultState";
import { FinishLaneComponent } from "./components/FinishLaneComponent";
import { HeaderEventHeatComponent } from "../live/components/HeaderEventHeatComponent";

import getSwimSytle from "../shared/utilities/getSwimStyles"

export class BaseResultComponent extends React.Component<BaseResultInterface, ResultState> {

    backend_url: string;
    constructor(props: BaseResultInterface) {
        super(props);
        var get_backend_url = process.env.REACT_APP_BACKEND_DIRECT === "true" ? "http://" + window.location.hostname + ":3000" : process.env.REACT_APP_BACKEND_URL
        this.backend_url = get_backend_url === undefined ? "http://" + window.location.hostname + ":3000" : get_backend_url
        this.state = {
            EventHeat: {
                name: '',
                eventnr: '0',
                heatnr: '0'
            },
            id: '0',
            lastid: '0',
            lanes: []
        }
    }


    componentDidMount() {
        console.log("DataState: connect to " + this.backend_url + "/api/heat/all");

        fetch(this.backend_url + "/api/heat/all", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            cache: 'no-cache'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var eventname = data.name !== null ? data.name : data.distance + "m " +  getSwimSytle(data.swimstyle);
                this.setState({
                    EventHeat: {
                        name: eventname,
                        heatnr: data.heat,
                        eventnr: data.event,
                    } ,
                    id: data.heatid,
                    lanes: data.lanes
                })
            })
    }

    render() {

        return (
            <div>
                <Grid container >
                    <HeaderEventHeatComponent
                    EventHeat={this.state.EventHeat}
                    />
                    <Grid item xs={12}>{this.state.EventHeat.name}</Grid>
                    <Grid item xs={12}>{this.state.id}</Grid>
                    {
                        this.state.lanes.map((lane, index) => (
                            <FinishLaneComponent
                                key={index}
                                lane={lane}
                                index={index}
                                displayMode={'result'}
                            />
                        ))
                    }
                    
                </Grid>
            </div >
        )
    }
}
