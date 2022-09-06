import React from 'react'

export default function Alert(props){

  return (
    <div style={{ height: '45px' }}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-${props.alert.type} fade show`} role="alert">
        <strong>{(props.alert.type)}:</strong> {props.alert.message}
      </div>}
    </div>
  );
}
