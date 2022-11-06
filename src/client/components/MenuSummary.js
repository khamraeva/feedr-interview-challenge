import React from 'react';
import TotalCount from './TotalCount/TotalCount';
import DietariesTotalCount from './DietariesTotalCount';

export default function MenuSummary(props) {
  const { total, dietaries } = props;

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <TotalCount total={total}/>
          <DietariesTotalCount dietaries={dietaries}/>
        </div>
      </div>
    </div>
  );
};
