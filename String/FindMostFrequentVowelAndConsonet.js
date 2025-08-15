

function isConsonent(char) {
    if (char == 'a' || char == "e" || char == "o" || char == "i" || char == "u") {
        return false;
    }
    return true;
}

var maxFreqSum = function (s) {
    let countConsonent = 0;
    let countVowel = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let char = s[i]
        let count = 0;
        if (isConsonent(char)) {
            for (let j = i; j < len; j++) {
                if (isConsonent(s[j])) {
                    if (char == s[j]) {
                        count++;
                        countConsonent = Math.max(count, countConsonent);
                    }
                }
            }
        } else {
            for (let j = i; j < len; j++) {
                if (!isConsonent(s[j])) {
                    if (char == s[j]) {
                        count++;
                        countVowel = Math.max(count, countVowel);
                    }
                }
            }
        }
    }
    return countConsonent + countVowel
    // let map = new Map();
    // for (let i = 0; i < s.length; i++) {
    //     if (map.has(s[i])) {
    //         map.set(s[i], map.get(s[i]) + 1);
    //     } else {
    //         console.log('jsj')
    //         map.set(s[i], 1);
    //     }
    // }
    // // console.log(map)
    // let countConsonent = 0;
    // let countVowel = 0;
    // for (const [key, value] of map) {
    //     if(isConsonent(key)){
    //         countConsonent = Math.max(countConsonent,value)
    //     }else{
    //         countVowel = Math.max(countVowel,value)
            
    //     }
    // }
    // return countConsonent+countVowel
}
console.log(maxFreqSum("successes"))