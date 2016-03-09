/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function (){
    
    var _total= 0;
    var _memory= 0;


    function calculateTotal(x){
      _total = x;
      return _total;
    }

    function getTotal(){
      return _total;
    }

    function add(x){
      _total += x;
      return _total;
    }

    function subtract(x){
      _total = _total-x; 
      return _total;
    }

    function multiply(x){
      _total= _total * x;
      return _total;
    }

    function divide(x){
      _total= _total/x;
      return _total;
    }

    function recallMemory(){
      return _memory;
    }


    return{
      load: calculateTotal, 
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,

};


};


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

