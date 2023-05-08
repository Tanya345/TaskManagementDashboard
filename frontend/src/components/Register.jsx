import React, { useState } from 'react'
import logo from '../images/loginimage.jpg'
import {Avatar, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Tooltip, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import UndoIcon from '@mui/icons-material/Undo';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '', email: '', phone: '', password: '', cpassword: ''
    })
    // let {name,email, phone,password,confirmPassword} = user
    const [showCPassword, setShowCPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = () => setShowPassword((show) => !show);
    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser(user => ({ ...user, [name]: value }))
        console.log(user)
    };
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    //   const handleClick = (newState) => () => {
    //     setState({ open: true, ...newState });
    //   };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRegister = async () => {
        // const { name, email, phone, password, cpassword } = user;
        // const response = await fetch("/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ name, email, phone, password, cpassword })
        // });
        // const data = await response.json()
        // if (data.status = 422) {
            setText('bhhbebhnjnjn')
        setOpen(true)
        // }
    }

    return (
        <>
            {/* <Navbar /> */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '91.2vh', background: '#f8f9fa', width: '98%', justifyContent: 'center', padding: '15px', alignItems: 'center' }}>
                <div style={{ boxShadow: '5px 5px 6px -2px', background: 'white', height: '80%', display: 'flex', borderRadius: '10px', width: '50%', alignItems: 'center' }}>
                    <div style={{ width: '50%', background: '#0000ffa6', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h4 style={{ color: 'white' }}>Hello Again</h4>
                        <img src='https://www.designeatrepeat.com/wp-content/uploads/printable-to-do-list-680x803.png' alt="" height={200} width={200} />
                    </div>
                    <div style={{ display: 'flex', height: '100%', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                        <Tooltip title="Go To Home">
                            <IconButton onClick={() => navigate('/')} sx={{ p: 2, alignSelf: 'flex-end', height: '8%', padding: '4px' }}>
                                <UndoIcon sx={{ color: '#0000ffa6' }} />
                            </IconButton>
                        </Tooltip>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '92%', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <img src={logo} alt="" height={50} width={50} />
                            <h4 style={{ margin: '8px 0px' }}>Hello, Welcome Back</h4>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
                                <Typography color="text.secondary" fontWeight="600">Name</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Your Name'
                                    name='name'
                                    size='small'
                                    value={user.name}
                                    onChange={onChange}
                                    sx={{ width: '100%', mb: '7px', fontSize: '0.8em' }}
                                />
                                <Typography color="text.secondary" fontWeight="600">Email</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Your Email'
                                    name='email'
                                    size='small'
                                    value={user.email}
                                    onChange={onChange}
                                    sx={{ width: '100%', mb: '7px', fontSize: '0.8em' }}
                                // InputProps={{
                                //   startAdornment: (
                                //     <InputAdornment position="start">
                                //       <MailIcon />
                                //     </InputAdornment>
                                //   ),
                                // }}
                                />
                                <Typography color="text.secondary" fontWeight="600">Phone</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Your Phone'
                                    name='phone'
                                    size='small'
                                    value={user.phone}
                                    onChange={onChange}
                                    sx={{ width: '100%', mb: '7px', fontSize: '0.8em' }}
                                />
                                <Typography color="text.secondary" fontWeight="600">Password</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='Enter Your Password'
                                    size='small'
                                    name='password'
                                    value={user.password}
                                    sx={{ width: '100%', mb: '7px', fontSize: '0.8em' }}
                                    onChange={onChange}
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Typography color="text.secondary" fontWeight="600">Confirm Password</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='Confirm Your Password'
                                    size='small'
                                    name='confirmPassword'
                                    value={user.cpassword}
                                    sx={{ width: '100%', mb: '7px', fontSize: '0.8em' }}
                                    onChange={onChange}
                                    type={showCPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowCPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showCPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button variant='contained' sx={{ marginBottom: '10px', marginTop: '10px', background: '#0000ffa6' }} onClick={handleRegister}>Register</Button>
                                <span style={{ fontSize: '0.9em', textAlign: 'center' }}>Already a User? <Link to='/login'>Login Now</Link></span>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar anchorOrigin={{ vertical:'top', horizontal:'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>

        </>
    )
}

export default Register
