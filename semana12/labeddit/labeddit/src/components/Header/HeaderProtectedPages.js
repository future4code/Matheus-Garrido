import React from 'react';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { LogoImg } from './styled'
import { StyledToolbar } from './styled';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import LogoIcon from '../../assets/logo-icon.png'

export default function HeaderProtectedPages() {

    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const logoutUser = (history) => {
        localStorage.clear("token")
        goToLogin(history);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <StyledToolbar>
                    <div><Button onClick={() => goToFeed(history)}><LogoImg src={LogoIcon} /></Button></div>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            fontSize="large"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => logoutUser(history)}>Logout</MenuItem>
                        </Menu>
                    </div>

                </StyledToolbar>
            </AppBar>
        </div>
    );
}