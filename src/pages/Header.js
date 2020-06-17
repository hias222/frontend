import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import ResultIcon from '@material-ui/icons/Update';

const useStyles = makeStyles({
    root: {
      width: "100%",
    },
  });

function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log("--" + newValue)
        setValue(newValue);
    };

    console.log(process.env.REACT_APP_ENV_VERSION)

    return (
        <BottomNavigation
            value={value} onChange={handleChange} className={classes.root}
            showLabels
        >
            <BottomNavigationAction href="/live" label="Live" value="live" icon={<LiveIcon />} />
            <BottomNavigationAction href="/search" label="Search" value="search" icon={<SearchIcon />} />
            <BottomNavigationAction href="/results" label="Results" value="results" icon={<ResultIcon />} />
        </BottomNavigation>
    );
}
export default Header
