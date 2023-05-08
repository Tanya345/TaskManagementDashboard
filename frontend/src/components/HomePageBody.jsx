import React from 'react'
import { Button } from '@mui/material'
import bg from '../images/to do.gif'
import { useNavigate } from 'react-router-dom'

const HomePageBody = () => {
    const navigate = useNavigate()

    // backgroundColor: '#000000d1',
    // #ffffffb5
    return (
        <div style={{ height: '91.2vh', width: '100vw', display: 'flex',background:'white', justifyContent: 'space-around' }}>
            <div style={{ width: '50%', alignSelf: 'center', color: 'black', padding: '10px 62px' }}>
                <h5 style={{ fontSize: '3rem', fontWeight: 400, fontFamily: 'ui-serif', margin: '23px', textAlign: 'initial' }}>Organize your notes, daily tasks checklists, all in one place </h5>
                <p style={{ fontWeight: '420', margin: '23px', color: 'black', textAlign: 'justify' }}>You can create tasks and subtasks and schedule them as single-time, or recurring tasks. Through checklists, you can list down the things to be done. Moreover, you can create projects and associate multiple tasks under them. You can organize, prioritize tasks and monitor task status.</p>
                <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '23px' }}>
               <Button variant='contained' color='primary' onClick={()=> navigate('/login')}>Get started - It's Free</Button>
                </div>
            </div>
            <div style={{ width: '50%', alignSelf: 'end', textAlign: 'end' }}>
                <img src={bg} alt="" height={500} width={700} />
            </div>

        </div>
    )
}

export default HomePageBody
