import { Grid } from "@material-ui/core";
import React from "react";
import { BaseResultInterface } from "../results/interfaces/BaseResultInterface";
import { ResultState } from "./state/ResultState";

export class BaseResultComponent extends React.Component<BaseResultInterface, ResultState> {

    backend_url: string;
    constructor(props: BaseResultInterface) {
        super(props);
        var get_backend_url = process.env.REACT_APP_BACKEND_DIRECT === "true" ? "http://" + window.location.hostname + ":3000" : process.env.REACT_APP_BACKEND_URL
        this.backend_url = get_backend_url === undefined ? "http://" + window.location.hostname + ":3000" : get_backend_url
        this.state = {
            name: '',
            event: '0',
            heat: '0',
            id: '0',
            lastid: '0'
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
                this.setState({
                    name: data.competition,
                    heat: data.heat,
                    event: data.event,
                    id: data.heatid
                })
            })
    }

    render() {

        return (
            <div>
                <Grid container >
                    <Grid item xs={5} >{this.state.name}</Grid>
                    <Grid item xs={2} >{this.state.event}</Grid>
                    <Grid item xs={2} >{this.state.heat}</Grid>
                    <Grid item xs={3}>{this.state.id}</Grid>
                </Grid>
            </div >
        )
    }
}
