function distanceFromHqInBlocks(blockNumber) {
    const hQNumber = 42;
    return Math.abs(hQNumber-blockNumber);
}

function distanceFromHqInFeet(blockNumber) {
  const feetConversionRate = 264;
  return distanceFromHqInBlocks(blockNumber) * feetConversionRate;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetConversionRate = 264;
  return Math.abs(startBlock-endBlock)*feetConversionRate;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  const freeTravelDistance = 400;
  const freeFare = 0;
  const farePerFoot = 0.02;
  const flatFare = 25;
  const travelOverLimitMessage = 'cannot travel that far';

  if(distance<400){
      return freeFare;
  } else if (distance>=400 && distance<=2000){
    return (distance-freeTravelDistance)*farePerFoot;
  } else if (distance>2000 && distance<=2500){
    return flatFare;
  } else {
    return travelOverLimitMessage;
  }

}



