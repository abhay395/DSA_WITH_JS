/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


function isEqual(arr1, arr2) {
    if (arr1.length != arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) return false
    }
    return true
}

var checkInclusion = function (s1, s2) {
    //     let k = s1.length;
    //     let left = 0;
    //     let freqofs2 = {};
    //     let freqOfs1 = {};
    //     for (let i = 0; i < s1.length; i++) {
    //         freqOfs1[s1[i]] = (freqOfs1[s1[i]] || 0) + 1
    //     }
    //     for (let right = 0; right < s2.length; right++) {
    //         if (right - left + 1 > k) {
    //             freqofs2[s2[left]]--;
    //             if (freqofs2[s2[left]] == 0) delete freqofs2[s2[left]]
    //             left++;
    //         }
    //         freqofs2[s2[right]] = (freqofs2[s2[right]] || 0) + 1
    //         if (right - left + 1 == k) {
    //             if (isEqual(freqOfs1, freqofs2)) return true
    //         }
    //     }
    //     return false
    // };
    // function isEqual(map1, map2) {
    //     let keys1 = Object.keys(map1);
    //     let keys2 = Object.keys(map2);
    //     if (keys1.length != keys2.length) return false;
    //     for (let key of keys1) {
    //         if (map1[key] != map2[key]) return false
    //     }
    //     return true
    if (s1.length > s2.length) return false
    let freqS1 = Array(26).fill(0)
    let freqS2 = Array(26).fill(0)
    let getIndex = (char = '') => char.charCodeAt(0) - 'a'.charCodeAt(0)
    for (let char of s1) {
        freqS1[getIndex(char)]++;
    }
    let left = 0;
    let k = s1.length;
    for (let right = 0; right < s2.length; right++) {
        if (right - left + 1 > k) {
            freqS2[getIndex(s2[left])]--
            left++;
        }
        freqS2[getIndex(s2[right])] = (freqS2[getIndex(s2[right])] || 0) + 1
        if (right - left + 1 == k) {
            if (isEqual(freqS1, freqS2)) return true
        }
    }
    return false
}


checkInclusion('adc', "dcda")