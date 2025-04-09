import {Link, useLocation} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import './header.scss'

enum Pages {
    "" = 0,
    chat = 1,
    search = 2
}

export default function Header() {
    const location = useLocation().pathname.split('/')[1];
    const [page, setPage] = React.useState(Pages[location as keyof typeof Pages]);
    return (
        <header>
                    <div className="logo"><BeachAccessIcon/><Link to="/">React Chat</Link></div>
                    <BottomNavigation
                        showLabels
                        value={page}
                        onChange={(_event, newPage) => {
                            setPage(newPage);
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
                            to="/chat"
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
