import React from 'react';
import Dietaries from '../Dietaries';

export default function MenuList(props) {
  const { menuList, pickItem } = props;

  return (
    <ul className="item-picker">
      { menuList.map(item => {
        return (
          <li key={item.id} className="item" onClick={() => pickItem(item)}>
            <h2>{item.name}</h2>
              <Dietaries dietaries={item.dietaries}/>
          </li>
        );
      })}
    </ul>
  );
};
