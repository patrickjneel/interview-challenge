const CleanData = (data, device, property) => {
  const filterString = {mobile: 'Mobile devices with full browsers', tablet: 'Tablets with full browsers' };
  const filterProperty = { cost: 'cost', avgPos: 'avgPosition' };
  const deviceFilter = data.filter(filterDevice => filterDevice.device === filterString[device]).reverse();
  const nullCost = deviceFilter.reduce((accu, number, index, array) => {
    const nextHour = array[index + 1] || { hourOfDay: 0};
    const hourGap = nextHour.hourOfDay - number.hourOfDay;
    accu.push(number[filterProperty[property]]);
    if(hourGap > 1) {
      const nullArr = Array(hourGap - 1).fill(null);
      accu.push(...nullArr);
    } 
    return accu;
  }, Array(deviceFilter[0].hourOfDay).fill(null));

  return nullCost;
};

export default CleanData;


