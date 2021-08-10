import React from 'react';

function Message(props) {
  const { name, render = () => {}} = props;
  return (
    <div className="message-block">
      <div id={name}>
        {props.author} : {props.text}
      </div>
    </div>

  )

}

export default Message;