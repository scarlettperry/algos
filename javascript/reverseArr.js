//input 4, [1,4,3,2]
//output 2 3 4 1
                      //length of array
function reverseArray (n, arr){
  let reverseStr = ""
  for(let i = (n -1); i >= 0; i--){
    reverseStr+= `${arr[i]} `
  }
  return reverseStr
}
