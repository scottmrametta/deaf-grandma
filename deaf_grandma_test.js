const dg = require('./deaf_grandma.js');

console.log(dg.condResponse(""));
console.log(dg.condResponse("") === "WHAT?!");
console.log(dg.condResponse("a") === "SPEAK UP, KID!");
console.log(dg.condResponse("A") === "NO, NOT SINCE 1946!");
console.log(dg.condResponse("GOODBYE!", 0) === "LEAVING SO SOON?");
console.log(dg.condResponse("GOODBYE!", 1) === "LATER, SKATER!");



/* FRAMEWORK
1. print HEY KID!
2. Prompt
3. Conditional
3a. Nothing -> WHAT?!
3b. Any lc -> SPEAK UP, KID!
    *Ref ASCII
3c. All uc -> NO, NOT SINCE 1946!
    *Ref ASCII
3d. first Goodbye -> LEAVING SO SOON?
    *Use a counter
3e. second Goodbye -> LATER, SKATER!
    *Program End
*/