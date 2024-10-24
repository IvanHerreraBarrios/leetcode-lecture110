/*

haystack = "abc"
needle = "bc"
*/

var strStr = function(haystack, needle) {
    for(let i=0; i < haystack.length; i++){
        let found = true 
        for(let j=0; j < needle.length && found; j++){
            if(haystack[i+j] !== needle[j]){
                found = false
            }
        }
        if ( found) return i
    }
    return -1  
};