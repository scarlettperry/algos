//base 10 system (decimal) -> 0-9, powers of 10
//base 2 system (binary), -> 0 & 1, powers of 2

//converting from decimal to binary --> deconstruct the number as the sum of the powers of two

function addBinary(a,b) {
                      //give base of 2
  let total = parseInt(a,2) + parseInt(b,2)
              //give base of 2
  return total.toString(2)
}

//manual solution
function addBinaryManual(A,B) {
  //loop through each binary number concurrently adding
  //the right most bit to each other & concatenating to sum

  //want solution to be a string
  let sum = ""

  //variable that carries any bit
  let carry = 0

  //starting at the right most index
  let i = A.length - 1
  let j = B.length - 1

  //as long as there are still bits to look at in one of the inputs
  while(i >= 0 || j >= 0){
    let a = A[i] ? A[i] : 0 //in case there are undefines
    let b = B[j] ? B[j] : 0
    sum = String(a ^ b ^ carry) + sum

    if(a === b && a !== String(carry)){
      //true = 1, //false = 0
      carry = Number(!carry)
    }
    i--
    j--

  //if carry is equal to 1
  }
  if (carry) {
    sum = String(carry) + sum
  }

  return sum
}

//XOR (^) = same: 0, diff: 1
//a b c = s c
//0 0 0 = 0 0
//0 0 1 = 1 0 <-- where c is diff, when a === b and opp of c
//1 0 0 = 1 0
//1 0 1 = 0 1
//1 1 0 = 0 1 <-- where c id diff, when a === b and opp of c
//1 1 1 = 1 1
