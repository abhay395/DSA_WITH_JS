
function reverseString(chars){
    let i = 0;
    let j = chars.length-1;
    while(i<j){
        [chars[i],chars[j]] = [chars[j],chars[i]]
        i++
        j--
    }
    console.log(chars)
}

reverseString(["h","e","l","l","o"])