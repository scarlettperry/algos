function minMax(arr){
  let minMaxArray = [Math.min(...arr), Math.max(...arr) ]
  return minMaxArray
}

//need to use spread operator because apply method needs two arguments
//and so spread operator allows an expression to be expanded in places
//where multiple arguments are expected
