import React from 'react';

export default props => (
  <div className="filters">
    <input className="form-control"
            placeholder="Name"
            onChange={event => props.setValue(event.target.value)}
            value={props.value}/>
  </div>
);
