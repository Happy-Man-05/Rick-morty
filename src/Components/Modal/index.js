import React from 'react';
import './Modal.css'

const Modal = ({ hide, data }) => {
    console.log(data);
    return (
        <div className='modal' onClick={hide}>
            <div className='modal_container'>
                <div onClick={hide} className='close'>X</div>
                <h2>{data.name}</h2>
                <div className='modal_img'>
                    <img src={data.image} alt="" />
                </div>
                <p>Gender :{data.gender}</p>
                <p>Species :{data.species}</p>
                <p>Status :{data.status}</p>
            </div>

        </div>
    );
};

export default Modal;