// Immediately Invoked Function Expressions (IIFE)
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

(function one(){
    console.log(`DB CONNECTED`);
    
})();

( name => {
    console.log(`DB CONNECTED-2 ${name}`);
})('ashok');

