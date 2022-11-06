import React from 'react';

export default props => (
  <div className="col-6 menu-summary-left" data-testid="count">
    <span>{props.total} items</span>
  </div>
);
