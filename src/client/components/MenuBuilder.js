import React, { useState } from 'react';
import MenuPreview from './MenuPreview/MenuPreview';
import MenuList from './MenuList/MenuList';
import Search from './Search';

export default function MenuBuilder(props) {
  const { pickItem, previewList, removeItem, menuData, setSearchValue, searchValue } = props;

  return (
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <Search setValue={setSearchValue} value={searchValue}/>
          { menuData && <MenuList menuList={menuData} pickItem={pickItem}/> }
        </div>
        <MenuPreview previewList={previewList} removeItem={removeItem}/>
      </div>
    </div>
  );
};
