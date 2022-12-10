# MergeShort
This algorithm has two functions:
  - The firts one (divide) which will divide by half the array on two on every call and will continue to do it recursively until the last arrays have one element
  - The second one (order) will be called at the end of each divide function. It will receive two arrays (that will, at first, be the ones of a length of 1; which is the first array returned from the divide function once it does not call itself anymore) and will evaluate the first index of the two arrays (using shift) and return a new array that will have the values ordered.
  
  Since it's a recursive function the divide functions will be stack one on top of each other. The one that is on top of the stack (the last one to be called) will return an array of length one. That array will be use in the order function (once the divide function has returned a value) and the value returned from this function (an array of ordered elements) will be used for the function that is next on the execution context.
