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

<NavLink
                to='/lower_body_mob'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Lower Body Mobility</NavLink>

<NavLink
                to='/ankle_mob'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Ankle mobility</NavLink>


{/* UPPER BODY */}
            <NavLink
                to='/pushing_movements'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Pushing</NavLink>

            <NavLink
                to='/pulling_movements'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Pulling</NavLink>
{/* LOWER BODY */}

            <NavLink
                to='/lowerbody'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Lower body</NavLink>

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

            <NavLink
                to='/climbup'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Climb-up</NavLink>

            <NavLink
                to='/quadrupedal'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Quadrupedal Movements</NavLink>

<NavLink
                to='/weightlifting'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Weightlifting</NavLink>

<NavLink
                to='/muscleup'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Muscle Up</NavLink>

<NavLink
                to='/rails'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Rail balance</NavLink>

<NavLink
                to='/jump_land'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>jump/Land training</NavLink>

<NavLink
                to='/squat'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Squats</NavLink>

<NavLink
                to='/hanging'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>hanging</NavLink>

<NavLink
                to='/single_leg'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Single Leg squats</NavLink>

{/* PROGRAMS */}

            <NavLink
                to='pkstrength/untrained'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Untrained Beginner</NavLink>

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

            <NavLink
                to='/parkour_freerunning'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>parkour / freerunning tutorials(beginner/intermediate)</NavLink>

            <NavLink
                to='/handstand'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Handstand</NavLink>

        </div>
    )
}

export default VideoNavigation