import React, { useState } from 'react';
import Modal from '../Modal';
import './Output.css'
// import videos from './video/datective.mp4'

const Output = ({ characters }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const showModal = (id) => {
        setCurrentUser(id)
        setIsVisible(true)
    }
    const hideModal = (e) => {
        if (e.target.className == 'modal' || e.target.className == 'close') {
            setIsVisible(false)
        }
    }

    return (
        <div className='info'>
            {/* <video className='mp4_video' autoPlay loop muted >
                <source src={videos} type='video/mp4'></source>
            </video> */}
            {
                characters.map(item => (
                    <div key={item.id} className='card'>

                        <h2>{item.name}</h2>
                        <img src={item.image} alt="personage" />
                        <button className='output_btn' onClick={() => showModal(item.id)}>More...</button>
                        {isVisible && currentUser == item.id ? <Modal data={item} hide={hideModal} /> : null}
                    </div>
                ))
            }

        </div>
    );
};

export default Output;