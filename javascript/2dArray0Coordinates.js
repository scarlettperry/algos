// Write a function that takes in the image and returns the coordinates of the rectangle of 0's -- either top-left and bottom-right; or top-left, width, and height.

// Sample output:
// x: 3, y: 2, width: 3, height: 2
// 2,3 3,5 -- row,column of the top-left and bottom-right corners
// 3,2 5,3 -- x,y of the top-left and bottom-right corners (as long as you stay consistent, either format is fine)


//for next time
  //should coordinates be in natural numbers?


var image = [

  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

function twoD(array){

  //all coordinates for 0s
  let coord = []

  //coordinates for top left and bottom right
  let output = []

  //grabbing each sub array
  for(let row = 0; row < array.length; row++){

    //going through each item in row of sub array (column)
    for(let i = 0; i < array[row].length; i++){

      if(array[row][i] === 0){
        coord.push(`Row: ${row}, Col: ${i}`)
      }
    }
  }

  output.push(coord[0])
  output.push(coord[coord.length-1])

  return output

}

console.log(twoD(image))
