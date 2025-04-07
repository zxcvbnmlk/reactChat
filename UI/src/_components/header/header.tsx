import {Link} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import './header.scss'

export default function Header() {
    const [value, setValue] = React.useState(0);

    return (
        <header>

                    <div className="logo"><BeachAccessIcon/><Link to="/">React Chat</Link></div>

                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(_event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction
                            label="Home"
                            icon={<HomeIcon/>}
                            component={Link}
                            to="/"
                        />
                        <BottomNavigationAction
                            label="Chat"
                            icon={<ChatIcon/>}
                            component={Link}
                            to="/"
                        />
                        <BottomNavigationAction
                            label="Search"
                            icon={<SearchIcon/>}
                            component={Link}
                            to="/search"
                        />
                    </BottomNavigation>

        </header>
    )
}
