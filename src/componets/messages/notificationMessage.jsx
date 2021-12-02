import React from 'react'

function notificationMessage({message}) {
    return (
      <div>
        <p className="message">{message}</p>
      </div>
    );
}

export default notificationMessage;