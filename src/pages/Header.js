import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import DownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log("--" + newValue)
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value} onChange={handleChange} className={classes.root}
            showLabels
        >
            <BottomNavigationAction href="/live" label="Live" value="live" icon={<LiveIcon />} />
            <BottomNavigationAction href="/search" label="Search" value="search" icon={<SearchIcon />} />
            <BottomNavigationAction href="/download" label="Downloads" value="download" icon={<DownloadIcon />} />
        </BottomNavigation>
    );
}
export default Header
