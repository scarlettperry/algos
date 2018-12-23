function sockMerchant(n, ar) {
    let colorTracker ={}
    let numberOfPairs = 0

    for(let color of ar){
        if(colorTracker[color]){
            colorTracker[color]++
        }
        else{
            colorTracker[color] = 1
        }
    }

    for(let key in colorTracker){
      //if key value is even
      if(colorTracker[key] % 2 === 0){
        numberOfPairs += colorTracker[key]/2
      }
      //if key value is odd
      else{
        numberOfPairs += (colorTracker[key] - 1)/2
      }
    }
    return numberOfPairs
}
