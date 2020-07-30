import React, { useEffect } from 'react'

const Notification = ({notification}) => {
    
    let notificationStyle = {
        height: '30px',
        border: 'solid 3px green',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        color: 'green',
        fontSize: '20px',
        padding: '5px 0 0 5px',
        marginBottom: '5px',
    }
    if (notification.type === 'error')
        {
            notificationStyle.color = 'red'
            notificationStyle.border = 'solid 3px red'
        }

    return (
    <div style={notificationStyle}>{notification.content}</div>
    )
}

export default Notification