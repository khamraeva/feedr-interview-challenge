import React from 'react';
import DietaryItem from './DietaryItem';

export default props => <p>{ props.dietaries.map((item, i) => <DietaryItem key={i} dietary={item}/>) }</p>;
