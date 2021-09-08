import React from 'react';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { LogoImg } from './styled'
import { StyledToolbar } from './styled';
import { goToLogin } from '../../routes/coordinator';
import LogoIcon from '../../assets/logo-icon.png'

export default function HeaderUnprotectedPage() {

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
                    <div><Button onClick={() => goToLogin(history)}><LogoImg src={LogoIcon} /></Button></div>
                </StyledToolbar>
            </AppBar>
        </div>
    );
}