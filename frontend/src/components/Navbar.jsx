import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import profileIcon from '../images/loginimage.jpg'
import '../css/mui.css'
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(null);
    const login = false;

    const handleOpen = (event) => setOpen(event.currentTarget)
    const handleClose = () => setOpen(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // sx={{ background: '#87ceeb78' }} #ad08d299

    return (
        // background: '#1976d2e8' /
        <Toolbar sx={{ width: '96.9%', background: '#f8f9fa' }}>
            <span className="material-icons" style={{ color: 'black' }}>task_alt</span>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    flexGrow: 1,
                    marginLeft: '10px',
                    fontSize: '2em',
                    fontWeight: 800,
                    fontFamily: 'ui-serif',
                    color: 'black',
                    textDecoration: 'none',
                }}
            >
                Task Tracker
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0.6, mx: 2, color: 'black', fontSize: '1.18em', display: 'block', textTransform: 'capitalize' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>

            {login ?
                <Box sx={{ flexGrow: 0, top: '48px', }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpen} sx={{ p: 0, }}>
                            <Avatar alt="Remy Sharp" src={profileIcon} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        // sx={{ mt: '45px' }}
                        // style={{ top: '49px' }}
                        // id="menu-appbar"
                        anchorEl={open}
                        open={Boolean(open)}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                // padding: '12px 7px',
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleClose} >
                                <Typography sx={{ fontSize: '0.875rem' }} textAlign="center">{setting}</Typography>
                                <Divider />
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                :
                <Box sx={{ flexGrow: 0 }}>
                    <Button variant="contained" sx={{ paddingLeft:'23px',paddingRight:'23px',borderRadius:'17px', textTransform: 'capitalize', marginLeft: '20px', px: '16px' }} size='small' onClick={()=>navigate('/register')}>Register</Button>
                   <Button variant="contained" sx={{  paddingleft:'23px',paddingRight:'23px',borderRadius:'17px', textTransform: 'capitalize', marginLeft: '20px', px: '16px' }} size='small' onClick={()=>navigate('/login')}>Login</Button>
                </Box>
            }
        </Toolbar>
    );
}
export default Navbar