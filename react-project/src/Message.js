import React from 'react';

function Message(props) {
  const { name, render = () => {}} = props;
  return (
    <div id={name}>
      {props.author} : {props.text}
    </div>
  )

}

export default Message;