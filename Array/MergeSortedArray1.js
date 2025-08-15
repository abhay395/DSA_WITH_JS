
var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let index = 0; 
    let nums3=[]
    while(left<m && right<n){
        if(nums1[left]<nums2[right]){
            nums3[index]=nums1[left];
            left++;
        }else{
            nums3[index]=nums2[right]
            right++;
        }
        index++;
    }
    while(left<m){
        nums3[index] = nums1[left];
        left++;
        index++;
    }
    while(right<n){
        nums3[index] = nums2[right];
        index++
        right++
    }
    for(let i = 0;i<n+m;i++){
        // if(i<m)nums1[i]=nums3[i];
         nums1[i]=nums3[i]
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))