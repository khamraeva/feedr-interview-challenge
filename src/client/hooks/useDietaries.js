export default function useDietaries(pickedList) {
  const totalDietaries = [];
  pickedList.forEach(item => totalDietaries.push(...item.dietaries));
  const dietaryList = totalDietaries.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  
  return dietaryList;
};
