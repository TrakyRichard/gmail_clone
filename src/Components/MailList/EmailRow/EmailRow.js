import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { selectedMail } from '../../../features/mailSlice';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectedMail({
            id,
            title,
            subject,
            description,
            time
        }));
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox className="emailRow__checkout" />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>
                    {subject} &nbsp;
                    <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <div className="emailRow__time">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailRow
