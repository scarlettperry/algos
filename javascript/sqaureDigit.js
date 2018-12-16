function squareDigits(num){
  let x = num

  let numArray = x.toString().split("")
  let squaredArray = []
  for(let i = 0; i < numArray.length; i++){
    parseInt(numArray[i])
    squaredArray.push(numArray[i] * numArray[i])
  }
  return parseInt(squaredArray.join(""))
}
