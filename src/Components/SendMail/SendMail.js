import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import firebase from 'firebase';

function SendMail() {
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
        // console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        dispatch(closeSendMessage());
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" className="sendMail__message" ref={register({ required: true })} placeholder="To" type="email" />
                {errors.to && <p className="sendMail__error">to is required</p>}
                <input name="subject" className="sendMail__message" ref={register({ required: true })} placeholder="Subject" type="text" />
                {errors.subject && <p className="sendMail__error">subject is required</p>}
                <input name="message" className="sendMail__message" ref={register({ required: true })} placeholder="Message" type="text" />
                {errors.message && <p className="sendMail__error">message is required</p>}

                <div className="sendMail__options">
                    <Button onClick={handleSubmit(onSubmit)} className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
