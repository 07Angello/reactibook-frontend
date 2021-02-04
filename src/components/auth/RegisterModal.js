import React from 'react';
import Modal from 'react-modal';

export const RegisterModal = () => {

    const customStyles = {
        content: {
            top : '50%',
            left : '50%',
            right : 'auto',
            bottom : 'auto',
            marginRight : '-50%',
            transform : 'translate(-50%, -50%)'
        }
    }

    const saveEvent = ( event ) => {
        event.preventDefault();

    }

    const closeModal = () => {

    }

    return (
        <div>
            <Modal
                isOpen={ false }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-background"
            >
                <h1 class="text-center">Create Account</h1>
                <hr/>
                <form
                    className="container"
                    onSubmit={ saveEvent }
                >


                    <button type="submit" className="btn btn-outline-primary btn-block">
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                </form>
                
            </Modal>
        </div>
    )
}
