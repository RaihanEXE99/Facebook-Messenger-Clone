
import React, { forwardRef } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message,username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className = {`message ${isUser && 'message__user'}`}>
            <p style={{color: 'grey',paddingLeft:'2%',paddingBottom:'1.5%'}}>{!isUser && `${message.username}`}</p>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                
                <CardContent>
                    <Typography
                        color="white"
                        variant="h6"
                        component = "h4"
                    >
                         {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})
// {!isUser && `${message.username}: `}
export default Message
