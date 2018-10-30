/*

Travis Miller
Week 0 Assessmsnt 
JavaScript Primer

*/

// CORE FUNCTION

var repeatNumbers = function(data_sample) {
  
  // Variable Establishment
   var value_to_repeat;
   var times_to_repeat;
   var concat_result = "";
  
  
// Initial Loop to Get Access to  data samples in 2D Array
  for(var i = 0; i < data_sample.length; i++) {
    
    
      // Extract and assign varibales from each array property
      value_to_repeat = data_sample[i][0];
      times_to_repeat = data_sample[i][1];
    
    // Prepare string for concatenated display
    concat_result = concat_result + " ";
    
    // Second Loop to use the Number of times to explain
    for(var n = 0; n < times_to_repeat; n++) {
      
      // Build Concatenated Result
      concat_result += value_to_repeat;
      
            
    }
    
    // Output concatenated result
     console.log(concat_result);

    
    }
  
  //return false;
  
  
};

// DATA SAMPLES

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
