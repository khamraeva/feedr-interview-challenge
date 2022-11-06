import { useState } from 'react';

export default function useMenuPicker() {
  const [ pickedList, setPicketList ] = useState([]);

  const onAddPicked = item => {
    const alreadyPicked = pickedList.find(picked => picked.id === item.id);
    return !alreadyPicked && setPicketList([...pickedList, item]);
  };
  
  const onDeletePicked = id => setPicketList(pickedList.filter(item => item.id !== id));

  return { pickedList, onAddPicked, onDeletePicked };
};
