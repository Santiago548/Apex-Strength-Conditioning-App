import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100%',
    padding: '10px',
    background: 'white',
    textDecoration: "none",
    color: "black"
}

const VideoNavigation = () => {
    return (
        <div className='navlink'>

            {/* mobility */}
            <NavLink
                to='/spine_mobility'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>SPINE</NavLink>

            <NavLink
                to='/straddle_mobility'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Straddle</NavLink>

            <NavLink
                to='/pike_mobility'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Pike</NavLink>

            <NavLink
                to='/bridges'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Bridge Training</NavLink>
{/* strength */}
            <NavLink
                to='/drop_land'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Drop/Landing</NavLink>
{/* progressions and drills */}
            <NavLink
                to='/brachiate'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Climb/Brachiate</NavLink>

            <NavLink
                to='/support_movements'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Support Movements</NavLink>

            <NavLink
                to='/run_sprint'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Run/ Sprint training</NavLink>

                {/* PROGRAMS */}

                <NavLink
                to='pkstrength/beginner'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Beginner Movements</NavLink>

            <NavLink
                to='pkstrength/intermediate'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Intermediate Movements</NavLink>

            <NavLink
                to='pkstrength/advanced'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Advanced Movements</NavLink>

        </div>
    )
}

export default VideoNavigation