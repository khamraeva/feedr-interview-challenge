import React from 'react';
import Dietaries from './Dietaries';

export default function MenuPreview(props) {
  const { previewList, removeItem } = props;

  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        { previewList.map(item => {
          return (
            <li className="item" key={item.id}>
              <h2>{item.name}</h2>
              <Dietaries dietaries={item.dietaries}/>
              <button className="remove-item" onClick={() => removeItem(item.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div> 
  );
};
