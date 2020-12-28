import { Button, Icon, IconButton } from '@material-ui/core';
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';
import './Sidebar.css'
import SidebarOption from './SidebarOption/SidebarOption';

function Sidebar() {

    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} className="sidebar__compose" startIcon={<Add fontSize="large" />}>
                Compose
            </Button>

            <SidebarOption title="Inbox" Icon={Inbox} number={45} selected />
            <SidebarOption title="Snoozed" Icon={AccessTime} number={41} />
            <SidebarOption title="Important" Icon={LabelImportant} number={41} />
            <SidebarOption title="Sent" Icon={NearMe} number={41} />
            <SidebarOption title="Draft" Icon={Note} number={41} />
            <SidebarOption title="More" Icon={ExpandMore} number={41} />

            <div className="sidebar__footer">
                <div className="sidebar__photoIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
