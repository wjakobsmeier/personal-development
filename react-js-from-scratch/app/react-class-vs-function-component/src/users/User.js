// this is a function component
import React from "react";

const User = (props) => {
  if (!props.name) {
    return <div>Invalid user!</div>
  }
  return (
    <div>
      Name: {props.name} | age: {props.age || 'NA'}
    </div>
  )
}

export default User;