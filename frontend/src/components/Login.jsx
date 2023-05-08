import React, { useState } from 'react'
import Navbar from './Navbar'
import loginImage from '../images/loginfimage.png'
import logo from '../images/loginimage.jpg'
import { Avatar, Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Tooltip, Typography } from '@mui/material'
import { CheckBox, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import UndoIcon from '@mui/icons-material/Undo';
import MailIcon from '@mui/icons-material/Mail';
import fb from '../images/fb.png'
import google from '../images/google.png'
import github from '../images/github.png'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => setShowPassword((show) => !show);
  const onPasswordChange = () => setPassword((pass) => pass);
  const onUsernameChange = () => setUserName((username) => username)

  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ display: 'flex', height: '91.2vh', background: '#f8f9fa', width: '98%', justifyContent: 'center', padding: '15px', alignItems: 'center' }}>
        <div style={{ boxShadow: '5px 5px 6px -2px', background: 'white', height: '80%', display: 'flex', borderRadius: '10px', width: '50%', alignItems: 'center' }}>
          <div style={{ width: '50%', background: '#0000ffa6', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ color: 'white' }}>Hello Again</h4>
            <img src='https://www.designeatrepeat.com/wp-content/uploads/printable-to-do-list-680x803.png' alt="" height={220} width={220} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column',height:'100%', width: '50%', alignItems: 'center' }}>
            <Tooltip title="Go To Home">
              <IconButton onClick={() => navigate('/')} sx={{ p: 2, alignSelf: 'flex-end', height:'8%',padding:'4px'}}>
                <UndoIcon sx={{ color: '#0000ffa6' }} />
              </IconButton>
            </Tooltip>
            <div style={{display: 'flex',flexDirection:'column',height:'92%',alignItems:'center',justifyContent:'space-evenly', width:'100%'}}>
            <img src={logo} alt="" height={50} width={50} />
            <h4 style={{ margin: '8px 0px' }}>Hello, Welcome Back</h4>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
              <Typography color="text.secondary" fontWeight="600">User Name</Typography>
              <TextField
                fullWidth
                placeholder='Enter Your Email'
                size='small'
                value={username}
                onChange={onUsernameChange}
                sx={{ width: '100%', mb: '15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography color="text.secondary" fontWeight="600">Password</Typography>
              <TextField
                fullWidth
                placeholder='Enter Your Password'
                size='small'
                value={password}
                sx={{ width: '100%', mb: '10px' }}
                onChange={onPasswordChange}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel control={<Checkbox />} label={<Typography variant="body2" sx={{ fontSize: '0.9em' }}>Remember Me</Typography>} />
              <Button variant='contained' sx={{ marginBottom: '10px', background: '#0000ffa6' }}>Login</Button>
              <span style={{ fontSize: '0.9em', textAlign: 'center' }}>New User? <Link to='/register'>Create New Account</Link></span>
              <p style={{ textAlign: 'center' }}>Or</p>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <IconButton sx={{ p: 0, }}>
                  <Avatar alt="Remy Sharp" src={fb} />
                </IconButton>
                <IconButton sx={{ p: 0, }}>
                  <Avatar alt="Remy Sharp" src={google} />
                </IconButton>
                <IconButton sx={{ p: 0, }}>
                  <Avatar alt="Remy Sharp" src={github} />
                </IconButton>
              </div>
            </Box>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Login
