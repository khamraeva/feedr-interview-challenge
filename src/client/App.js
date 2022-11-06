import React, { useState } from 'react';
import './App.css';
import useMenuPicker from './hooks/useMenuPicker';
import useDietaries from './hooks/useDietaries';
import useFetchData from './hooks/useFetchData';
import MenuSummary from './components/MenuSummary';
import MenuBuilder from './components/MenuBuilder';

export default function App () {
  const [ searchValue, setSearchValue ] = useState('');
  const { pickedList, onAddPicked, onDeletePicked } = useMenuPicker();
  const dietaryList = useDietaries(pickedList);
  const data = useFetchData(searchValue);

  return (
  <div className="wrapper">
    <MenuSummary total={pickedList.length} dietaries={dietaryList}/>
    <MenuBuilder pickItem={onAddPicked}
                 previewList={pickedList}
                 removeItem={onDeletePicked}
                 menuData={data}
                 setSearchValue={setSearchValue}
                 searchValue={searchValue}/>
  </div>
)};
