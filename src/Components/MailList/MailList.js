import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import EmailRow from './EmailRow/EmailRow';
import './MailList.css';
import Section from './Section/Section';

function MailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))));
    }, [])
    return (
        <div className="mailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={Inbox} title="primary" color="red" selected />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">
                {
                    emails.map(({ id, data: { to, subject, message, timestamp } }) => {
                        return <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                    })

                }
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />

                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />
                <EmailRow title="Twitch" subject="Hey follow the Streamer !!!" description="This is a test" time="10pm" />


            </div>
        </div>
    )
}

export default MailList
