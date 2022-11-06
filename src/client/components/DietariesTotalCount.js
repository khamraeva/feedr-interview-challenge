import React, { Fragment } from 'react';
import DietaryItem from './DietaryItem';

export default function DietariesTotalCount(props) {
  const { dietaries } = props;

  return (
    <div className="col-6 menu-summary-right">
      { Object.keys(dietaries).map((key, i) => {
        return (
          <Fragment key={i}>
            {dietaries[key]}x
            <DietaryItem dietary={key}/>
          </Fragment>
        );
      })}
    </div>
  );
};
