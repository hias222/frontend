import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import { BaseResultInterface } from "./interfaces/BaseResultInterface";
import { ResultState } from "./state/ResultState";
import { FinishLaneComponent } from "./components/FinishLaneComponent";
import { HeaderEventHeatComponent } from "../live/components/HeaderEventHeatComponent";

import BackIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ForwardIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';

import getSwimSytle from "../shared/utilities/getSwimStyles"

export class BaseHeatsComponent extends React.Component<BaseResultInterface, ResultState> {

    backend_url: string;
    constructor(props: BaseResultInterface) {
        super(props);
        var get_backend_url = process.env.REACT_APP_BACKEND_DIRECT === "true" ? "http://" + window.location.hostname + ":3000" : process.env.REACT_APP_WS_DATAHUB
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
        let apiurl;

        if (this.props.id === undefined) {
            apiurl = this.backend_url + "/api/heat/all"
        } else {
            apiurl = this.backend_url + "/api/heat/search/" + this.props.id
        }

        console.log("DataState: connect to " + apiurl);

        fetch(apiurl, {
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
                if (data.lanes === null || data.lanes === undefined) {
                    data.lanes = []
                    console.log('empty lanes')
                }
                var eventname = data.name !== null ? data.name : data.distance + "m " + getSwimSytle(data.swimstyle);
                this.setState({
                    EventHeat: {
                        name: eventname,
                        heatnr: data.heat,
                        eventnr: data.event,
                    },
                    id: data.heatid,
                    lanes: data.lanes,
                    lastid: data.lastid,
                    nextid: data.nextid,
                    runtime: data.creation_date
                })
            })
    }

    render() {

        let baseurl = '/heats'
        let backurl = '/heats/' + this.state.lastid
        let forwardurl = this.state.nextid !== undefined && this.state.nextid !== null ? '/heats/' + this.state.nextid : baseurl

        var forwardisabled = this.state.nextid !== undefined && this.state.nextid !== null ? false : true
        var d = this.state.runtime !== undefined ? new Date(this.state.runtime) : Date.now()

        const hour = new Intl.DateTimeFormat('de', { hour: '2-digit', minute: 'numeric', second: 'numeric' }).format(d)

        // {d.toLocaleString()}
        return (
            <div>
                <Grid container >
                    <Grid item xs={12} >{hour}</Grid>
                    <HeaderEventHeatComponent
                        EventHeat={this.state.EventHeat}
                    />
                    <Grid item xs={12}>{this.state.EventHeat.name}</Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <IconButton aria-label="back" href={backurl}>
                            <BackIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton aria-label="base" href={baseurl}>
                            <RefreshIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton disabled={forwardisabled} aria-label="forward" href={forwardurl}>
                            <ForwardIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>
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
