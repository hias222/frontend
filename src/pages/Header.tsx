import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveIcon from '@material-ui/icons/LiveTv';
import ListIcon from '@material-ui/icons/ListOutlined';
import HeatsIcon from '@material-ui/icons/Update';


export type HeaderState = {
    value: string;
};

export default class Header extends React.Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            value: window.location.pathname
        }
    }

    render() {
        console.log("path " + window.location.pathname + " - " + this.state.value)
        return (
            <BottomNavigation
                value={this.state.value}
                //showLabels
            >
                <BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />
                <BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} />
                <BottomNavigationAction href="/frontend/lists" label="List" value="/frontend/lists" icon={<ListIcon />} />
            </BottomNavigation>
        );
    }
}

